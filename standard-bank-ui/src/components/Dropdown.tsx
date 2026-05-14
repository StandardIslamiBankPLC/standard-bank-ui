import { useState, useRef, useEffect, type ReactNode } from 'react';

export interface DropdownOption {
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  placeholder?: string;
  className?: string;
}

export default function Dropdown({
  label,
  options,
  value,
  onChange,
  multiple = false,
  placeholder = 'Select option',
  className = '',
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const selectedOptions = Array.isArray(value)
    ? options.filter((option) => value.includes(option.value))
    : options.filter((option) => option.value === value);
  const selectedLabel = multiple
    ? selectedOptions.length > 0
      ? `${selectedOptions.length} selected`
      : placeholder
    : selectedOptions[0]?.label ?? placeholder;

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={ref}>
      {label ? <div className="mb-2 text-sm font-medium text-slate-700">{label}</div> : null}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-900 shadow-sm transition hover:border-slate-300"
      >
        <span>{selectedLabel}</span>
        <svg className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open ? (
        <div className="absolute left-0 z-10 mt-2 w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="space-y-1 p-2">
            {options.map((option) => {
              const checked = selectedOptions.some((item) => item.value === option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    if (multiple) {
                      const currentValues = Array.isArray(value) ? [...value] : [];
                      const nextValues = checked
                        ? currentValues.filter((item) => item !== option.value)
                        : [...currentValues, option.value];
                      onChange?.(nextValues);
                    } else {
                      onChange?.(option.value);
                      setOpen(false);
                    }
                  }}
                  className="flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100"
                >
                  {multiple ? (
                    <input
                      type="checkbox"
                      checked={checked}
                      readOnly
                      className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                  ) : null}
                  {option.icon ? <span className="flex-none">{option.icon}</span> : null}
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
