import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
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
  onPress,
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
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Div
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
          <>
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
          </>
        )}
      </Div>
    </TouchableOpacity>
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
