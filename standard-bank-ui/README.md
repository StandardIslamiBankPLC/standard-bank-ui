# StandardBankUI

A reusable React + Tailwind UI component library for banking dashboards and admin interfaces.

## Installation

```bash
npm install standard-bank-ui
```

```bash
pnpm add standard-bank-ui
```

```bash
yarn add standard-bank-ui
```

### Peer dependencies

This package requires React 18+ and React DOM 18+.

## Usage

Import the package and its CSS in your application entry:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import StandardBankUI from "standard-bank-ui";
import "standard-bank-ui/style.css";

function App() {
  return (
    <div className="p-6">
      <StandardBankUI.Button variant="primary" size="md">
        Save Changes
      </StandardBankUI.Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
```

### Namespace-style access

```tsx
import StandardBankUI from "standard-bank-ui";

<StandardBankUI.Button variant="primary" size="md">
  Save
</StandardBankUI.Button>
```

### Named imports

```tsx
import { Button, Card, Dropdown } from "standard-bank-ui";
import "standard-bank-ui/style.css";

<Button variant="primary" size="lg">Submit</Button>
<Card title="Account overview">...</Card>
```

## Supported components

- `Button`
- `Card`
- `Checkbox`
- `Container`
- `Dropdown`
- `Image`
- `Input`
- `Logo`
- `Navbar`
- `Sidebar`
- `Table`
- `Typo`

## Types

The package exports TypeScript types for components, for example:

- `ButtonProps`
- `ButtonVariant`
- `ButtonSize`
- `ButtonBaseColor`
- `CheckboxProps`
- `CardProps`
- `SidebarNavProps`
- `NavbarProps`
- `InputProps`
- `LogoProps`
- `ImageProps`
- `DropdownProps`
- `TableColumn`
- `TableProps`
- `TypoProps`
- `ContainerProps`

## Example: Dropdown

```tsx
import StandardBankUI from "standard-bank-ui";
import "standard-bank-ui/style.css";

const options = [
  { label: "Savings Account", value: "savings" },
  { label: "Checking Account", value: "checking" },
  { label: "Credit Card", value: "credit" },
];

function Example() {
  const [value, setValue] = React.useState<string | string[]>("");

  return (
    <StandardBankUI.Dropdown
      label="Select account"
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Choose an account"
    />
  );
}
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## License

MIT
