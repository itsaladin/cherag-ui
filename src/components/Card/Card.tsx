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
      <Image
        h={__height}
        w={__width}
        style={styles.cardImg}
        uri="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
      />
      <Text style={styles.category}>{__category}</Text>

      <Text style={styles.title}>{__title}</Text>
      <Text style={styles.subTitle}>{__subTitle}</Text>
      <Text style={styles.paragraph}>{__paragraph}</Text>
      <Text style={styles.activity}>{__activity}</Text>
    </Div>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
  },
  cardImg: {
    borderRadius: 25,
  },
  category: {},
  title: {},
  subTitle: {},
  paragraph: {},
  activity: {},
});

export default Card;
