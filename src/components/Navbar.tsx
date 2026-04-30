import { useState, type ReactNode } from "react";
import { Search, Bell, Settings, User, ChevronDown } from "lucide-react";
import Logo from "./Logo";

export interface NavbarDropdownItem {
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface NavbarProps {
  title?: string;
  searchPlaceholder?: string;
  actions?: ReactNode;
  dropdownLabel?: string;
  dropdownItems?: NavbarDropdownItem[];
}

export function Navbar({
  title = "Dashboard",
  searchPlaceholder = "Search...",
  actions,
  dropdownLabel = "Account",
  dropdownItems = [],
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="text-sm font-semibold text-slate-900">{title}</p>
            <p className="text-xs text-slate-500">Quick overview of your current dashboard</p>
          </div>
        </div>

        <div className="flex flex-1 items-center gap-3">
          <label className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder={searchPlaceholder}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
            />
          </label>
        </div>

        <div className="relative flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          >
            <Bell className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          >
            <Settings className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            <User className="h-5 w-5" />
            <span>{dropdownLabel}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
          </button>

          {actions}

          {dropdownItems.length > 0 && menuOpen ? (
            <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-xl">
              {dropdownItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    item.onClick?.();
                    setMenuOpen(false);
                  }}
                  disabled={item.disabled}
                  className="flex w-full items-center gap-2 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-400"
                >
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
