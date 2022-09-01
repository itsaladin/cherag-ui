import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../theme';
import { Div } from '../Div';
import type { AvatarIconProps } from './types';

const AvatarIcon = ({
  style,
  icon,
  bgSize,
  iconSize,
  iconColor,
  bgColor,
  onPress,
  ...rest
}: AvatarIconProps) => {
  const __icon = icon || 'file';
  const __iconColor = iconColor || COLORS.secondary;
  const __bgColor = bgColor || COLORS.primary;
  const __bgSize = bgSize || 60;
  const __iconSize = iconSize || 35;

  return (
    <Div
      style={[
        styles.container,
        {
          width: __bgSize,
          height: __bgSize,
          borderRadius: __bgSize / 2 || 5,
          backgroundColor: __bgColor,
        },
        style,
      ]}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={onPress} {...rest}>
        <Icon name={__icon} size={__iconSize} color={__iconColor} />
      </TouchableWithoutFeedback>
    </Div>
  );
};

AvatarIcon.displayName = 'Avatar.Image';

export default AvatarIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
