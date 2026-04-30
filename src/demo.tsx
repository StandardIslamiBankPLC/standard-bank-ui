import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import StandardBankUI, { Button, Card, Input } from './index'
import './index.css'

const exampleCode = `import StandardBankUI from 'standard-bank-ui'

function Example() {
  return (
    <>
      <StandardBankUI.Button variant="primary">Primary</StandardBankUI.Button>
      <StandardBankUI.Button variant="default">Default</StandardBankUI.Button>
      <StandardBankUI.Card
        title="Library Card"
        subtitle="Component preview"
        description="A simple UI card showing title, subtitle, description and a footer action button."
        footer={<StandardBankUI.Button variant="primary">Take Action</StandardBankUI.Button>}
      />
    </>
  )
}`

const cardExampleCode = `import StandardBankUI from 'standard-bank-ui'

function CardExample() {
  return (
    <StandardBankUI.Card
      title="Library Card"
      subtitle="Component preview"
      description="A simple UI card showing title, subtitle, description and a footer action button."
      footer={<StandardBankUI.Button variant="primary">Take Action</StandardBankUI.Button>}
    />
  )
}`
const logoExampleCode = `import StandardBankUI from 'standard-bank-ui'

function LogoExample() {
  return <StandardBankUI.Logo />;
}`

const dropdownExampleCode = `import StandardBankUI from 'standard-bank-ui'

function DropdownExample() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <StandardBankUI.Dropdown
      label="Choose features"
      multiple
      options={[
        { value: 'alerts', label: 'Alerts' },
        { value: 'reports', label: 'Reports' },
        { value: 'users', label: 'Users' },
      ]}
      value={selected}
      onChange={setSelected}
      placeholder="Select options"
    />
  );
}
`

const typoExampleCode = `import StandardBankUI from 'standard-bank-ui'

function TypographyExample() {
  return (
    <>
      <StandardBankUI.Typo variant="h1">Heading one</StandardBankUI.Typo>
      <StandardBankUI.Typo variant="h3">Section heading</StandardBankUI.Typo>
      <StandardBankUI.Typo variant="body">
        A simple typography component for consistent headings, body text, and captions.
      </StandardBankUI.Typo>
      <StandardBankUI.Typo variant="caption">Caption text</StandardBankUI.Typo>
    </>
  )
}`

const tableExampleCode = `import StandardBankUI from 'standard-bank-ui'

function TableExample() {
  const columns = [
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'role', title: 'Role', sortable: true },
  ];

  const data = [
    { name: 'Jane Cooper', email: 'jane@example.com', role: 'Designer' },
    { name: 'John Doe', email: 'john@example.com', role: 'Developer' },
    { name: 'Sam Taylor', email: 'sam@example.com', role: 'Manager' },
  ];

  return (
    <StandardBankUI.Table
      width="900px"
      columns={columns}
      data={data}
      header={<div className="text-lg font-semibold text-slate-900">Team members</div>}
      footer={<div className="text-sm text-slate-500">Showing 3 team members</div>}
    />
  );
}
`

type TableRow = {
  name: string;
  email: string;
  role: string;
};

const tableColumns: { key: keyof TableRow; title: string; sortable: boolean }[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { key: 'role', title: 'Role', sortable: true },
];

