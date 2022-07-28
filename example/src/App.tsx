import { Div, multiply, PText } from 'cherag-ui';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 5).then(setResult);
  }, []);

  const blackColor = 'black';

  return (
    <View style={styles.container}>
      <PText style={{ color: blackColor }} fontSize="md">
        Result: {result}
      </PText>
      <Div bg={'red'} w={80} h={20} p={0} style={{ color: blackColor }}>
        Div component
      </Div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
