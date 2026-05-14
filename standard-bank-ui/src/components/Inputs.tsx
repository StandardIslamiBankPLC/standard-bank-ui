import { useMemo, useState, type InputHTMLAttributes, type ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helpText?: string;
  error?: string;
  icon?: ReactNode;
  type?: "text" | "email" | "password" | "search" | "tel" | "url";
  showPasswordToggle?: boolean;
}

export default function Input({
  label,
  helpText,
  error,
  icon,
  type = "text",
  showPasswordToggle = true,
  className = "",
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = useMemo(() => (isPassword && showPassword ? "text" : type), [isPassword, showPassword, type]);

  return (
    <div className={`space-y-2 ${className}`}>
      {label ? <label className="block text-sm font-medium text-slate-900">{label}</label> : null}
      <div className="relative">
        {icon ? <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">{icon}</div> : null}
        <input
          {...props}
          type={inputType}
          className={`w-full rounded-2xl border px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-800 focus:ring-2 focus:ring-emerald-100 ${
            icon ? "pl-11" : ""
          } ${isPassword && showPasswordToggle ? "pr-12" : ""} ${error ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-slate-200 bg-white"}`}
        />
        {isPassword && showPasswordToggle ? (
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="absolute inset-y-0 right-3 flex items-center text-slate-500"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        ) : null}
      </div>
      {helpText ? <p className="text-sm text-slate-500">{helpText}</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
