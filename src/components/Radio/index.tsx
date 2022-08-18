import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../theme';
import Div from '../Div';
import Text from '../Text';
import { RadioButtonProps } from './types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Radio = ({
  children,
  onPress,
  style,
  color,
  btnColor,
  fontSize,
  fontWeight,
  ...rest
}: RadioButtonProps) => {
  const __btnColor = btnColor || COLORS.red;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Div style={[style, styles.container]} {...rest}>
        <Icon name={'radiobox-marked'} size={24} color={__btnColor} />
        <Text
          style={[
            styles.textStyle,
            {
              color: color || COLORS.black,
              fontSize: fontSize || SIZES.p2,
              fontWeight: fontWeight || 'normal',
            },
          ]}
        >
          {children}
        </Text>
      </Div>
    </TouchableOpacity>
  );
};

export default Radio;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    lineHeight: 25,
    marginLeft: 5,
  },
});
