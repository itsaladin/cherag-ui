import * as React from 'react';
import { Image, View } from 'react-native';
import { AvatarImageProps } from './types';

const defaultSize = 60;

const AvatarImage = ({
  size = defaultSize,
  source,
  style,
  imageStyle,
  onError,
  onLayout,
  onLoad,
  onLoadEnd,
  onLoadStart,
  onProgress,
  ...rest
}: AvatarImageProps) => {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          // backgroundColor: COLORS.primary,
        },
        style,
      ]}
      {...rest}
    >
      {typeof source === 'function' && source({ size })}
      {typeof source !== 'function' && (
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
      )}
    </View>
  );
};

AvatarImage.displayName = 'Avatar.Image';

export default AvatarImage;
