import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../../Theme/Index';
import Div from '../Div';

interface props {
  style?: any;
  rest?: any;
  placeholder?: string;
  onPressLeftIcon?: any;
  onPressRightIcon?: any;
  leftIcon?: string;
  leftIconColor?: string;
  rightIcon?: string;
  rightIconColor?: string;
  fontSize?: number;
  iconSize?: number;
  borderWidth?: number;
  borderColor?: string;
  inputBoxWidth?: number;
}

const InputWithIcon = ({
  style,
  placeholder,
  onPressLeftIcon,
  onPressRightIcon,
  leftIcon,
  leftIconColor,
  rightIcon,
  rightIconColor,
  iconSize,
  fontSize,
  borderWidth,
  borderColor,
  inputBoxWidth,
  ...rest
}: props) => {
  const _iconSize = iconSize || 18;
  const _borderWidth = borderWidth || 1;
  const _borderColor = borderColor || 'green';
  const _inputBoxWidth = inputBoxWidth || 200;

  return (
    <Div style={styles.container}>
      {leftIcon && (
        <Div style={styles.iconLeft}>
          <TouchableOpacity onPress={onPressLeftIcon}>
            <Icons
              name={leftIcon || 'lock'}
              size={_iconSize}
              color={leftIconColor || COLORS.red}
            />
          </TouchableOpacity>
        </Div>
      )}
      <TextInput
        {...rest}
        style={[
          style,
          {
            borderColor: _borderColor,
            borderWidth: _borderWidth,
            fontSize: fontSize ? fontSize : SIZES.p1,
            padding: SIZES.p3,
            width: _inputBoxWidth,
          },
        ]}
        placeholder={placeholder}
      />
      {rightIcon && (
        <Div style={styles.iconRight}>
          <TouchableOpacity onPress={onPressRightIcon}>
            <Icons
              name={rightIcon || 'eye'}
              size={_iconSize}
              color={rightIconColor || COLORS.red}
            />
          </TouchableOpacity>
        </Div>
      )}
    </Div>
  );
};

export default InputWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconLeft: {
    width: 20,
    justifyContent: 'center',
    marginRight: 5,
  },
  iconRight: {
    width: 20,
    justifyContent: 'center',
    marginLeft: 5,
  },
});
