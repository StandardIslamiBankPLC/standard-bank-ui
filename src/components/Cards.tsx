import type { ReactNode } from "react";

export interface CardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  footer?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  variant?: "default" | "elevated" | "outline";
  className?: string;
  children?: ReactNode;
}

const variantClasses: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-white border border-slate-200 shadow-sm",
  elevated: "bg-white shadow-2xl",
  outline: "bg-white border border-slate-200",
};

export default function CardComponents({
  title,
  subtitle,
  description,
  footer,
  imageSrc,
  imageAlt = "Card image",
  variant = "default",
  className = "",
  children,
}: CardProps) {
  return (
    <article className={`overflow-hidden rounded-3xl p-6 ${variantClasses[variant]} ${className}`}>
      {imageSrc ? (
        <div className="mb-4 overflow-hidden rounded-3xl">
          <img src={imageSrc} alt={imageAlt} className="h-56 w-full object-cover" />
        </div>
      ) : null}

      <div className="space-y-3">
        {title ? <h2 className="text-xl font-semibold text-slate-900">{title}</h2> : null}
        {subtitle ? <p className="text-sm font-medium uppercase tracking-[0.16em] text-emerald-700">{subtitle}</p> : null}
        {description ? <p className="text-slate-600">{description}</p> : null}
        {children}
      </div>

      {footer ? <div className="mt-6 border-t border-slate-200 pt-4">{footer}</div> : null}
    </article>
  );
}
