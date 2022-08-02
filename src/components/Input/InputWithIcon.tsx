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
  rightIcon?: string;
  fontSize?: number;
}

const InputWithBothSideIcon = ({
  style,
  placeholder,
  onPressLeftIcon,
  onPressRightIcon,
  leftIcon,
  rightIcon,
  fontSize,
  ...rest
}: props) => {
  const iconSize = 24;

  return (
    <Div style={styles.Container}>
      {leftIcon && (
        <Div style={styles.IconLeft}>
          <TouchableOpacity
            style={{ padding: SIZES.p2 }}
            onPress={onPressLeftIcon}
          >
            <Icons
              name={leftIcon || 'lock'}
              size={iconSize}
              color={COLORS.border}
            />
          </TouchableOpacity>
        </Div>
      )}
      <TextInput
        {...rest}
        style={[
          style,
          {
            fontSize: fontSize ? fontSize : SIZES.p1,
          },
        ]}
        placeholder={placeholder}
      />
      {rightIcon && (
        <Div style={styles.IconRight}>
          <TouchableOpacity
            style={{ padding: SIZES.p2 }}
            onPress={onPressRightIcon}
          >
            <Icons
              name={rightIcon || 'eye'}
              size={iconSize}
              color={COLORS.red}
            />
          </TouchableOpacity>
        </Div>
      )}
    </Div>
  );
};

export default InputWithBothSideIcon;

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
