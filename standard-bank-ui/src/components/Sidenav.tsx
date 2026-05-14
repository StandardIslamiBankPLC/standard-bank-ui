import { useState, type ReactNode } from "react";
import { Home, Users, FileText, User, ChevronDown } from "lucide-react";
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
    href: "#dashboard",
    label: "Dashboard",
    current: true,
    icon: <Home className="h-4 w-4" />,
  },
  {
    href: "#components",
    label: "Components",
    icon: <Users className="h-4 w-4" />,
    subItems: [
      { href: "#buttons", label: "Buttons", icon: <FileText className="h-4 w-4" /> },
      { href: "#cards", label: "Cards", icon: <FileText className="h-4 w-4" /> },
      { href: "#table", label: "Table", icon: <FileText className="h-4 w-4" /> },
      { href: "#dropdown", label: "Dropdown", icon: <FileText className="h-4 w-4" /> },
      { href: "#logo-image", label: "Logo / Image", icon: <FileText className="h-4 w-4" /> },
      { href: "#typography", label: "Typography", icon: <FileText className="h-4 w-4" /> },
    ],
  },
  {
    href: "#auth",
    label: "Auth Forms",
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
  const [activeItem, setActiveItem] = useState<string>(
    defaultItems.find((item) => item.current)?.label ?? defaultItems[0].label
  );
  const [profileOpen, setProfileOpen] = useState(false);

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
              const isActive = activeItem === item.label;
              const activeClass = isActive ? "bg-emerald-50 text-slate-900" : "hover:bg-emerald-50 hover:text-slate-900";

              return (
                <li key={item.label}>
                  {item.subItems ? (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveItem(item.label);
                        setOpenDropdown(isOpen ? null : item.label);
                      }}
                      className={`w-full flex items-center justify-between gap-2.5 rounded-md px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeClass}`}
                    >
                      <span className="flex items-center gap-2.5 text-left">
                        <span className="flex-none text-slate-500">{item.icon}</span>
                        {item.label}
                      </span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveItem(item.label);
                        setOpenDropdown(null);
                      }}
                      className={`w-full flex items-center gap-2.5 rounded-md px-3 py-2 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeClass}`}
                    >
                      <span className="flex-none text-slate-500">{item.icon}</span>
                      {item.label}
                    </button>
                  )}

                  {isOpen && item.subItems ? (
                    <ul className="mt-1 space-y-1 pl-8">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.label}>
                          <button
                            type="button"
                            onClick={() => setActiveItem(subItem.label)}
                            className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors text-left"
                          >
                            <span className="flex-none text-slate-500">{subItem.icon}</span>
                            {subItem.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })
          )}
        </ul>
      </nav>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => setProfileOpen((state) => !state)}
          className="flex w-full items-center gap-4 rounded-3xl border border-slate-200 bg-white px-3 py-3 text-left transition hover:border-slate-300"
        >
          <img src={profile.avatarSrc} className="w-10 h-10 rounded-md border-2 border-white" alt={profile.name} />
          <div>
            <p className="text-sm text-slate-800 font-medium">{profile.name}</p>
            <p className="text-xs text-slate-500 mt-0.5">{profile.status}</p>
          </div>
          <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
        </button>

        {profileOpen ? (
          <div className="mt-3 space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-3">
            <button type="button" className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-white hover:text-slate-900">
              Profile
            </button>
            <button type="button" className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-white hover:text-slate-900">
              Change password
            </button>
            <button type="button" className="w-full rounded-xl px-3 py-2 text-left text-sm text-red-600 hover:bg-white hover:text-red-700/10">
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
