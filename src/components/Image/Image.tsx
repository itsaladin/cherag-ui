import React, { FC } from 'react';
import { Image as RNImage } from 'react-native';
import { ImageProps } from './types';

const Image: FC<ImageProps> = ({ w, h, uri }) => {
  const __widht = w || 50;
  const __height = h || 50;
  const __uri = uri;

  return (
    <RNImage
      style={{ width: __widht, height: __height }}
      source={{
        uri: __uri,
      }}
    />
  );
};

export default Image;
