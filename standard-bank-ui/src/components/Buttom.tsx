import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

/**
 * Color variants for button intent.
 *
 * - primary: main action
 * - secondary: secondary action
 * - danger: destructive action
 * - success: positive confirmation
 * - warning: cautionary action
 * - default: neutral action
 */
export type ButtonColorVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "default";

/**
 * Button variants include the color intent plus ghost and link styles.
 */
export type ButtonVariant = ButtonColorVariant | "ghost" | "link";

/**
 * Visual style options for the button.
 *
 * - default: filled button
 * - ghost: outlined / subtle button
 * - link: inline text link style
 * - glass: semi-transparent glass effect
 * - solid: solid white background
 * - faded: muted translucent background
 * - bordered: bordered white button
 * - light: light background button
 * - flat: flat transparent button
 * - shadow: raised button with shadow
 */
export type ButtonStyle =
  | "default"
  | "ghost"
  | "link"
  | "glass"
  | "solid"
  | "faded"
  | "bordered"
  | "light"
  | "flat"
  | "shadow";

/**
 * Button sizes.
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Base color palette used for primary variants.
 */
export type ButtonBaseColor = "emerald" | "slate" | "rose" | "amber";

/**
 * Props for a native button element.
 */
type ButtonElementProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
};

/**
 * Props for an anchor-style button.
 */
type AnchorButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  type?: never;
};

/**
 * Button component props.
 *
 * The component supports both <button> and <a> modes, icon placement,
 * loading state, disabled state, fullWidth layout, and custom styles.
 */
export type ButtonProps = (ButtonElementProps | AnchorButtonProps) & {
  variant?: ButtonVariant;
  buttonStyle?: ButtonStyle;
  size?: ButtonSize;
  baseColor?: ButtonBaseColor;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
};

/**
 * Primary button colors and hover animation classes.
 *
 * The default state is a solid background and the hover state rolls in
 * a gradient animation by moving the background position from left to right.
 */
const primaryColorClasses: Record<ButtonBaseColor, string> = {
  emerald: "bg-emerald-700 text-white transition-all duration-200 ease-out hover:bg-emerald-700 focus-visible:ring-emerald-400/70",
  slate: "bg-slate-700 text-white transition-all duration-200 ease-out hover:bg-slate-800 focus-visible:ring-slate-500/70",
  rose: "bg-rose-600 text-white transition-all duration-200 ease-out hover:bg-rose-700 focus-visible:ring-rose-500/70",
  amber: "bg-amber-400 text-slate-900 transition-all duration-200 ease-out hover:bg-amber-500 focus-visible:ring-amber-300/70",
};

const defaultVariantClasses: Record<Exclude<ButtonColorVariant, "primary">, string> = {
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400/70",
  danger: "bg-red-500 text-white transition-all duration-200 ease-out hover:bg-red-600 focus-visible:ring-red-400/70",
  success: "bg-green-500 text-white hover:bg-green-600 focus-visible:ring-emerald-400/70",
  warning: "bg-amber-400 text-slate-900 transition-all duration-200 ease-out hover:bg-amber-500 focus-visible:ring-amber-300/70",
  default: "bg-slate-100 text-slate-500 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-300 hover:text-slate-600 focus-visible:ring-slate-400/70",
};

const ghostPrimaryColorClasses: Record<ButtonBaseColor, string> = {
  emerald: "border-emerald-500 text-emerald-700 hover:bg-emerald-50 focus-visible:ring-emerald-500",
  slate: "border-slate-500 text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-500",
  rose: "border-rose-500 text-rose-700 hover:bg-rose-50 focus-visible:ring-rose-500",
  amber: "border-amber-500 text-amber-700 hover:bg-amber-50 focus-visible:ring-amber-500",
};

const ghostVariantClasses: Record<ButtonVariant, string> = {
  primary: "",
  secondary: "border-slate-300 text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400",
  danger: "border-red-500 text-red-700 hover:bg-red-50 focus-visible:ring-red-500",
  success: "border-green-500 text-green-700 hover:bg-green-50 focus-visible:ring-green-500",
  warning: "border-amber-500 text-amber-700 hover:bg-amber-50 focus-visible:ring-amber-500",
  default: "border-neutral-300 text-slate-900 hover:bg-neutral-100 focus-visible:ring-neutral-400",
  ghost: "border-slate-300 text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400",
  link: "text-slate-700 hover:text-slate-900",
};

const linkVariantClasses: Record<ButtonVariant, string> = {
  primary: "text-emerald-700 hover:text-emerald-900",
  secondary: "text-slate-700 hover:text-slate-900",
  danger: "text-red-700 hover:text-red-900",
  success: "text-green-700 hover:text-green-900",
  warning: "text-amber-700 hover:text-amber-900",
  default: "text-slate-700 hover:text-slate-900",
  ghost: "text-slate-700 hover:text-slate-900",
  link: "text-slate-700 hover:text-slate-900",
};

