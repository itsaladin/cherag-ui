import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Div, multiply, PText, Input } from 'cherag-ui';

export default function App() {
  const [result, setResult] = useState<number | undefined>();
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    multiply(3, 5).then(setResult);
  }, []);

  const blackColor = 'black';

  return (
    <View style={styles.container}>
      <PText style={{ color: blackColor }} fontSize="md">
        Result: {result}
      </PText>
      <Div bg={'gray'} w={0} h={0} p={0} m={0} style={{ color: blackColor }}>
        <Text>Div Commponent</Text>
      </Div>
      <Input
        //@ts-ignore
        onChangeText={(txt) => {
          setUserName(txt);
        }}
        placeholder="User name"
        defaultValue={userName}
      />
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
