import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../theme';
import type { TextAreaProps } from './types';

const TextArea = ({
  style,
  borderWidth,
  borderRadious,
  borderColor,
  w,
  placeholder,
  placeholderTextColor,
  numberOfLines,
}: TextAreaProps) => {
  const __borderWidth = borderWidth || 1;
  const __borderRadious = borderRadious || 5;
  const __borderColor = borderColor || COLORS.border;
  const __w = w || '80%';
  const __placeholder = placeholder || 'placeholder text';
  const __placeholderTextColor = placeholderTextColor || COLORS.textColor;
  const __numberOfLines = numberOfLines || 10;
  return (
    <>
      <TextInput
        style={[
          style,
          styles.textArea,
          {
            width: __w,
            borderWidth: __borderWidth,
            borderRadius: __borderRadious,
            borderColor: __borderColor,
          },
        ]}
        underlineColorAndroid="transparent"
        placeholder={__placeholder}
        placeholderTextColor={__placeholderTextColor}
        numberOfLines={__numberOfLines}
        multiline={true}
      />
    </>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  textArea: {
    backgroundColor: COLORS.white,
    padding: 5,
    textAlignVertical: 'top',
  },
});
