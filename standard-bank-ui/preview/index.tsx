import { createRoot } from 'react-dom/client'
import StandardBankUI, { Button } from '../src/index'
import TypoComps from './pages/TypoComps'
import '../src/index.css'
import logo from '../src/assets/logo.svg'
import { ButtonComponents } from './pages/ButtonComps'

const ColorPalette = ['#F5FAF5', '#D2E9D6', '#3AB157', '#66C17B', '#97D3A2', '#B7E0BF']
const PrimaryColor = ColorPalette[2]
const background = ColorPalette[1]

function App() {


  return (
    <main className="min-h-screen" style={{ backgroundColor: background }}>
      <StandardBankUI.TopNavbar
        position="sticky"
        maxWidth="max-w-6xl"
        left={
          <div className="flex items-center gap-4">
            <StandardBankUI.Image
              src={logo}
              className="h-11 w-11 object-cover rounded-2xl"
              alt="Standard Bank UI logo"
            />
            <div>
              <p className="text-lg font-semibold text-slate-950">Standard Bank UI</p>
              <p className="text-sm text-slate-500">A Tailwind-first design system for modern finance apps.</p>
            </div>
          </div>
        }
        right={<Button variant="primary" style={{ backgroundColor: PrimaryColor, borderColor: PrimaryColor }}>Get started</Button>}
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <StandardBankUI.Card
            title="Responsive design"
            description="Built with mobile-first responsiveness, clean spacing, and accessible controls."
            variant="outline"
            className="text-slate-700 bg-[#F5FAF5]"
          />
          <StandardBankUI.Card
            title="Tailwind-friendly"
            description="Use the library as-is or extend every component with Tailwind classes."
            variant="outline"
            className="text-slate-700 bg-[#F5FAF5]"
          />
          <StandardBankUI.Card
            title="Ready for production"
            description="A polished UI foundation for dashboards, portals, and financial applications."
            variant="outline"
            className="text-slate-700 bg-[#F5FAF5]"
          />
        </div>

        <div className="mt-12 space-y-12">
          <StandardBankUI.Section rounded className="space-y-8 bg-[#F5FAF5]">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <StandardBankUI.Typo variant="h2" className="text-4xl font-bold text-slate-950">
                  A modern banking UI system that feels effortless.
                </StandardBankUI.Typo>
                <p className="mt-4 max-w-2xl text-slate-600 leading-8">
                  From buttons and cards to form controls and navigation, the library helps teams ship consistent financial experiences with elegant spacing, subtle elevation, and polished typography.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-[#F5FAF5] p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#3AB157]">Fast setup</p>
                  <p className="mt-3 text-slate-700">Install once and use an opinionated component set for dashboards and portals.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-[#F5FAF5] p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#3AB157]">Accessible</p>
                  <p className="mt-3 text-slate-700">Every control is designed for keyboard-first interactions and clear hierarchy.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-[#F5FAF5] p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#3AB157]">Flexible</p>
                  <p className="mt-3 text-slate-700">Tailwind-ready classes let you customize layouts with confidence.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-[#F5FAF5] p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#3AB157]">Well structured</p>
                  <p className="mt-3 text-slate-700">Clean component APIs keep your UI consistent across screens.</p>
                </div>
              </div>
            </div>
          </StandardBankUI.Section>

          <TypoComps />
          <ButtonComponents />
        </div>
    </main>
  )
}

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(<App />)
}
