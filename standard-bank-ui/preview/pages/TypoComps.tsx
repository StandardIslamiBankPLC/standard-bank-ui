import StandardBankUI from '../../src/index'

const ColorPalette = ['#F5FAF5', '#D2E9D6', '#3AB157', '#66C17B', '#97D3A2', '#B7E0BF']
const PrimaryColor = ColorPalette[2]
const background = ColorPalette[1]

export default function TypoComps() {
  return (
    <StandardBankUI.Section id="typography" title="Typography" rounded className="space-y-8 bg-[#F5FAF5]">
      <div>
        <StandardBankUI.Typo variant="h3">Typography examples</StandardBankUI.Typo>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          A set of text styles that show headings, body copy, small text, and captions for polished UI layout.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-3xl border border-[#B7E0BF] bg-[#F5FAF5] p-6">
          <StandardBankUI.Typo variant="h1">Heading 1</StandardBankUI.Typo>
          <StandardBankUI.Typo variant="h2">Heading 2</StandardBankUI.Typo>
          <StandardBankUI.Typo variant="h3">Heading 3</StandardBankUI.Typo>
          <StandardBankUI.Typo variant="h4">Heading 4</StandardBankUI.Typo>
        </div>

        <div className="space-y-6 rounded-3xl border border-[#B7E0BF] bg-[#F5FAF5] p-6">
          <StandardBankUI.Typo variant="body">
            This is body text with a comfortable line-height, perfect for paragraphs and content areas.
          </StandardBankUI.Typo>
          <StandardBankUI.Typo variant="small">
            Small text is useful for secondary details and supporting information.
          </StandardBankUI.Typo>
          <StandardBankUI.Typo variant="caption">
            Caption text works well for labels, footnotes, and metadata.
          </StandardBankUI.Typo>
        </div>
      </div>
    </StandardBankUI.Section>
  )
}
