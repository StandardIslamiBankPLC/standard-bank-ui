import { useState, type ReactNode, type CSSProperties } from "react";
import { Menu, X } from "lucide-react";

// ─── Sub-types ────────────────────────────────────────────────────────────────

/** A single item rendered inside the account dropdown menu. */
export interface NavbarDropdownItem {
  /** Visible text for the item. */
  label: string;
  /** Optional URL — renders an <a> tag instead of <button>. */
  href?: string;
  /** Called when the item is clicked (button mode). */
  onClick?: () => void;
  /** Prevents interaction and grays out the item. */
  disabled?: boolean;
}

// ─── Main props ───────────────────────────────────────────────────────────────

export interface NavbarProps {
  // ── Slots ──────────────────────────────────────────────────────────────────
  /**
   * Content placed on the **left** side (e.g. `<Logo />`).
   * Always visible on every screen size.
   */
  left?: ReactNode;

  /**
   * Content placed in the **center** (e.g. a search bar).
   * Hidden on mobile — collapses into the hamburger dropdown.
   */
  middle?: ReactNode;

  /**
   * Content placed on the **right** side (e.g. icon buttons, avatar).
   * Hidden on mobile — collapses into the hamburger dropdown.
   */
  right?: ReactNode;

  // ── Behaviour ──────────────────────────────────────────────────────────────
  /**
   * CSS position strategy.
   * - `"sticky"` — sticks to the top while scrolling (default).
   * - `"fixed"`  — always fixed at the top, content scrolls beneath it.
   * - `"static"` — normal document flow, does not stick.
   * @default "sticky"
   */
  position?: "sticky" | "fixed" | "static";

  /**
   * Maximum width of the inner container.
   * Accepts any Tailwind `max-w-*` value or a custom CSS value.
   * @default "max-w-7xl"
   * @example "max-w-5xl" | "max-w-full" | "1200px"
   */
  maxWidth?: string;

  /**
   * Show the bottom border that separates the navbar from page content.
   * @default true
   */
  bordered?: boolean;

  /**
   * Apply the frosted-glass `backdrop-blur` effect.
   * @default true
   */
  blur?: boolean;

  // ── Styling overrides ──────────────────────────────────────────────────────
  /** Additional class names applied to the `<header>` element. */
  className?: string;

  /** Inline styles applied to the `<header>` element. */
  style?: CSSProperties;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const POSITION_CLASS: Record<NonNullable<NavbarProps["position"]>, string> = {
  sticky: "sticky top-0",
  fixed: "fixed top-0 inset-x-0",
  static: "relative",
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Navbar({
  left,
  middle,
  right,
  position = "sticky",
  maxWidth = "max-w-7xl",
  bordered = true,
  blur = true,
  className = "",
  style,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerClass = [
    "z-30",
    POSITION_CLASS[position],
    bordered ? "border-b border-slate-200" : "",
    blur ? "bg-white/95 backdrop-blur-xl" : "bg-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // When `position="fixed"` the navbar is taken out of flow — add a spacer.
  const Spacer = position === "fixed" ? <div className="h-[60px]" aria-hidden /> : null;

  return (
    <>
      {Spacer}
      <header className={headerClass} style={style}>
        {/* ── Desktop row ───────────────────────────────────────────── */}
        <div
          className={`mx-auto flex ${maxWidth} items-center justify-between gap-4 px-4 py-3 sm:px-6`}
        >
          {/* Left slot — always visible */}
          <div className="flex shrink-0 items-center gap-3">{left}</div>

          {/* Middle slot — hidden on mobile */}
          <div className="hidden flex-1 items-center gap-3 md:flex">{middle}</div>

          {/* Right slot — hidden on mobile */}
          <div className="hidden items-center gap-2 md:flex">{right}</div>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* ── Mobile dropdown ───────────────────────────────────────── */}
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-3 md:hidden">
            {middle && <div className="mb-3 w-full">{middle}</div>}
            {right && <div className="flex flex-wrap items-center gap-2">{right}</div>}
          </div>
        )}
      </header>
    </>
  );
}
