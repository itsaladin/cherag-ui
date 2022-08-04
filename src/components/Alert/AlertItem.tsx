// import React, { FC } from 'react';
// import { StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';
// import { COLORS, SIZES } from '../../Theme/Index';
// import Div from '../Div';
// import PText from '../Text';
// import useAlert from './hook';
// import { AlertItemProps } from './types';

// const AlertItem: FC<AlertItemProps> = ({ onPress, children }) => {
//   const context = useAlert();

//   return (
//     <Div style={styles.row}>
//       <Icon
//         style={{ marginRight: SIZES.p3 }}
//         name={'star'}
//         size={20}
//         color={COLORS.green}
//       />
//       <PText>{children}</PText>

//       <TouchableOpacity
//         onPress={() => {
//           context.setIsOpen(context.isOpen);
//         }}
//         style={styles.row}
//       >
//         <Icon
//           style={{ marginRight: SIZES.p3 }}
//           name={'cross'}
//           size={20}
//           color={COLORS.red}
//         />
//       </TouchableOpacity>
//     </Div>
//   );
// };

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

// export default AlertItem;
