import { useEffect, useMemo, useState, type ChangeEvent, type ReactNode } from 'react';

export interface TableColumn<T> {
  key: keyof T;
  title: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => ReactNode;
}

export interface TableProps<T extends Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  searchPlaceholder?: string;
  width?: string;
  header?: ReactNode;
  footer?: ReactNode;
  pageSizes?: number[];
  initialPageSize?: number;
  containerClassName?: string;
  className?: string;
  tableClassName?: string;
}

export default function Table<T extends Record<string, unknown>>({
  columns,
  data,
  searchPlaceholder = 'Search table...',
  width,
  header,
  footer,
  pageSizes = [50, 10, 20, 500],
  initialPageSize = 50,
  containerClassName,
  className = '',
  tableClassName = '',
}: TableProps<T>) {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [pageSize, setPageSize] = useState(initialPageSize ?? pageSizes[0]);
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const filteredData = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const matching = normalizedSearch
      ? data.filter((row) =>
          Object.values(row).some((value) =>
            String(value).toLowerCase().includes(normalizedSearch),
          ),
        )
      : data;

    if (!sortKey) {
      return matching;
    }

    return [...matching].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      const aText = aValue === null || aValue === undefined ? '' : String(aValue);
      const bText = bValue === null || bValue === undefined ? '' : String(bValue);

      if (sortOrder === 'asc') {
        return aText.localeCompare(bText, undefined, { numeric: true, sensitivity: 'base' });
      }

      return bText.localeCompare(aText, undefined, { numeric: true, sensitivity: 'base' });
    });
  }, [data, search, sortKey, sortOrder]);

  const pageCount = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const currentPageData = useMemo(
    () => filteredData.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
    [filteredData, pageIndex, pageSize],
  );

  useEffect(() => {
    if (pageIndex >= pageCount) {
      setPageIndex(0);
    }
  }, [pageCount, pageIndex]);

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 300);
    return () => window.clearTimeout(timer);
  }, [pageIndex, pageSize, search, sortKey, sortOrder]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setPageIndex(0);
  };

  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortable) return;
    if (sortKey === column.key) {
      setSortOrder((current) => (current === 'asc' ? 'desc' : 'asc'));
      return;
    }
    setSortKey(column.key);
    setSortOrder('asc');
  };

  return (
    <div
      className={`w-full max-w-full overflow-hidden rounded-3xl border border-slate-200  shadow-sm ${containerClassName ?? ''} ${className}`}
      style={width ? { width, maxWidth: '100%' } : undefined}
    >
      <div className="space-y-4 bg-slate-50 p-4">
        {header ? <div>{header}</div> : null}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="grow">
            <label className="sr-only" htmlFor="table-search">
              Search table
            </label>
            <input
              id="table-search"
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder={searchPlaceholder}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-800 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto border-t border-slate-200 relative">
        {isLoading ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              Loading...
            </div>
          </div>
        ) : null}
        <table className={`min-w-full w-full divide-y divide-slate-200 text-left text-sm ${tableClassName}`}>
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  scope="col"
                  className="px-4 py-3 font-medium uppercase tracking-wide"
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 text-left ${column.sortable ? 'cursor-pointer hover:text-slate-900' : ''}`}
                    onClick={() => handleSort(column)}
                  >
                    {column.title}
                    {column.sortable && sortKey === column.key ? (
                      <span className="text-xs text-slate-500">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    ) : null}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-900">
            {currentPageData.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 1 ? 'bg-slate-50' : ''}>
                {columns.map((column) => (
                  <td key={String(column.key)} className="px-4 py-4 align-top">
                    {column.render ? column.render(row[column.key], row) : String(row[column.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          Showing {Math.min(filteredData.length, pageIndex * pageSize + 1)} to {Math.min(filteredData.length, (pageIndex + 1) * pageSize)} of {filteredData.length} rows
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <span>Rows:</span>
            <select
              value={pageSize}
              onChange={(event) => {
                setPageSize(Number(event.target.value));
                setPageIndex(0);
              }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none"
            >
              {(pageSizes ?? [50, 10, 20, 500]).map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPageIndex((current) => Math.max(0, current - 1))}
              disabled={pageIndex === 0}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-sm text-slate-700">
              {pageIndex + 1} / {pageCount}
            </span>
            <button
              type="button"
              onClick={() => setPageIndex((current) => Math.min(pageCount - 1, current + 1))}
              disabled={pageIndex >= pageCount - 1}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {footer ? (
        <div className="rounded-b-3xl border-t border-slate-200 bg-slate-50 p-4">
          {footer}
        </div>
      ) : null}
    </div>
  );
}
