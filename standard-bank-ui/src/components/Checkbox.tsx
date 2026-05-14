import type { CSSProperties, InputHTMLAttributes } from 'react';
import { PrimaryColor, TextColor } from '../index';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export default function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  const checkboxStyle = {
    borderColor: PrimaryColor,
    accentColor: PrimaryColor,
  } as CSSProperties;

  const labelStyle = {
    color: TextColor,
  } as CSSProperties;

  return (
    <label className={`inline-flex items-center gap-3 text-sm ${className}`} style={labelStyle}>
      <input
        {...props}
        type="checkbox"
        className="h-4 w-4 rounded border-2 focus:outline-none focus:ring-2"
        style={{
          ...checkboxStyle,
          '--tw-ring-color': `${PrimaryColor}40`,
        } as CSSProperties}
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
