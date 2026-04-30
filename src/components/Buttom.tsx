import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "default";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonBaseColor = "emerald" | "slate" | "rose" | "amber";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  baseColor?: ButtonBaseColor;
  fullWidth?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
}

const primaryColorClasses: Record<ButtonBaseColor, string> = {
  emerald: "bg-emerald-800 text-white hover:bg-emerald-900 focus-visible:ring-emerald-500",
  slate: "bg-slate-700 text-white hover:bg-slate-800 focus-visible:ring-slate-500",
  rose: "bg-rose-700 text-white hover:bg-rose-800 focus-visible:ring-rose-500",
  amber: "bg-amber-600 text-slate-900 hover:bg-amber-700 focus-visible:ring-amber-400",
};

const variantClasses: Record<Exclude<ButtonVariant, "primary">, string> = {
  secondary: "bg-black text-emerald-50 hover:bg-slate-900 focus-visible:ring-emerald-300",
  danger: "bg-red-800 text-white hover:bg-red-900 focus-visible:ring-red-500",
  success: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-400",
  warning: "bg-amber-500 text-slate-900 hover:bg-amber-600 focus-visible:ring-amber-300",
  default: "bg-neutral-300 text-slate-900 hover:bg-neutral-400 focus-visible:ring-neutral-400",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export function DefaultButton({
  variant = "primary",
  size = "md",
  baseColor = "emerald",
  fullWidth = false,
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const classes = [
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 shadow-sm",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-60",
    loading ? "cursor-wait opacity-90" : "hover:shadow-md",
    variant === "primary" ? primaryColorClasses[baseColor] : variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} disabled={isDisabled} className={classes} {...props}>
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
