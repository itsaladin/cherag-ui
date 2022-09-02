import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../theme/index';
import type { FCWithChildren } from '../../types/compat/react';
import { renderTextOrNode } from '../../utlis';
import { Div } from '../Div';
import { Image } from '../Image';
import Text from '../Text/Text';
import type { CardProps } from './types';

const Card: FCWithChildren<CardProps> = ({
  style,
  title,
  subTitle,
  footerText,
  category,
  w,
  h,
  imgH,
  categoryBgColor,
  categoryTextColor,
  children,
  titleStyle,
  subTitleStyle,
  paragraphStyle,
  footerStyle,
  shadow,
  ...rest
}) => {
  const __height = h ? h : SIZES.DimensionHeight / 5;
  const __width = w ? w : SIZES.DimensionWidth / 1.325;
  const __category = category || 'category';
  const __title = title || 'title';
  const __subTitle = subTitle || 'sub title';
  const __categoryBgColor = categoryBgColor || COLORS.blue;
  const __categoryTextColor = categoryTextColor || COLORS.white;
  const __shadow = shadow || 5;
  const __imgH = imgH || 3;

  return (
    <Div
      style={[
        style,
        styles.container,
        {
          shadowRadius: __shadow,
          elevation: __shadow,
          width: __width,
          height: __height,
        },
      ]}
      {...rest}
    >
      <Div>
        <Image
          h={__height / __imgH}
          w={__width}
          size={20}
          style={styles.cardImg}
          source={{
            uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
          }}
          alt="Image not found"
        />
        <Div style={[styles.category, { backgroundColor: __categoryBgColor }]}>
          <Text style={[styles.categoryTxt, { color: __categoryTextColor }]}>
            {__category}
          </Text>
        </Div>
      </Div>
      <Div style={styles.cardTextContainer}>
        <Text style={[styles.title, titleStyle]}>{__title}</Text>
        <Text style={[styles.subTitle, subTitleStyle]}>{__subTitle}</Text>
        {renderTextOrNode(children, [styles.paragraph, paragraphStyle])}
        {renderTextOrNode(footerText, [styles.footerTxt, footerStyle])}
      </Div>
    </Div>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
  },
  category: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '40%',
  },
  categoryTxt: {
    textTransform: 'uppercase',
    padding: 5,
    fontSize: 14,
  },
  cardImg: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  cardTextContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    color: COLORS.blue,
    fontSize: 14,
  },
  paragraph: {
    marginVertical: 10,
    fontSize: 14,
  },
  footerTxt: {
    fontSize: 16,
  },
});

export default Card;
