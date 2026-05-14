import { useMemo, useState, type CSSProperties, type ChangeEvent, type InputHTMLAttributes, type KeyboardEvent, type ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";
import { BackgroundColor, PrimaryColor } from "../index";

type FilterHelpers = {
  setError: (message?: string) => void;
  setWarning: (message?: string) => void;
  setMessage: (message?: string, kind?: "error" | "warning") => void;
};

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onSubmit"> {
  label?: string;
  helpText?: string;
  error?: string;
  warning?: string;
  icon?: ReactNode;
  addon?: ReactNode;
  addonPosition?: "start" | "end";
  type?: "text" | "email" | "password" | "search" | "tel" | "url";
  showPasswordToggle?: boolean;
  filter?: (value: string, helpers: FilterHelpers) => string;
  onSubmit?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  helpText,
  error,
  warning,
  icon,
  addon,
  addonPosition = "start",
  type = "text",
  showPasswordToggle = true,
  filter,
  className = "",
  onChange,
  onKeyDown,
  onSubmit,
  disabled = false,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [filterError, setFilterError] = useState<string | undefined>(undefined);
  const [filterWarning, setFilterWarning] = useState<string | undefined>(undefined);
  const isPassword = type === "password";
  const showAddon = Boolean(addon);
  const inputType = useMemo(() => (isPassword && showPassword ? "text" : type), [isPassword, showPassword, type]);

  const effectiveError = error ?? filterError;
  const effectiveWarning = warning ?? filterWarning;
  const disabledStyle = disabled
    ? {
      borderColor: "#d1d5db",
      backgroundColor: "#f3f4f6",
      color: "#9ca3af",
      cursor: "not-allowed",
    }
    : null;

  const wrapperStyle = {
    borderColor: effectiveError ? "#f87171" : disabled ? "#d1d5db" : PrimaryColor,
    backgroundColor: showAddon ? BackgroundColor : "#ffffff",
    color: disabled ? "#9ca3af" : PrimaryColor,
    "--tw-ring-color": effectiveError ? "rgba(248, 113, 113, 0.25)" : disabled ? "rgba(156, 163, 175, 0.2)" : "rgba(58, 177, 87, 0.2)",
  } as CSSProperties;

  const addonStyle = {
    borderColor: effectiveError ? "#f87171" : disabled ? "#e5e7eb" : BackgroundColor,
    backgroundColor: disabled ? "#f3f4f6" :effectiveError ? "#f87171" :  BackgroundColor,
    color: disabled ? "#9ca3af" : "#0f172a",
  } as CSSProperties;

  const inputStyle = {
    borderColor: effectiveError ? "#f87171" : disabled ? "#d1d5db" : PrimaryColor,
    color: disabled ? "#9ca3af" : "#0f172a",
  } as CSSProperties;

  const feedback = effectiveError ?? effectiveWarning ?? helpText;
  const hasFeedback = Boolean(feedback);
  const feedbackColor = effectiveError ? "#b91c1c" : effectiveWarning ? "#a16207" : PrimaryColor;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    setFilterError(undefined);
    setFilterWarning(undefined);

    if (filter) {
      const helpers: FilterHelpers = {
        setError: (message) => setFilterError(message),
        setWarning: (message) => setFilterWarning(message),
        setMessage: (message, kind = "warning") => {
          if (kind === "error") {
            setFilterError(message);
            setFilterWarning(undefined);
            return;
          }

          setFilterWarning(message);
          setFilterError(undefined);
        },
      };

      const filteredValue = filter(event.target.value, helpers);
      if (filteredValue !== event.target.value) {
        event.target.value = filteredValue;
      }
    }
    onChange?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    if (event.key === "Enter") {
      onSubmit?.(event.currentTarget.value, event);
    }
    onKeyDown?.(event);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label ? (
        <label className="block text-sm font-medium sm:text-sm" style={{ color: PrimaryColor }}>
          {label}
        </label>
      ) : null}
      <div
        className={`flex flex-col items-stretch overflow-hidden rounded-sm border focus-within:ring-2 sm:flex-row ${showAddon ? "" : "relative"}`}
        style={wrapperStyle}
      >
        {showAddon && addonPosition === "start" ? (
          <span className="inline-flex w-full items-center justify-center border-b px-3 py-2 text-sm sm:w-auto sm:justify-start sm:border-b-0 sm:border-r sm:px-4 sm:py-0" style={addonStyle}>
            {addon}
          </span>
        ) : null}
        <div className={`${showAddon ? "relative min-w-0 flex-1" : "relative"}`}>
          {icon ? (
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center" style={{ color: PrimaryColor }}>
              {icon}
            </div>
          ) : null}
          <input
            {...props}
            type={inputType}
            disabled={disabled}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={`w-full ${showAddon ? "h-full" : ""} rounded-none border-none bg-white px-3 py-2 text-sm outline-none transition focus:ring-0 sm:px-4 sm:py-3 ${
              icon ? "pl-11" : ""
            } ${isPassword && showPasswordToggle ? "pr-12" : ""} ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
            style={disabledStyle ? { ...inputStyle, ...disabledStyle } : inputStyle}
          />
          {isPassword && showPasswordToggle ? (
            <button
              type="button"
              disabled={disabled}
              onClick={() => setShowPassword((value) => !value)}
              className="absolute inset-y-0 right-3 flex items-center disabled:cursor-not-allowed disabled:opacity-50"
              style={{ color: disabled ? "#9ca3af" : PrimaryColor }}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          ) : null}
        </div>
        {showAddon && addonPosition === "end" ? (
          <span className="inline-flex w-full items-center justify-center border-t px-3 py-2 text-sm sm:w-auto sm:justify-start sm:border-t-0 sm:border-l sm:px-4 sm:py-0" style={addonStyle}>
            {addon}
          </span>
        ) : null}
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${hasFeedback ? "max-h-16 translate-y-0 opacity-100" : "max-h-0 -translate-y-1 opacity-0"}`}
        aria-live="polite"
      >
        {hasFeedback ? (
          <p className="pt-1 text-sm" style={{ color: feedbackColor }}>
            {feedback}
          </p>
        ) : null}
      </div>
    </div>
  );
}
