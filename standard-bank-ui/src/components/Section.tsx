import { useEffect, useState } from "react"
import type { CSSProperties, ReactNode } from "react"
import { ColorPalette, PrimaryColor } from "../index"

export interface SectionTab {
  value: string
  label: ReactNode
  disabled?: boolean
}

type SectionRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export interface SectionProps {
  children: ReactNode | ((activeTab: string | undefined) => ReactNode)
  title?: ReactNode
  footer?: ReactNode
  className?: string
  id?: string
  rounded?: boolean | SectionRadius
  padding?: SectionPadding
  solidBack?: boolean
  tabs?: SectionTab[]
  selectedTab?: string
  defaultSelectedTab?: string
  onTabChange?: (tab: string) => void
}

export function Section({
  children,
  title,
  footer,
  className = '',
  id,
  rounded = false,
  padding = 'xl',
  solidBack = true,
  tabs,
  selectedTab,
  defaultSelectedTab,
  onTabChange,
}: SectionProps) {
  const [activeTab, setActiveTab] = useState<string | undefined>(
    selectedTab ?? defaultSelectedTab ?? tabs?.[0]?.value
  )

  useEffect(() => {
    if (selectedTab !== undefined) {
      setActiveTab(selectedTab)
    }
  }, [selectedTab])

  const handleTabChange = (value: string) => {
    if (value === activeTab) return
    if (selectedTab === undefined) {
      setActiveTab(value)
    }
    onTabChange?.(value)
  }

  const roundedClassBySize: Record<SectionRadius, string> = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  }

  const paddingClassBySize: Record<SectionPadding, string> = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-7',
    xl: 'p-8',
  }

  const roundedClass = typeof rounded === 'boolean'
    ? roundedClassBySize[rounded ? '3xl' : 'none']
    : roundedClassBySize[rounded]

  const paddingClass = paddingClassBySize[padding]
  const isPlainTitle = typeof title === 'string' || typeof title === 'number'

  const sectionStyle: CSSProperties = solidBack
    ? {
      borderColor: ColorPalette[1],
      backgroundColor: "#ffffff",
      boxShadow: "0 18px 45px rgba(15, 23, 42, 0.10)",
    }
    : {
      borderColor: ColorPalette[5],
      backgroundColor: `${ColorPalette[0]}E6`,
      backdropFilter: "blur(24px) saturate(160%)",
      WebkitBackdropFilter: "blur(24px) saturate(160%)",
      boxShadow: "0 24px 60px rgba(15, 23, 42, 0.16)",
    }

  return (
    <section id={id} className={`${roundedClass} border ${paddingClass} ${solidBack ? "shadow-lg" : "shadow-xl"} ${className}`} style={sectionStyle}>
      {title ? (
        <div className="mb-6">
          {isPlainTitle ? (
            <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em]" style={{ color: PrimaryColor, width: 300 }}>{title}</h2>
          ) : (
            title
          )}
        </div>
      ) : null}

      {tabs?.length ? (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value
            const tabStyle = isActive
              ? { backgroundColor: PrimaryColor, color: "#ffffff" }
              : { backgroundColor: ColorPalette[1], color: PrimaryColor }

            return (
              <button
                key={tab.value}
                type="button"
                disabled={tab.disabled}
                onClick={() => handleTabChange(tab.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${tab.disabled ? 'cursor-not-allowed opacity-60' : 'hover:-translate-y-0.5 hover:shadow-sm'}`}
                style={tabStyle}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      ) : null}

      {typeof children === 'function' ? children(activeTab) : children}

      {footer ? (
        <div className="mt-6 border-t pt-4" style={{ borderColor: ColorPalette[1], color: PrimaryColor }}>
          {footer}
        </div>
      ) : null}
    </section>
  )
}
