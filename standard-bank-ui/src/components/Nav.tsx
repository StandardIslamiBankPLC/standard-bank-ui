import { useState, type ReactNode } from "react";
import { Home, Users, FileText, Clock, User, ChevronDown } from "lucide-react";
import Logo from "./Logo";

export interface SidebarNavItem {
  href: string;
  label: string;
  icon: ReactNode;
  current?: boolean;
  subItems?: Omit<SidebarNavItem, "subItems">[];
}

export interface SidebarNavProfile {
  avatarSrc: string;
  name: string;
  status: string;
}

export interface SidebarNavProps {
  navItems?: SidebarNavItem[];
  profile?: SidebarNavProfile;
  className?: string;
  loading?: boolean;
}

const defaultItems: SidebarNavItem[] = [
  {
    href: "#",
    label: "Dashboard",
    current: true,
    icon: <Home className="h-4 w-4" />,
  },
  {
    href: "#",
    label: "Audience",
    icon: <Users className="h-4 w-4" />,
    subItems: [
      {
        href: "#",
        label: "All Audience",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        href: "#",
        label: "Segments",
        icon: <Clock className="h-4 w-4" />,
      },
    ],
  },
  {
    href: "#",
    label: "Posts",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    href: "#",
    label: "Schedules",
    icon: <Clock className="h-4 w-4" />,
  },
  {
    href: "#",
    label: "Profile",
    icon: <User className="h-4 w-4" />,
  },
];

const defaultProfile: SidebarNavProfile = {
  avatarSrc: "https://readymadeui.com/team-2.webp",
  name: "John Doe",
  status: "Active free account",
};

export function SidebarNav({
  navItems = defaultItems,
  profile = defaultProfile,
  className = "",
  loading = false,
}: SidebarNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <aside
      className={`bg-white border-r border-slate-300 w-full h-full flex flex-col fixed top-0 left-0 max-w-[264px] py-6 px-4 overflow-auto ${className}`}
    >
      <div className="min-w-9 mb-8 px-3">
        <Logo />
      </div>

      <nav aria-label="Primary sidebar navigation" className="flex-1">
        <ul className="space-y-2 text-sm text-slate-800 font-medium">
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <div className="h-10 rounded-md bg-slate-200/80 animate-pulse" />
              </li>
            ))
          ) : (
            navItems.map((item) => {
              const isOpen = item.subItems && openDropdown === item.label;
              const activeClass = item.current ? "bg-emerald-200 text-slate-900" : "hover:bg-emerald-200 hover:text-slate-900";

              return (
                <li key={item.label}>
                  {item.subItems ? (
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      className={`w-full flex items-center justify-between gap-2.5 rounded-md px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeClass}`}
                    >
                      <span className="flex items-center gap-2.5 text-left">
                        <span className="flex-none text-slate-500">{item.icon}</span>
                        {item.label}
                      </span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={`flex items-center gap-2.5 rounded-md px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeClass}`}
                    >
                      <span className="flex-none text-slate-500">{item.icon}</span>
                      {item.label}
                    </a>
                  )}

                  {isOpen && item.subItems ? (
                    <ul className="mt-1 space-y-1 pl-8">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.label}>
                          <a
                            href={subItem.href}
                            className="flex items-center gap-2.5 rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                          >
                            <span className="flex-none text-slate-500">{subItem.icon}</span>
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              )
            })
          )}
        </ul>
      </nav>

      <a href="#" className="flex flex-wrap items-center gap-4 cursor-pointer mt-6">
        <img
          src={profile.avatarSrc}
          className="w-10 h-10 rounded-md border-2 border-white"
          alt={profile.name}
        />
        <div>
          <p className="text-sm text-slate-800 font-medium">{profile.name}</p>
          <p className="text-xs text-slate-500 mt-0.5">{profile.status}</p>
        </div>
      </a>
    </aside>
  );
}
