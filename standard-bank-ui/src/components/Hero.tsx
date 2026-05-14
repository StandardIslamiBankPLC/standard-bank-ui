import { ReactNode } from 'react'

export interface HeroProps {
  backgroundImage?: string
  title?: string
  subtitle?: string
  children?: ReactNode
  className?: string
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  contentAlignment?: 'start' | 'center' | 'end'
  overlay?: boolean
}

const heightClasses = {
  sm: 'h-64',
  md: 'h-80',
  lg: 'h-[500px]',
  xl: 'h-screen',
  full: 'h-screen',
}

const alignmentClasses = {
  start: 'items-start justify-start',
  center: 'items-center justify-center',
  end: 'items-end justify-end',
}

export function Hero({
  backgroundImage,
  title,
  subtitle,
  children,
  className = '',
  height = 'lg',
  contentAlignment = 'center',
  overlay = true,
}: HeroProps) {
  const heightClass = heightClasses[height]
  const alignClass = alignmentClasses[contentAlignment]

  return (
    <section
      className={`relative w-full ${heightClass} flex ${alignClass} text-white overflow-hidden ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Overlay */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Content */}
      <div className="relative z-10 px-6 py-12 text-center max-w-4xl">
        {title && <h1 className="text-5xl font-bold mb-4">{title}</h1>}
        {subtitle && <p className="text-xl text-white/90 mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
