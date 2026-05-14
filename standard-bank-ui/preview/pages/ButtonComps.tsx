import { useState } from "react"
import { Check, Heart, Share2, Trash2, Download, Send } from "lucide-react";
import StandardBankUI from "../../src";

const ColorPalette = ['#F5FAF5', '#D2E9D6', '#3AB157', '#66C17B', '#97D3A2', '#B7E0BF']
const PrimaryColor = ColorPalette[2]
const background = ColorPalette[1]

/**
 * BUTTON COMPONENT GUIDE
 * 
 * The Button component is a versatile, fully customizable button with support for:
 * - Multiple variants (primary, secondary, danger, success, warning, default, ghost, link)
 * - Multiple styles (default, ghost, link, glass, faded, bordered, light, flat, shadow)
 * - Multiple sizes (sm, md, lg)
 * - Multiple base colors (emerald, slate, rose, amber)
 * - Icons with positioning (left or right)
 * - Loading state
 * - Disabled state
 * - Full width option
 * 
 * USAGE:
 * <StandardBankUI.Button
 *   variant="primary"          // Color variant
 *   buttonStyle="default"      // Visual style
 *   size="md"                  // Size
 *   baseColor="emerald"        // Primary color (when variant is primary)
 *   icon={<Icon />}            // Optional icon
 *   iconPosition="left"        // Icon position (left or right)
 *   fullWidth={false}          // Make button full width
 *   loading={false}            // Show loading state
 *   disabled={false}          // Disable button
 * >
 *   Button Text
 * </StandardBankUI.Button>
 */

