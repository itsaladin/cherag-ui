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

### Install Peer Dependencies

Cherag UI uses `reaact-native-vector-icons` for icons. You must install it and configure it for your project. See its [documentation](https://github.com/oblador/react-native-vector-icons#installation) for more information about setting it up for Android, IOS or Web.

Follow Native Web's [documentation](https://necolas.github.io/react-native-web/docs/) to use Cherag UI on Web.

## Usage

Now import and use various components from the Cherag-UI library.

```tsx
// App.tsx
import React, { useState } from 'react';
import {
  Checkbox,
  CheckboxItem,
  CheckboxValue,
  COLORS,
  Div,
  RadioButton,
  RadioButtonItem,
  RadioButtonValue,
} from 'cherag-ui';
import { StyleSheet } from 'react-native';
export default function App() {
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<RadioButtonValue>(1);
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
        <CheckboxItem iconSize={22} textStyle={styles.checkboxText} value="1">
          Checkbox item 1
        </CheckboxItem>
        <CheckboxItem iconSize={22} textStyle={styles.checkboxText} value="2">
          Checkbox item 2
        </CheckboxItem>
        <CheckboxItem iconSize={22} textStyle={styles.checkboxText} value="3">
          Checkbox item 3
        </CheckboxItem>
      </Checkbox>
    </Div>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 30,
  },
  radioBtnGroup: {
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: 16,
  },
});
```

## Documentation

For more examples and usages, see [our documentation](https://aladdinstudios.github.io/cherag/)

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
