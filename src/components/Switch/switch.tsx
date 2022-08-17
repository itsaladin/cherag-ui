import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../Theme';
import Div from '../Div';
import { SwitchProps } from './types';

const Switch = ({
  style,
  switchState,
  setSwitchState,
  offTrackColor,
  onTrackColor,
  thumbColor,
  ...rest
}: SwitchProps) => {
  const __offTrackColor = offTrackColor || COLORS.darkGray;
  const __onTrackColor = onTrackColor || COLORS.green;
  return (
    <TouchableOpacity
      onPress={() => {
        setSwitchState(!switchState);
      }}
      activeOpacity={0.8}
      style={style}
      {...rest}
    >
      <Div style={styles.container}>
        <Div
          style={[
            styles.lineStyle,
            { backgroundColor: switchState ? __onTrackColor : __offTrackColor },
          ]}
        />
        <Div
          style={[
            styles.switchStyle,
            {
              marginLeft: switchState
                ? SIZES.DimensionWidth / 10
                : SIZES.p3 - 10,
              backgroundColor: thumbColor || COLORS.white,
            },
          ]}
        />
      </Div>
    </TouchableOpacity>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  lineStyle: {
    width: 70,
    height: 20,
    borderRadius: 10,
  },
  switchStyle: {
    width: 30,
    height: 30,
    flex: 1,
    position: 'absolute',
    borderRadius: 30,
    elevation: 8,
    shadowColor: COLORS.black,
  },
});
