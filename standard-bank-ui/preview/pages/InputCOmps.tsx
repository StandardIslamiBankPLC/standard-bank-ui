import StandardBankUI from '../../src/index'

const ColorPalette = ['#F5FAF5', '#D2E9D6', '#3AB157', '#66C17B', '#97D3A2', '#B7E0BF']
const PrimaryColor = ColorPalette[2]
const background = ColorPalette[1]

export default function InputComps() {
  return (
    <StandardBankUI.Section id="inputs" title="Input examples" rounded className="space-y-8 bg-[#F5FAF5]">
      <div>
        <StandardBankUI.Typo variant="h3">Input add-on support</StandardBankUI.Typo>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          The Input component now supports add-on content before or after the field for currency symbols, units, and supplementary labels.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-[#B7E0BF] bg-[#F5FAF5] p-6">
          <StandardBankUI.Typo variant="h4" className="mb-4">Add-on before</StandardBankUI.Typo>
          <StandardBankUI.Input label="Amount" placeholder="0.00" addon="$" addonPosition="start" />
        </div>

        <div className="rounded-3xl border border-[#B7E0BF] bg-[#F5FAF5] p-6">
          <StandardBankUI.Typo variant="h4" className="mb-4">Add-on after</StandardBankUI.Typo>
          <StandardBankUI.Input label="Currency" placeholder="Enter value" addon="USD" addonPosition="end" />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-200">
        <StandardBankUI.Typo variant="h4" className="mb-4 text-white">Usage</StandardBankUI.Typo>
        <pre className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-200">
{`<StandardBankUI.Input label="Amount" placeholder="0.00" addon="$" addonPosition="start" />
<StandardBankUI.Input label="Currency" placeholder="Enter value" addon="USD" addonPosition="end" />`}
        </pre>
      </div>
    </StandardBankUI.Section>
  )
}
