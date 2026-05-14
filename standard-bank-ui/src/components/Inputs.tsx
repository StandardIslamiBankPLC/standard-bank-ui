import { useMemo, useState, type CSSProperties, type InputHTMLAttributes, type ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";
import { BackgroundColor, PrimaryColor } from "../index";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helpText?: string;
  error?: string;
  icon?: ReactNode;
  addon?: ReactNode;
  addonPosition?: "start" | "end";
  type?: "text" | "email" | "password" | "search" | "tel" | "url";
  showPasswordToggle?: boolean;
}

export default function Input({
  label,
  helpText,
  error,
  icon,
  addon,
  addonPosition = "start",
  type = "text",
  showPasswordToggle = true,
  className = "",
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const showAddon = Boolean(addon);
  const inputType = useMemo(() => (isPassword && showPassword ? "text" : type), [isPassword, showPassword, type]);

  const wrapperStyle = {
    borderColor: error ? "#f87171" : PrimaryColor,
    backgroundColor: showAddon ? BackgroundColor : "#ffffff",
    color: PrimaryColor,
    "--tw-ring-color": error ? "rgba(248, 113, 113, 0.25)" : "rgba(58, 177, 87, 0.2)",
  } as CSSProperties;

  const addonStyle = {
    borderColor: PrimaryColor,
    backgroundColor: BackgroundColor,
    color: PrimaryColor,
  } as CSSProperties;

  const inputStyle = {
    borderColor: error ? "#f87171" : PrimaryColor,
    color: "#0f172a",
  } as CSSProperties;

  return (
    <div className={`space-y-2 ${className}`}>
      {label ? (
        <label className="block text-sm font-medium" style={{ color: PrimaryColor }}>
          {label}
        </label>
      ) : null}
      <div
        className={`flex items-stretch overflow-hidden rounded-2xl border focus-within:ring-2 ${showAddon ? "" : "relative"}`}
        style={wrapperStyle}
      >
        {showAddon && addonPosition === "start" ? (
          <span className="inline-flex items-center px-4 text-sm border-r" style={addonStyle}>
            {addon}
          </span>
        ) : null}
        <div className={`${showAddon ? "relative flex-1" : "relative"}`}>
          {icon ? (
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center" style={{ color: PrimaryColor }}>
              {icon}
            </div>
          ) : null}
          <input
            {...props}
            type={inputType}
            className={`w-full ${showAddon ? "h-full rounded-none border-none" : "rounded-2xl border"} px-4 py-3 text-sm outline-none transition focus:ring-0 ${
              icon ? "pl-11" : ""
            } ${isPassword && showPasswordToggle ? "pr-12" : ""}`}
            style={inputStyle}
          />
          {isPassword && showPasswordToggle ? (
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute inset-y-0 right-3 flex items-center"
              style={{ color: PrimaryColor }}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          ) : null}
        </div>
        {showAddon && addonPosition === "end" ? (
          <span className="inline-flex items-center px-4 text-sm border-l" style={addonStyle}>
            {addon}
          </span>
        ) : null}
      </div>
      {helpText ? <p className="text-sm" style={{ color: PrimaryColor }}>{helpText}</p> : null}
      {error ? <p className="text-sm" style={{ color: "#b91c1c" }}>{error}</p> : null}
    </div>
  );
}