const glassVariantClasses: Record<ButtonVariant, string> = {
  primary: "text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 focus-visible:ring-emerald-400/60",
  secondary: "text-slate-900 border-slate-200/20 hover:bg-slate-100 hover:border-slate-300/40 focus-visible:ring-slate-400/60",
  danger: "text-red-700 border-red-200 hover:bg-red-100 hover:border-red-300/40 focus-visible:ring-red-400/60",
  success: "text-green-700 border-green-200 hover:bg-green-100 hover:border-green-300/40 focus-visible:ring-emerald-300/60",
  warning: "text-amber-700 border-amber-200 hover:bg-amber-100 hover:border-amber-300/40 focus-visible:ring-amber-300/60",
  default: "text-slate-900 border-slate-200/20 hover:bg-slate-100 hover:border-slate-300/40 focus-visible:ring-slate-400/60",
  ghost: "text-slate-900 border-slate-200/20 hover:bg-slate-100 hover:border-slate-300/40 focus-visible:ring-slate-400/60",
  link: "text-slate-900/90 hover:text-slate-900",
};

const borderedVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 focus-visible:ring-emerald-300",
  secondary: "bg-white text-slate-800 border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-slate-300",
  danger: "bg-white text-red-700 border-red-300 hover:bg-red-50 hover:border-red-400 focus-visible:ring-red-300",
  success: "bg-white text-green-700 border-green-300 hover:bg-green-50 hover:border-green-400 focus-visible:ring-green-300",
  warning: "bg-white text-amber-700 border-amber-300 hover:bg-amber-50 hover:border-amber-400 focus-visible:ring-amber-300",
  default: "bg-white text-slate-800 border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-slate-300",
  ghost: "bg-white text-slate-800 border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-slate-300",
  link: "bg-white text-slate-700 border-slate-300 hover:text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-300",
};

const lightVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100 hover:border-emerald-200 focus-visible:ring-emerald-300",
  secondary: "bg-slate-50 text-slate-800 border-slate-100 hover:bg-slate-100 hover:border-slate-200 focus-visible:ring-slate-300",
  danger: "bg-red-50 text-red-700 border-red-100 hover:bg-red-100 hover:border-red-200 focus-visible:ring-red-300",
  success: "bg-green-50 text-green-700 border-green-100 hover:bg-green-100 hover:border-green-200 focus-visible:ring-green-300",
  warning: "bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100 hover:border-amber-200 focus-visible:ring-amber-300",
  default: "bg-slate-50 text-slate-800 border-slate-100 hover:bg-slate-100 hover:border-slate-200 focus-visible:ring-slate-300",
  ghost: "bg-slate-50 text-slate-800 border-slate-100 hover:bg-slate-100 hover:border-slate-200 focus-visible:ring-slate-300",
  link: "bg-slate-50 text-slate-700 border-slate-100 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300",
};

const flatVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-transparent text-emerald-700 border-transparent hover:bg-emerald-500/10 hover:border-emerald-500/20 focus-visible:ring-emerald-300",
  secondary: "bg-transparent text-slate-800 border-transparent hover:bg-slate-500/10 hover:border-slate-500/20 focus-visible:ring-slate-300",
  danger: "bg-transparent text-red-700 border-transparent hover:bg-red-500/10 hover:border-red-500/20 focus-visible:ring-red-300",
  success: "bg-transparent text-green-700 border-transparent hover:bg-green-500/10 hover:border-green-500/20 focus-visible:ring-green-300",
  warning: "bg-transparent text-amber-700 border-transparent hover:bg-amber-500/10 hover:border-amber-500/20 focus-visible:ring-amber-300",
  default: "bg-transparent text-slate-800 border-transparent hover:bg-slate-500/10 hover:border-slate-500/20 focus-visible:ring-slate-300",
  ghost: "bg-transparent text-slate-800 border-transparent hover:bg-slate-500/10 hover:border-slate-500/20 focus-visible:ring-slate-300",
  link: "bg-transparent text-slate-700 border-transparent hover:text-slate-900 hover:bg-slate-500/5 focus-visible:ring-slate-300",
};

const shadowVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-emerald-600 text-white shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:shadow-emerald-700/25 focus-visible:ring-emerald-300",
  default: "bg-slate-700 text-white shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/25 focus-visible:ring-slate-300",
  danger: "bg-red-600 text-white shadow-lg shadow-red-700/20 hover:shadow-xl hover:shadow-red-700/25 focus-visible:ring-red-300",
  success: "bg-green-600 text-white shadow-lg shadow-green-700/20 hover:shadow-xl hover:shadow-green-700/25 focus-visible:ring-green-300",
  warning: "bg-amber-500 text-slate-900 shadow-lg shadow-amber-700/20 hover:shadow-xl hover:shadow-amber-700/25 focus-visible:ring-amber-300",
  secondary: "bg-slate-700 text-white shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/15 focus-visible:ring-slate-300",
  ghost: "bg-slate-700 text-white shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/15 focus-visible:ring-slate-300",
  link: "bg-slate-100 text-slate-700 shadow-lg shadow-slate-900/10 hover:text-slate-900 hover:shadow-xl focus-visible:ring-slate-300",
};

const styleClasses: Record<ButtonStyle, string> = {
  default: "shadow-none active:translate-y-0",
  ghost: "bg-transparent border focus-visible:ring-2 focus-visible:ring-offset-2",
  link: "bg-transparent px-0 underline-offset-4 focus-visible:ring-2 focus-visible:ring-offset-2",
  glass: "bg-slate-100/70 border border-slate-200/40 backdrop-blur-2xl shadow-none hover:bg-slate-200/70 hover:border-slate-300/40 focus-visible:ring-slate-400/40",
  solid: "bg-white border border-transparent shadow-none",
  faded: "bg-white/70 border border-white/50 backdrop-blur-sm shadow-none",
  bordered: "bg-white border shadow-none",
  light: "bg-slate-50 border border-slate-200 shadow-none",
  flat: "bg-transparent border border-transparent shadow-none",
  shadow: "bg-white border border-transparent shadow-sm",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

/**
 * DefaultButton is the core button component used by StandardBankUI.
 *
 * It supports:
 * - variant: primary / secondary / danger / success / warning / default / ghost / link
 * - buttonStyle: default / ghost / link / glass / solid / faded / bordered / light / flat / shadow
 * - size: sm / md / lg
 * - baseColor: emerald / slate / rose / amber
 * - icons and iconPosition
 * - fullWidth layout
 * - loading and disabled states
 * - anchor mode when href is provided
 */
export function DefaultButton({
  variant = "primary",
  buttonStyle = "default",
  size = "md",
  baseColor = "emerald",
  fullWidth = false,
  loading = false,
  disabled,
  className,
  icon,
  iconPosition = "left",
  children,
  type = "button",
  href,
  ...props
}: ButtonProps) {
  const buttonProps = props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;
  const anchorProps = props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;
  const isDisabled = disabled || loading;
  const normalizedStyle =
    variant === "ghost"
      ? "ghost"
      : variant === "link"
      ? "link"
      : buttonStyle;
  const normalizedVariant =
    variant === "ghost" || variant === "link" ? "default" : variant;

  const styleClass = styleClasses[normalizedStyle];
  const variantClass =
    normalizedStyle === "ghost"
      ? normalizedVariant === "primary"
        ? ghostPrimaryColorClasses[baseColor]
        : ghostVariantClasses[normalizedVariant]
      : normalizedStyle === "solid"
      ? normalizedVariant === "primary"
        ? primaryColorClasses[baseColor]
        : defaultVariantClasses[normalizedVariant]
      : normalizedStyle === "faded"
      ? normalizedVariant === "primary"
        ? lightVariantClasses[normalizedVariant]
        : lightVariantClasses[normalizedVariant]
      : normalizedStyle === "bordered"
      ? borderedVariantClasses[normalizedVariant]
      : normalizedStyle === "light"
      ? lightVariantClasses[normalizedVariant]
      : normalizedStyle === "flat"
      ? flatVariantClasses[normalizedVariant]
      : normalizedStyle === "shadow"
      ? shadowVariantClasses[normalizedVariant]
      : normalizedStyle === "glass"
      ? glassVariantClasses[normalizedVariant]
      : normalizedStyle === "link"
      ? linkVariantClasses[normalizedVariant]
      : normalizedVariant === "primary"
      ? primaryColorClasses[baseColor]
      : defaultVariantClasses[normalizedVariant];

  const classes = [
    "inline-flex items-center justify-center gap-2.5 rounded-sm border border-transparent font-medium transition-all duration-300 ease-out transform-gpu",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-60",
    loading
      ? "cursor-wait opacity-90"
      : normalizedStyle === "link" || normalizedVariant === "default" || normalizedVariant === "primary" || normalizedVariant === "danger" || normalizedVariant === "warning"
      ? ""
      : "hover:brightness-[1.02]",
    styleClass,
    variantClass,
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = loading ? (
    <span className="flex items-center gap-2">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      Loading...
    </span>
  ) : (
    <>
      {icon && iconPosition === "left" ? <span className="shrink-0">{icon}</span> : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? <span className="shrink-0">{icon}</span> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={isDisabled} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
