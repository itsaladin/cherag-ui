import React, { FC } from 'react';
import { Image as RNImage, StyleSheet } from 'react-native';
import { COLORS } from '../../Theme';
import Div from '../Div';
import { ImageProps } from './types';

const Image: FC<ImageProps> = ({ w, h }) => {
  const __widht = w || 50;
  const __height = h || 50;

  return (
    <Div style={styles.container}>
      <RNImage
        style={{ width: __widht, height: __height }}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </Div>
  );
};

export default Image;

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.white },
});