export function ButtonComponents() {
  const [showCode, setShowCode] = useState(false)
  const [copyStatus, setCopyStatus] = useState('Copy code')

  const buttonImplementation = `import StandardBankUI from '../../src';

<StandardBankUI.Button variant="primary" size="md">Primary</StandardBankUI.Button>`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buttonImplementation)
      setCopyStatus('Copied!')
      window.setTimeout(() => setCopyStatus('Copy code'), 1500)
    } catch {
      setCopyStatus('Copy failed')
      window.setTimeout(() => setCopyStatus('Copy code'), 1500)
    }
  }

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 lg:px-10" style={{ backgroundColor: background }}>
      <StandardBankUI.Section title="Button component" rounded className="space-y-8 bg-[#F5FAF5]">
        <div>
          <StandardBankUI.Typo variant="h1" className="text-5xl font-bold text-slate-950">
            Button
          </StandardBankUI.Typo>
          <p className="mt-4 max-w-3xl text-slate-600 leading-8">
            The Button component is the most versatile action control in the system. Use it for primary actions, links, loading states, and polished UI interactions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-[#F5FAF5] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3AB157]">Quick start</p>
            <p className="mt-3 text-slate-700">Install once and start using button variants for your forms, modals, and actions.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-[#F5FAF5] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3AB157]">Consistent states</p>
            <p className="mt-3 text-slate-700">Supports disabled, loading, active, and icon-enhanced button patterns.</p>
          </div>
        </div>
      </StandardBankUI.Section>

      <StandardBankUI.Section title="Import" rounded className="space-y-8 bg-[#F5FAF5]">
        <p className="text-slate-600">Import the button component through your library entrypoint.</p>
        <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-6 text-sm text-slate-200">
{`import StandardBankUI from '../../src';

// Use StandardBankUI.Button in your components`}
        </pre>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="rounded-3xl border border-slate-200 bg-[#F5FAF5] p-6 text-slate-700">
            Click the button to reveal the implementation snippet for this button.
          </div>
          <StandardBankUI.Button
            type="button"
            variant="primary"
            size="sm"
            className="rounded-full px-5 py-2"
            style={{ backgroundColor: PrimaryColor, borderColor: PrimaryColor }}
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? 'Hide implementation' : 'Show implementation'}
          </StandardBankUI.Button>
        </div>

        {showCode ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-200">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-slate-100">Button implementation example</p>
              <StandardBankUI.Button
                type="button"
                variant="secondary"
                size="sm"
                className="rounded-full px-4 py-2"
                onClick={handleCopy}
              >
                {copyStatus}
              </StandardBankUI.Button>
            </div>
            <pre className="mt-4 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-200">
{buttonImplementation}
            </pre>
          </div>
        ) : null}
      </StandardBankUI.Section>

      <StandardBankUI.Section id="examples" title="Examples" rounded className="space-y-10">
        <div className="space-y-6">
          <StandardBankUI.Typo variant="h2" className="text-3xl font-bold text-slate-950">
            Examples
          </StandardBankUI.Typo>
          <p className="text-slate-600 max-w-2xl">
            Core button patterns for appearance, sizes, colors, icons, and responsive interactions.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-slate-700">
          <a href="#basic" className="rounded-full border border-[#B7E0BF] bg-[#F5FAF5] px-4 py-2 shadow-sm transition hover:border-[#3AB157] hover:text-[#3AB157]">Basic</a>
          <a href="#appearance" className="rounded-full border border-[#B7E0BF] bg-[#F5FAF5] px-4 py-2 shadow-sm transition hover:border-[#3AB157] hover:text-[#3AB157]">Appearance</a>
          <a href="#sizes" className="rounded-full border border-[#B7E0BF] bg-[#F5FAF5] px-4 py-2 shadow-sm transition hover:border-[#3AB157] hover:text-[#3AB157]">Sizes</a>
          <a href="#colors" className="rounded-full border border-[#B7E0BF] bg-[#F5FAF5] px-4 py-2 shadow-sm transition hover:border-[#3AB157] hover:text-[#3AB157]">Colors</a>
          <a href="#icon-before" className="rounded-full border border-[#B7E0BF] bg-[#F5FAF5] px-4 py-2 shadow-sm transition hover:border-[#3AB157] hover:text-[#3AB157]">Icon before</a>
          <a href="#icon-after" className="rounded-full border border-[#B7E0BF] bg-[#F5FAF5] px-4 py-2 shadow-sm transition hover:border-[#3AB157] hover:text-[#3AB157]">Icon after</a>
          <a href="#block" className="rounded-full border border-[#B7E0BF] bg-[#F5FAF5] px-4 py-2 shadow-sm transition hover:border-[#3AB157] hover:text-[#3AB157]">Block</a>
          <a href="#disabled" className="rounded-full border border-[#B7E0BF] bg-[#F5FAF5] px-4 py-2 shadow-sm transition hover:border-[#3AB157] hover:text-[#3AB157]">Disabled</a>
          <a href="#active" className="rounded-full border border-[#B7E0BF] bg-[#F5FAF5] px-4 py-2 shadow-sm transition hover:border-[#3AB157] hover:text-[#3AB157]">Active</a>
          <a href="#loading" className="rounded-full border border-[#B7E0BF] bg-[#F5FAF5] px-4 py-2 shadow-sm transition hover:border-[#3AB157] hover:text-[#3AB157]">Loading</a>
        </div>

        <div id="basic" className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#B7E0BF] bg-[#F5FAF5] p-8 shadow-sm">
            <StandardBankUI.Typo variant="h3" className="text-2xl font-semibold text-slate-950 mb-3">
              Basic
            </StandardBankUI.Typo>
            <div className="flex flex-wrap gap-3">
              <StandardBankUI.Button variant="primary">Primary</StandardBankUI.Button>
              <StandardBankUI.Button variant="secondary">Secondary</StandardBankUI.Button>
              <StandardBankUI.Button variant="default">Default</StandardBankUI.Button>
              <StandardBankUI.Button variant="danger">Danger</StandardBankUI.Button>
              <StandardBankUI.Button variant="success">Success</StandardBankUI.Button>
              <StandardBankUI.Button variant="warning">Warning</StandardBankUI.Button>
              <StandardBankUI.Button variant="ghost" baseColor="emerald">Ghost</StandardBankUI.Button>
              <StandardBankUI.Button variant="link">Link</StandardBankUI.Button>
            </div>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-300">
{`<StandardBankUI.Button variant="primary">Primary</StandardBankUI.Button>
<StandardBankUI.Button variant="secondary">Secondary</StandardBankUI.Button>
<StandardBankUI.Button variant="default">Default</StandardBankUI.Button>`}
            </pre>
          </div>

          <div id="appearance" className="rounded-3xl border border-[#B7E0BF] bg-[#F5FAF5] p-8 shadow-sm">
            <StandardBankUI.Typo variant="h3" className="text-2xl font-semibold text-slate-950 mb-3">
              Appearance
            </StandardBankUI.Typo>
            <div className="grid gap-3 sm:grid-cols-2">
              <StandardBankUI.Button variant="primary" buttonStyle="default">Default</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" buttonStyle="glass">Glass</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" buttonStyle="bordered">Bordered</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" buttonStyle="light">Light</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" buttonStyle="flat">Flat</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" buttonStyle="shadow">Shadow</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" buttonStyle="faded">Faded</StandardBankUI.Button>
            </div>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-300">
{`<StandardBankUI.Button buttonStyle="glass">Glass</StandardBankUI.Button>
<StandardBankUI.Button buttonStyle="bordered">Bordered</StandardBankUI.Button>`}
            </pre>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div id="sizes" className="rounded-3xl border border-[#B7E0BF] bg-[#F5FAF5] p-8 shadow-sm">
            <StandardBankUI.Typo variant="h3" className="text-2xl font-semibold text-slate-950 mb-3">
              Sizes
            </StandardBankUI.Typo>
            <div className="flex flex-wrap gap-3">
              <StandardBankUI.Button variant="primary" size="lg">Large</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" size="md">Medium</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" size="sm">Small</StandardBankUI.Button>
            </div>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-300">
{`<StandardBankUI.Button size="lg">Large</StandardBankUI.Button>
<StandardBankUI.Button size="md">Medium</StandardBankUI.Button>`}
            </pre>
          </div>

          <div id="colors" className="rounded-3xl border border-[#B7E0BF] bg-[#F5FAF5] p-8 shadow-sm">
            <StandardBankUI.Typo variant="h3" className="text-2xl font-semibold text-slate-950 mb-3">
              Colors
            </StandardBankUI.Typo>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StandardBankUI.Button variant="primary" baseColor="emerald">Emerald</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" baseColor="slate">Slate</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" baseColor="rose">Rose</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" baseColor="amber">Amber</StandardBankUI.Button>
            </div>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-300">
{`<StandardBankUI.Button baseColor="emerald">Emerald</StandardBankUI.Button>
<StandardBankUI.Button baseColor="rose">Rose</StandardBankUI.Button>`}
            </pre>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div id="icon-before" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <StandardBankUI.Typo variant="h3" className="text-2xl font-semibold text-slate-950 mb-3">
              Icon before
            </StandardBankUI.Typo>
            <div className="grid grid-cols-2 gap-3">
              <StandardBankUI.Button variant="primary" icon={<Download size={16} />} iconPosition="left" size="sm">Download</StandardBankUI.Button>
              <StandardBankUI.Button variant="success" icon={<Check size={16} />} iconPosition="left" size="sm">Confirm</StandardBankUI.Button>
              <StandardBankUI.Button variant="danger" icon={<Trash2 size={16} />} iconPosition="left" size="sm">Delete</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" icon={<Send size={16} />} iconPosition="left" size="sm">Send</StandardBankUI.Button>
            </div>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-300">
{`<StandardBankUI.Button icon={<Download size={16} />} iconPosition="left">Download</StandardBankUI.Button>`}
            </pre>
          </div>

          <div id="icon-after" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <StandardBankUI.Typo variant="h3" className="text-2xl font-semibold text-slate-950 mb-3">
              Icon after
            </StandardBankUI.Typo>
            <div className="grid grid-cols-2 gap-3">
              <StandardBankUI.Button variant="primary" icon={<Share2 size={16} />} iconPosition="right" size="sm">Share</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" icon={<Heart size={16} />} iconPosition="right" size="sm">Like</StandardBankUI.Button>
              <StandardBankUI.Button variant="secondary" icon={<Download size={16} />} iconPosition="right" size="sm">Export</StandardBankUI.Button>
              <StandardBankUI.Button variant="primary" icon={<Send size={16} />} iconPosition="right" size="sm">Submit</StandardBankUI.Button>
            </div>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-300">
{`<StandardBankUI.Button icon={<Share2 size={16} />} iconPosition="right">Share</StandardBankUI.Button>`}
            </pre>
          </div>
        </div>

        <div id="block" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <StandardBankUI.Typo variant="h3" className="text-2xl font-semibold text-slate-950 mb-3">
            Block
          </StandardBankUI.Typo>
          <div className="space-y-4">
            <StandardBankUI.Button variant="primary" size="md" fullWidth>Full Width Button</StandardBankUI.Button>
            <StandardBankUI.Button variant="secondary" size="md" fullWidth>Secondary Full Width</StandardBankUI.Button>
          </div>
          <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-300">
{`<StandardBankUI.Button fullWidth size="md">Full Width Button</StandardBankUI.Button>`}
          </pre>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div id="disabled" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <StandardBankUI.Typo variant="h3" className="text-2xl font-semibold text-slate-950 mb-3">
              Disabled
            </StandardBankUI.Typo>
            <div className="flex flex-wrap gap-3">
              <StandardBankUI.Button variant="primary" disabled size="sm">Disabled</StandardBankUI.Button>
              <StandardBankUI.Button variant="secondary" disabled size="sm">Disabled</StandardBankUI.Button>
            </div>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-300">
{`<StandardBankUI.Button disabled>Disabled</StandardBankUI.Button>`}
            </pre>
          </div>

          <div id="active" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <StandardBankUI.Typo variant="h3" className="text-2xl font-semibold text-slate-950 mb-3">
              Active
            </StandardBankUI.Typo>
            <div className="flex flex-wrap gap-3">
              <StandardBankUI.Button variant="primary" size="sm" className="bg-emerald-700/95 shadow-inner">Active</StandardBankUI.Button>
              <StandardBankUI.Button variant="secondary" size="sm" className="bg-slate-300/95 text-slate-900 shadow-inner">Active</StandardBankUI.Button>
            </div>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-300">
{`<StandardBankUI.Button className="bg-emerald-700/95 shadow-inner" size="sm">Active</StandardBankUI.Button>`}
            </pre>
          </div>

          <div id="loading" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <StandardBankUI.Typo variant="h3" className="text-2xl font-semibold text-slate-950 mb-3">
              Loading
            </StandardBankUI.Typo>
            <StandardBankUI.Button variant="primary" loading size="sm">Saving</StandardBankUI.Button>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-300">
{`<StandardBankUI.Button loading size="sm">Saving</StandardBankUI.Button>`}
            </pre>
          </div>
        </div>
      </StandardBankUI.Section>

      <StandardBankUI.Section id="accessibility" title="Accessibility" rounded className="space-y-6">
        <p className="text-slate-600">Button behavior supports keyboard interaction and ARIA-friendly states.</p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <StandardBankUI.Typo variant="h4" className="text-lg font-semibold text-slate-950 mb-3">ARIA Properties</StandardBankUI.Typo>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li>• Provides the correct button role.</li>
              <li>• Disabled state is accessible.</li>
              <li>• Anchor buttons render semantic links.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <StandardBankUI.Typo variant="h4" className="text-lg font-semibold text-slate-950 mb-3">Keyboard Interaction</StandardBankUI.Typo>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li>• Enter and Space activate the button.</li>
              <li>• Focus ring appears for keyboard navigation.</li>
              <li>• Loading buttons prevent duplicate actions.</li>
            </ul>
          </div>
        </div>
      </StandardBankUI.Section>

      <StandardBankUI.Section id="props" title="Props" rounded className="space-y-6">
        <p className="text-slate-600">Full props reference for the button component.</p>

        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 p-6">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-600">
                <th className="py-3 px-4 text-left font-semibold">Prop</th>
                <th className="py-3 px-4 text-left font-semibold">Type</th>
                <th className="py-3 px-4 text-left font-semibold">Default</th>
                <th className="py-3 px-4 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">variant</td>
                <td className="py-3 px-4">ButtonVariant</td>
                <td className="py-3 px-4">"primary"</td>
                <td className="py-3 px-4">Button color variant and intent.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">buttonStyle</td>
                <td className="py-3 px-4">ButtonStyle</td>
                <td className="py-3 px-4">"default"</td>
                <td className="py-3 px-4">Visual style such as glass, bordered, or flat.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">size</td>
                <td className="py-3 px-4">ButtonSize</td>
                <td className="py-3 px-4">"md"</td>
                <td className="py-3 px-4">Button size: sm, md, or lg.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">baseColor</td>
                <td className="py-3 px-4">ButtonBaseColor</td>
                <td className="py-3 px-4">"emerald"</td>
                <td className="py-3 px-4">Palette color for the primary variant.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">icon</td>
                <td className="py-3 px-4">ReactNode</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">Optional icon before or after the label.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">iconPosition</td>
                <td className="py-3 px-4">"left" | "right"</td>
                <td className="py-3 px-4">"left"</td>
                <td className="py-3 px-4">Icon placement inside the button.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">fullWidth</td>
                <td className="py-3 px-4">boolean</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Stretch button to the full container width.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">loading</td>
                <td className="py-3 px-4">boolean</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Show a loading spinner.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">disabled</td>
                <td className="py-3 px-4">boolean</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Disable button interaction.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">href</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">Render as an anchor link when provided.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-300">className</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">Custom CSS classes for the button.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </StandardBankUI.Section>
    </div>
  )
}
