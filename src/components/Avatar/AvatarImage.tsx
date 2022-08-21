import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from '../../theme';
import { Div } from '../Div';
import type { AvatarImageProps } from './types';

const defaultSize = 60;

const AvatarImage = ({
  size = defaultSize,
  source,
  style,
  imageStyle,
  dotSize,
  dotColor,
  onError,
  onLayout,
  onLoad,
  onLoadEnd,
  onLoadStart,
  onProgress,
  ...rest
}: AvatarImageProps) => {
  const __dotColor = dotColor || COLORS.softGray;
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
          {dotSize && (
            <Div
              style={[
                styles.activeDot,
                {
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: __dotColor,
                  borderRadius: dotSize / 2,
                },
              ]}
            />
          )}
        </Div>
      )}
    </View>
  );
};

AvatarImage.displayName = 'Avatar.Image';

export default AvatarImage;

const styles = StyleSheet.create({
  activeDot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
