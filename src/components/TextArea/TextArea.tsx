import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../theme';
import { Div } from '../Div';
import type { TextAreaProps } from './types';

const TextArea = ({
  style,
  borderWidth,
  borderRadious,
  h,
  w,
  placeholder,
  placeholderTextColor,
  numberOfLines,
}: TextAreaProps) => {
  const __borderWidth = borderWidth || 1;
  const __borderRadious = borderRadious || 5;
  const __h = h || 150;
  const __w = w || 150;
  const __placeholder = placeholder || 'placeholder text';
  const __placeholderTextColor = placeholderTextColor || COLORS.textColor;
  const __numberOfLines = numberOfLines || 10;
  return (
    <Div
      style={[
        style,
        styles.textAreaContainer,
        {
          borderWidth: __borderWidth,
          borderRadius: __borderRadious,
        },
      ]}
    >
      <TextInput
        style={[
          styles.textArea,
          {
            height: __h,
            width: __w,
          },
        ]}
        underlineColorAndroid="transparent"
        placeholder={__placeholder}
        placeholderTextColor={__placeholderTextColor}
        numberOfLines={__numberOfLines}
        multiline={true}
      />
    </Div>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: COLORS.softGray,
    padding: 5,
  },
  textArea: {
    justifyContent: 'flex-start',
  },
});
