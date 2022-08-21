import React from 'react';
import { Image as RNImage } from 'react-native';
import type { FCWithChildren } from '../../types/compat/react';
import { Div } from '../Div';
import type { ImageProps } from './types';

const Image: FCWithChildren<ImageProps> = ({ w, h, size, source, style }) => {
  const __widht = w || 50;
  const __height = h || 50;

  return (
    <Div>
      {typeof source === 'function' && source({ size })}
      {typeof source !== 'function' && (
        <RNImage
          source={source}
          style={[{ width: __widht, height: __height }, style]}
        />
      )}
    </Div>
  );
};

export default Image;
