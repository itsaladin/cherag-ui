import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../theme';
import type { FCWithChildren } from '../../types/compat/react';
import type { IconButtonProps } from './types';

const IconButton: FCWithChildren<IconButtonProps> = ({
  style,
  icon,
  color,
  size,
  disabled,
  onPress,
  ...rest
}) => {
  const __icon = icon || 'rocket';
  const __color = color || COLORS.primary;
  const __size = size || 24;

  return (
    <TouchableWithoutFeedback
      onPress={disabled ? undefined : onPress}
      style={style}
      {...rest}
    >
      <Icon name={__icon} size={__size} color={__color} />
    </TouchableWithoutFeedback>
  );
};

export default IconButton;
