import * as React from 'react';
import { Platform } from 'react-native';
import RadioButtonAndroid from './RadioButtonAndroid';
import RadioButtonIOS from './RadioButtonIOS';

export type Props = {
  value: string;
  status?: 'checked' | 'unchecked';
  disabled?: boolean;
  onPress?: () => void;
  uncheckedColor?: string;
  color?: string;
  testID?: string;
};

const RadioButton = (props: Props) => {
  const Button = Platform.select({
    default: RadioButtonAndroid,
    ios: RadioButtonIOS,
  });

  return <Button {...props} />;
};

export default withTheme(RadioButton);

// @component-docs ignore-next-line
const RadioButtonWithTheme = withTheme(RadioButton);
// @component-docs ignore-next-line
export { RadioButtonWithTheme as RadioButton };
