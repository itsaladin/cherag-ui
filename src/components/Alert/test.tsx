import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../Theme/Index';
import Div from '../Div';
import PText from '../Text';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

interface props {
  style?: any;
  rest?: any;
  children?: any;
  onPress: any;
  width?: number;
  height?: number;
  bg?: string;
  color?: string;
  fontSize?: number;
  borderRadius?: number;
  borderWidth?: number;
  fontWeight?: string;
  onPressRightIcon: any;
  alert: Boolean;
}

const Alert = ({
  children,
  onPress,
  style,
  width,
  height,
  bg,
  color,
  fontSize,
  borderRadius,
  borderWidth,
  fontWeight,
  onPressRightIcon,
  alert,
  ...rest
}: props) => {
  return (
    alert && (
      <Div style={styles.container}>
        <PText
          style={[
            styles.textStyle,
            {
              color: color || COLORS.red,
              fontSize: fontSize || SIZES.p2,
              fontWeight: fontWeight || 'normal',
            },
          ]}
        >
          {children}
        </PText>
        <TouchableOpacity onPress={onPressRightIcon}>
          <Icons name={'eye'} size={18} color={COLORS.red} />
        </TouchableOpacity>
      </Div>
    )
  );
};

export default Alert;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1000,
  },
  textStyle: {
    // lineHeight: 25,
    // textAlign: 'center',
  },
});
