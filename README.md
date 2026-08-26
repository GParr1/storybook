# @gparr1/design-system

Reusable UI components built with **React**, **React Native**, **React Native Web** and **Tamagui**.

The package provides shared components that can be used across web and Expo / React Native applications.

## Installation

Install the package from GitHub Packages:

```bash
npm install @gparr1/design-system
```

The design system uses the following peer dependencies:

* React >= 19
* React DOM >= 19
* React Native >= 0.81
* React Native Web ^0.21.2
* React Native SVG ^15.15.5
* Tamagui >= 2.7.7 < 3

Make sure these dependencies are available in the consuming application.

## Usage

Import the components directly from the package:

```tsx
import {
  Button,
  Container,
  Icon,
  Image,
  InputDate,
  InputSelect,
  InputText,
  NavLink,
  Text,
  Accordion,
  Form,
  Header,
} from '@gparr1/design-system'
```

### Button

```tsx
import { Button } from '@gparr1/design-system'

export function Example() {
  return (
    <Button>
      Click me
    </Button>
  )
}
```

### Text

```tsx
import { Text } from '@gparr1/design-system'

export function Example() {
  return (
    <Text>
      Hello world
    </Text>
  )
}
```

### Container

```tsx
import { Container } from '@gparr1/design-system'

export function Example() {
  return (
    <Container>
      <Text>Content</Text>
    </Container>
  )
}
```

### InputText

```tsx
import { InputText } from '@gparr1/design-system'

export function Example() {
  return (
    <InputText
      placeholder="Enter your name"
    />
  )
}
```

## Available Components

The package currently exports:

* `Accordion`
* `Button`
* `Container`
* `Icon`
* `Image`
* `InputText`
* `InputSelect`
* `InputDate`
* `NavLink`
* `Text`
* `Form`
* `Header`

## Expo / React Native

The design system is designed to work with Expo and React Native applications.

Example:

```tsx
import { Button, Text } from '@gparr1/design-system'

export default function Screen() {
  return (
    <>
      <Text>My application</Text>

      <Button>
        Continue
      </Button>
    </>
  )
}
```

For Expo projects, install the required peer dependencies in the application itself rather than relying on the design system to install them.

## React Native Web

The package supports React Native Web.

When using Vite or another web bundler, `react-native` should resolve to `react-native-web` where appropriate.

Example Vite configuration:

```ts
resolve: {
  alias: {
    'react-native': 'react-native-web',
  },
}
```

## Tamagui

The design system uses Tamagui internally for its UI components.

The consuming application must provide a compatible Tamagui installation:

```bash
npm install tamagui@^2.7.7
```

The design system does not bundle React, React Native, React Native Web, React Native SVG or Tamagui into the library bundle. These packages are treated as peer dependencies.

## Icons

The design system uses `@tamagui/lucide-icons-2` for its icon implementation.

Icons are exposed through the `Icon` component rather than requiring consumers to import the internal icon implementation.

Example:

```tsx
import { Icon } from '@gparr1/design-system'

export function Example() {
  return <Icon name="Check" />
}
```

## Package Structure

The published package contains the compiled library and TypeScript declarations:

```text
dist/
├── index.js
├── index.d.ts
├── core/
├── organisms/
├── styles/
└── ...
```

The package entry points are:

```json
{
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

## Building the Package

Install dependencies:

```bash
npm install
```

Build the package:

```bash
npm run build
```

The build performs two steps:

1. TypeScript generates the `.d.ts` declaration files.
2. Vite generates the JavaScript library bundle.

The generated files are placed in:

```text
dist/
```

## Publishing

Before publishing a new version, verify the package contents:

```bash
npm pack --dry-run
```

The output should contain at least:

```text
dist/index.js
dist/index.d.ts
package.json
README.md
```

Then publish the package using the configured GitHub Packages registry.

## TypeScript

The package publishes TypeScript declaration files alongside the JavaScript bundle.

Consumers should therefore get type information automatically:

```tsx
import { Button } from '@gparr1/design-system'
```

No separate `@types` package is required.

## Versioning

Follow semantic versioning:

```text
MAJOR.MINOR.PATCH
```

For example:

```text
1.0.9
```

After publishing a new version, consumers can update the package with:

```bash
npm install @gparr1/design-system@latest
```

Or install a specific version:

```bash
npm install @gparr1/design-system@1.0.7
```

## License

Private project maintained by GParr1.
email: giovanni.parrone89@gamail.com
