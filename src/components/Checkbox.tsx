import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export default function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label className={`inline-flex items-center gap-3 text-sm text-slate-900 ${className}`}>
      <input
        {...props}
        type="checkbox"
        className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
