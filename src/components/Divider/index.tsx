import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = ({ style, ...rest }) => {
  return <View {...rest} style={(styles.container, style)} />;
};

const styles = StyleSheet.create({
  container: {
    height: 2,
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default Divider;
