import { useEffect, useState } from "react"
import type { ReactNode } from "react"

export interface SectionTab {
  value: string
  label: ReactNode
  disabled?: boolean
}

export interface SectionProps {
  children: ReactNode | ((activeTab: string | undefined) => ReactNode)
  title?: ReactNode
  className?: string
  id?: string
  rounded?: boolean
  tabs?: SectionTab[]
  selectedTab?: string
  defaultSelectedTab?: string
  onTabChange?: (tab: string) => void
}

export function Section({
  children,
  title,
  className = '',
  id,
  rounded = false,
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

  return (
    <section id={id} className={`${rounded ? 'rounded-3xl' : ''} border border-emerald-200 bg-white p-8 shadow-sm ${className}`}>
      {title ? (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
        </div>
      ) : null}

      {tabs?.length ? (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value
            return (
              <button
                key={tab.value}
                type="button"
                disabled={tab.disabled}
                onClick={() => handleTabChange(tab.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                } ${tab.disabled ? 'cursor-not-allowed opacity-60' : ''}`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      ) : null}

      {typeof children === 'function' ? children(activeTab) : children}
    </section>
  )
}
