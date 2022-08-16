import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { checkType } from '../../utlis';
import { COLORS, SIZES } from '../../Theme/index';
import Div from '../Div';
import { Image } from '../Image';
import Text from '../Text';
import { CardProps } from './types';

const Card: FC<CardProps> = ({
  style,
  title,
  subTitle,
  footerTxt,
  category,
  w,
  h,
  categoryBgColor,
  children,
  titleStyle,
  subTitleStyle,
  ...rest
}) => {
  const __height = h ? h : SIZES.DimensionHeight / 5;
  const __width = w ? w : SIZES.DimensionWidth / 1.325;
  const __category = category || 'category';
  const __title = title || 'title';
  const __subTitle = subTitle || 'sub title';
  const __categoryBgColor = categoryBgColor || COLORS.blue;

  return (
    <Div style={[style, styles.container]} {...rest}>
      <Image
        h={__height}
        w={__width}
        style={styles.cardImg}
        uri="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
      />
      <Div style={[styles.category, { backgroundColor: __categoryBgColor }]}>
        <Text style={styles.categoryTxt}>{__category}</Text>
      </Div>

      <Div style={styles.cardTxtContainer}>
        <Text style={[styles.title, titleStyle]}>{__title}</Text>
        <Text style={[styles.subTitle, subTitleStyle]}>{__subTitle}</Text>
        {typeof children === 'string' ? (
          <Text style={styles.paragraph}>{children}</Text>
        ) : (
          children
        )}
        {checkType(footerTxt) && (
          <Text style={styles.footerTxt}>{footerTxt}</Text>
        )}
      </Div>
    </Div>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    elevation: 4,
    shadowColor: COLORS.black,
    marginHorizontal: 50,
    borderRadius: 10,
  },
  category: {
    flex: 1,
    top: SIZES.DimensionHeight / 6.2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.DimensionWidth / 4,
  },
  categoryTxt: {
    textTransform: 'uppercase',
    color: COLORS.white,
    padding: 5,
  },
  cardImg: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  cardTxtContainer: {
    margin: 15,
  },
  title: {
    fontSize: 28,
  },
  subTitle: {
    color: COLORS.blue,
    marginVertical: 5,
  },
  paragraph: {
    marginVertical: 10,
  },
  footerTxt: {},
});

export default Card;
