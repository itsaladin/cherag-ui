import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../Theme';
import Div from '../Div';
import { IconButtonProps } from './types';

const IconButton: FC<IconButtonProps> = ({
  style,
  icon,
  color,
  size = 24,
  disabled,
  onPress,
  ...rest
}) => {
  const __icon = icon || 'rocket';
  const __color = color || COLORS.primary;
  const __size = size || 24;

  return (
    <Div style={[styles.container, disabled, onPress, style]} {...rest}>
      <Icon name={__icon} size={__size} color={__color} />
    </Div>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default IconButton;
