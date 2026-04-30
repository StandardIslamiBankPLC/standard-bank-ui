import type { ElementType, ReactNode } from 'react';

export type TypoVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'small'
  | 'caption';

export type TypoProps = {
  as?: ElementType;
  variant?: TypoVariant;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<TypoVariant, string> = {
  h1: 'text-4xl font-semibold tracking-tight text-slate-900',
  h2: 'text-3xl font-semibold tracking-tight text-slate-900',
  h3: 'text-2xl font-semibold text-slate-900',
  h4: 'text-xl font-semibold text-slate-900',
  body: 'text-base leading-7 text-slate-700',
  small: 'text-sm text-slate-600',
  caption: 'text-xs uppercase tracking-[0.24em] text-slate-500',
};

export default function Typo({
  as: Tag = 'p',
  variant = 'body',
  children,
  className = '',
  ...props
}: TypoProps) {
  return (
    <Tag className={`${variantClasses[variant]} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
