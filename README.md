# Cherag-UI

🔥 An easy to use ui library for React Native 🔥

## Installation

Install with your favorite package manager.

Using Yarn:

```
yarn add cherag-ui
```

Using NPM:

```
npm i cherag-ui
```

## Usage

Now import and use various components from the Cherag-UI library.

```tsx
// App.tsx
import React from 'react';
import {
  Checkbox,
  CheckboxItem,
  CheckboxValue,
  Div,
  RadioButton,
  RadioButtonItem,
  RadioButtonValue,
} from 'cherag-ui';

export default function App() {
  return (
    <Div style={styles.container}>
      <Div style={styles.radioBtnGroup}>
        <RadioButton
          btnColor={COLORS.green}
          onChange={setSelectedRadio}
          selected={selectedRadio}
        >
          <RadioButtonItem value={1}>Radio button</RadioButtonItem>
          <RadioButtonItem value={2}>Radio button</RadioButtonItem>
        </RadioButton>
      </Div>
      <Checkbox values={checkboxes} onChange={setCheckboxes}>
        <CheckboxItem value="1">Checkbox 1</CheckboxItem>
        <CheckboxItem value="2">Checkbox 2</CheckboxItem>
        <CheckboxItem value="3">Checkbox 3</CheckboxItem>
      </Checkbox>
    </Div>
  );
}
```

## Development

This project integrates with `react-native-builder-bob`. To get started:

1. Fork and Clone the repository.
2. Create your feature branch.
3. Install dependencies using `yarn`.
4. Run example project using `yarn example android`, `yarn example ios` or `yarn example web`.
5. Make your changes and create a PR!
6. Thank you.

## License

This package is licensed under the MIT License.

## Contribution

Any kind of contribution is welcome. Thanks!
