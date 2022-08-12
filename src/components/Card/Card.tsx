import * as React from 'react';
import { StyleSheet } from 'react-native';
import Div from '../Div';
import { Image } from '../Image';
import Text from '../Text';
import { CardProps } from './types';

const Card = ({
  style,
  title,
  subTitle,
  paragraph,
  activity,
  category,
  w,
  h,
  ...rest
}: CardProps) => {
  const __height = h ? h : 250;
  const __width = w ? w : 250;
  const __category = category || 'category';
  const __title = title || 'title';
  const __subTitle = subTitle || 'subTitle';
  const __paragraph = paragraph || 'paragraph';
  const __activity = activity || 'activity';

  return (
    <Div style={[style, styles.container]} {...rest}>
      <Div style={styles.image}>
        <Image
          h={__height}
          w={__width}
          uri="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        />
        <Text style={styles.category}>{__category}</Text>
      </Div>

      <Text>{__title}</Text>
      <Text>{__subTitle}</Text>
      <Text>{__paragraph}</Text>
      <Text>{__activity}</Text>
    </Div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 'auto',
  },
  image: {
    position: 'relative',
    flex: 1,
    bottom: 0,
  },
  category: {
    position: 'relative',
  },
});

export default Card;
