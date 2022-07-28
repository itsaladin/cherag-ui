import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

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

const Input = ({
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
    <View style={styles.Container}>
      {/* {leftIcon && (
        <View style={styles.IconLeft}>
          <TouchableOpacity style={{ padding: 22 }} onPress={onPressLeftIcon}>
            <Icons
              onPress={onPressLeftIcon}
              name={leftIcon || 'lock'}
              size={iconSize}
              color={'red'}
            />
          </TouchableOpacity>
        </View>
      )} */}
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
      {/* {rightIcon && (
        <View style={styles.IconRight}>
          <TouchableOpacity style={{ padding: 18 }} onPress={onPressRightIcon}>
            <Icons
              onPress={onPressRightIcon}
              name={rightIcon || 'eye'}
              size={iconSize}
              color={'gray'}
            />
          </TouchableOpacity>
        </View>
      )} */}
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
