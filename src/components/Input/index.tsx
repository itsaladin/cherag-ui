import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export interface props {
  style?: any;
  rest?: any;
  placeholder?: string;
  onPressLeftIcon?: any;
  onPressRightIcon?: any;
  leftIcon?: string;
  rightIcon?: string;
  fontSize?: number;
}

const Input = ({ style, placeholder, fontSize, ...rest }: props) => {
  return (
    <View style={styles.Container}>
      <TextInput
        {...rest}
        style={[
          style,
          {
            fontSize: fontSize || 22,
          },
        ]}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Container: {
    position: 'relative',
  },
  IconLeft: {
    position: 'absolute',
    alignSelf: 'flex-start',
    alignItems: 'center',
    zIndex: 1,
  },
  IconRight: {
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    zIndex: 1,
  },
});