const tableData: TableRow[] = [
  { name: 'Jane Cooper', email: 'jane@example.com', role: 'Designer' },
  { name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { name: 'Sam Taylor', email: 'sam@example.com', role: 'Manager' },
];

const tableHeader = (
  <div className="text-lg font-semibold text-slate-900">Team members</div>
);

const tableFooter = (
  <div className="flex items-center justify-between text-sm text-slate-500">
    <span>{tableData.length} team members</span>
    <span>Sorted by name</span>
  </div>
);

const authExampleCode = `import StandardBankUI from 'standard-bank-ui'

function AuthExample() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="text-xl font-semibold">Login</h3>
        <StandardBankUI.Input label="Email" type="email" placeholder="you@example.com" />
        <StandardBankUI.Input label="Password" type="password" placeholder="Enter password" />
        <StandardBankUI.Checkbox label="Remember me" />
        <StandardBankUI.Button fullWidth>Sign in</StandardBankUI.Button>
      </div>
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="text-xl font-semibold">Register</h3>
        <StandardBankUI.Input label="Name" type="text" placeholder="Your full name" />
        <StandardBankUI.Input label="Email" type="email" placeholder="you@example.com" />
        <StandardBankUI.Input label="Password" type="password" placeholder="Create password" />
        <StandardBankUI.Checkbox label="Agree to terms" />
        <StandardBankUI.Button fullWidth>Sign up</StandardBankUI.Button>
      </div>
    </div>
  )
}`

function App() {
  const [showCode, setShowCode] = useState(false)
  const [showCardCode, setShowCardCode] = useState(false)
  const [showLogoCode, setShowLogoCode] = useState(false)
  const [showDropdownCode, setShowDropdownCode] = useState(false)
  const [showTypoCode, setShowTypoCode] = useState(false)
  const [showTableCode, setShowTableCode] = useState(false)
  const [showAuthCode, setShowAuthCode] = useState(false)
  const [sidebarLoading, setSidebarLoading] = useState(false)
  const [dropdownValue, setDropdownValue] = useState<string[]>([])

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <StandardBankUI.Sidebar loading={sidebarLoading} />
      <main className="ml-[264px] p-6">
        <StandardBankUI.TopNavbar />
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-lg mt-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-4xl font-semibold text-slate-900">Standard Bank UI Demo</h1>
                <p className="mt-3 text-slate-600">
                  This is a dummy preview page for the React + Tailwind UI library.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => setShowCode((current) => !current)}
                >
                  {showCode ? 'Hide code' : 'See component code'}
                </Button>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => setSidebarLoading((current) => !current)}
                >
                  {sidebarLoading ? 'Show sidebar' : 'Loading sidenav'}
                </Button>
              </div>
            </div>

            {showCode ? (
              <pre className="rounded-3xl bg-slate-950 p-4 text-sm text-slate-100 overflow-auto">
                <code>{exampleCode}</code>
              </pre>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="default">Default</Button>
              <StandardBankUI.Button variant="success">Success</StandardBankUI.Button>
              <Button variant="danger">Danger</Button>
              <Button variant="warning">Warning</Button>
            </div>
            <div className="mt-10 space-y-4">
              <div className="flex flex-wrap items-center gap-3 justify-between">
                <h2 className="text-2xl font-semibold text-slate-900">Card preview</h2>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => setShowCardCode((current) => !current)}
                >
                  {showCardCode ? 'Hide card code' : 'See card code'}
                </Button>
              </div>
              <Card
                title="Library Card"
                subtitle="Component preview"
                description="A simple UI card showing title, subtitle, description and a footer action button."
                footer={<Button variant="primary">Take Action</Button>}
              />
              {showCardCode ? (
                <pre className="rounded-3xl bg-slate-950 p-4 text-sm text-slate-100 overflow-auto">
                  <code>{cardExampleCode}</code>
                </pre>
              ) : null}
            </div>

            <div className="space-y-6 mt-8">
              <div className="flex flex-wrap items-center gap-3 justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">Live table</h2>
                  <p className="text-sm text-slate-600">Built-in search and sortable columns for table data.</p>
                </div>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => setShowTableCode((current) => !current)}
                >
                  {showTableCode ? 'Hide table code' : 'See table code'}
                </Button>
              </div>

              <StandardBankUI.Table
                width="900px"
                containerClassName="mx-auto"
                columns={tableColumns}
                data={tableData}
                header={tableHeader}
                footer={tableFooter}
              />

              {showTableCode ? (
                <pre className="rounded-3xl bg-slate-950 p-4 text-sm text-slate-100 overflow-auto">
                  <code>{tableExampleCode}</code>
                </pre>
              ) : null}
            </div>

            <div className="space-y-6 mt-8" id="logo-image">
              <div className="flex flex-wrap items-center gap-3 justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">Logo & image preview</h2>
                  <p className="text-sm text-slate-600">Branding and media examples using the UI library.</p>
                </div>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => setShowLogoCode((current) => !current)}
                >
                  {showLogoCode ? 'Hide logo code' : 'See logo code'}
                </Button>
              </div>

              <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <StandardBankUI.Logo />
                  </div>
                  <StandardBankUI.Typo variant="h4">Standard Bank UI Logo component</StandardBankUI.Typo>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <StandardBankUI.Image
                      src="https://readymadeui.com/team-2.webp"
                      alt="Example team member"
                      className="h-48 w-full rounded-3xl object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <StandardBankUI.Typo variant="h4">Image component example</StandardBankUI.Typo>
                    <StandardBankUI.Typo variant="body">
                      The image component wraps a standard `img` tag with lazy loading and decoding options.
                    </StandardBankUI.Typo>
                  </div>
                </div>
              </div>

              {showLogoCode ? (
                <pre className="rounded-3xl bg-slate-950 p-4 text-sm text-slate-100 overflow-auto">
                  <code>{logoExampleCode}</code>
                </pre>
              ) : null}
            </div>

            <div className="space-y-6 mt-8" id="dropdown">
              <div className="flex flex-wrap items-center gap-3 justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">Dropdown with checkboxes</h2>
                  <p className="text-sm text-slate-600">Multi-select dropdown using checkbox options.</p>
                </div>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => setShowDropdownCode((current) => !current)}
                >
                  {showDropdownCode ? 'Hide dropdown code' : 'See dropdown code'}
                </Button>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <StandardBankUI.Dropdown
                  label="Choose items"
                  multiple
                  options={[
                    { value: 'alerts', label: 'Alerts' },
                    { value: 'reports', label: 'Reports' },
                    { value: 'users', label: 'Users' },
                  ]}
                  value={dropdownValue}
                  onChange={(value) => setDropdownValue(Array.isArray(value) ? value : [value])}
                />
                <div className="mt-4 text-sm text-slate-600">
                  Selected: {dropdownValue.length ? dropdownValue.join(', ') : 'None'}
                </div>
              </div>
              {showDropdownCode ? (
                <pre className="rounded-3xl bg-slate-950 p-4 text-sm text-slate-100 overflow-auto">
                  <code>{dropdownExampleCode}</code>
                </pre>
              ) : null}
            </div>

            <div className="space-y-6 mt-8" id="typography">
              <div className="flex flex-wrap items-center gap-3 justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">Typography preview</h2>
                  <p className="text-sm text-slate-600">Text styles for headings, body copy, and captions.</p>
                </div>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => setShowTypoCode((current) => !current)}
                >
                  {showTypoCode ? 'Hide typo code' : 'See typo code'}
                </Button>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <StandardBankUI.Typo variant="h1">Heading one</StandardBankUI.Typo>
                <StandardBankUI.Typo variant="h3">Section title</StandardBankUI.Typo>
                <StandardBankUI.Typo variant="body">
                  This is a reusable typography component for consistent text styling across the app.
                </StandardBankUI.Typo>
                <StandardBankUI.Typo variant="caption">Caption text example</StandardBankUI.Typo>
              </div>

              {showTypoCode ? (
                <pre className="rounded-3xl bg-slate-950 p-4 text-sm text-slate-100 overflow-auto">
                  <code>{typoExampleCode}</code>
                </pre>
              ) : null}
            </div>

            <div className="space-y-6 mt-8" id="auth">
              <div className="flex flex-wrap items-center gap-3 justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">Auth forms</h2>
                  <p className="text-sm text-slate-600">Login and registration examples using the UI library.</p>
                </div>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => setShowAuthCode((current) => !current)}
                >
                  {showAuthCode ? 'Hide auth code' : 'See auth code'}
                </Button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Login</h3>
                  <Input label="Email" type="email" placeholder="you@example.com" />
                  <Input label="Password" type="password" placeholder="Enter password" helpText="Use at least 8 characters." />
                  <Button fullWidth>Sign in</Button>
                </div>
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Register</h3>
                  <Input label="Name" type="text" placeholder="Your full name" />
                  <Input label="Email" type="email" placeholder="you@example.com" />
                  <Input label="Password" type="password" placeholder="Create password" helpText="Use a strong password." />
                  <Button fullWidth>Sign up</Button>
                </div>
              </div>

              {showAuthCode ? (
                <pre className="rounded-3xl bg-slate-950 p-4 text-sm text-slate-100 overflow-auto">
                  <code>{authExampleCode}</code>
                </pre>
              ) : null}

              <div>
                <Button fullWidth loading>
                  Loading state
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(<App />)
}
