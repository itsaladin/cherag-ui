import React, { useState } from 'react';
import { Image as RNImage } from 'react-native';
import type { FCWithChildren } from '../../types/compat/react';
import { Div } from '../Div';
import { Text } from '../Text';
import type { ImageProps } from './types';

const Image: FCWithChildren<ImageProps> = ({
  w,
  h,
  size,
  source,
  style,
  alt,
}) => {
  const [error, setError] = useState(false);

  const __widht = w || 50;
  const __height = h || 50;
  return (
    <Div>
      {typeof source === 'function' && source({ size })}
      {typeof source !== 'function' && (
        <RNImage
          source={source}
          style={[{ width: __widht, height: __height }, style]}
          accessibilityLabel={alt}
          accessible
          onError={() => {
            setError(true);
          }}
        />
      )}
      {error && <Text>{alt}</Text>}
    </Div>
  );
};

export default Image;
