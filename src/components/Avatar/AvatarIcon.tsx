import * as React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../theme';
import { AvatarIconProps } from './types';

const AvatarIcon = ({
  style,
  icon,
  bgSize,
  iconSize,
  iconColor,
  bgColor,
  ...rest
}: AvatarIconProps) => {
  const __icon = icon || 'file';
  const __iconColor = iconColor || COLORS.secondary;
  const __bgColor = bgColor || COLORS.primary;
  const __bgSize = bgSize || 60;
  const __iconSize = iconSize || 35;

  return (
    <View
      style={[
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
      <TouchableWithoutFeedback {...rest}>
        <Icon
          name={__icon}
          size={__iconSize}
          style={styles.icon}
          color={__iconColor}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

AvatarIcon.displayName = 'Avatar.Image';

export default AvatarIcon;

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});
