import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from '../../Theme';
import Div from '../Div';
import { AvatarImageProps } from './types';

const defaultSize = 60;

const AvatarImage = ({
  size = defaultSize,
  source,
  style,
  imageStyle,
  activeDotSize,
  onError,
  onLayout,
  onLoad,
  onLoadEnd,
  onLoadStart,
  onProgress,
  ...rest
}: AvatarImageProps) => {
  const __activeDotSize = activeDotSize || 20;
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
      {...rest}
    >
      {typeof source === 'function' && source({ size })}
      {typeof source !== 'function' && (
        <Div>
          <Image
            source={source}
            style={[
              imageStyle,
              { width: size, height: size, borderRadius: size / 2 },
            ]}
            onError={onError}
            onLayout={onLayout}
            onLoad={onLoad}
            onLoadEnd={onLoadEnd}
            onLoadStart={onLoadStart}
            onProgress={onProgress}
          />
          <Div
            style={[
              styles.activeDot,
              { width: __activeDotSize, height: __activeDotSize },
            ]}
          />
        </Div>
      )}
    </View>
  );
};

AvatarImage.displayName = 'Avatar.Image';

export default AvatarImage;

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: COLORS.green,
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
