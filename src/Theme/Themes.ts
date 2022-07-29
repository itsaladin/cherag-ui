import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const SIZES = {
  h1: 24,
  h2: 20,
  h3: 18,
  p1: 16,
  p2: 14,
  p3: 10,
  DimensionWidth: width,
  DimensionHeight: height,
};

export const COLORS = {
  // base colors
  primary: '#00B200', // blue
  secondary: '#5C5C5C', // gray
  border: '#9C9C9E', // border
  lightGray: '#B6C1CF', //lightgray
  darkGray: '#6C6C6E',

  // colors
  black: '#000000',
  white: '#FFFFFF',
  red: '#E61C53',
  sayn: '#40BDFF',
  blue: '#4D5AFF',
  messageColor: '#707BFF',
  yellow: '#FFC014',
  orange: '#FF7821',
  green: '#7DD63C',
  lightYellow: '#FFCC00',
  lightBlue: '#EAEDFF',
  lightBlack: '#7A7A7A',
  lightRed: '#EE5C51',
  blackish: '#111111DE',
  sunColor: '#F2C800',
  maroon: '#B54896',

  //other colors
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  lightGray5: '#cccccc',
  lightGray6: '#BCC1CD',
  lightGray7: '#F2F2F7',
  darkgray: '#898C95',
  textColor: '#7F7F7F',
  softGray: '#dcdcf2',
  lightPrimary: '#CCF0CC',
  mixBlack: '#3B4964',
  modalUnderBgColor: '#121E4499',

  //transparent colors
  transparent: 'transparent',
  transparentBlack: 'rgba(0, 0, 0, 0.6)',
  transparentDark: 'rgba(0, 0, 0, 0.5)',
  transparentWhite: 'rgba(255, 255, 255, 0.750)',
  transparentImgTxt: 'rgba(0, 0, 0, 0.3)',
};

const appTheme = { COLORS, SIZES };

export default appTheme;
