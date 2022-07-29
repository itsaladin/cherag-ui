import { Button, Div, Input, PText } from 'cherag-ui';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [userName, setUserName] = useState<string>('');
  const blackColor = 'black';

  return (
    <View style={styles.container}>
      <PText style={{ color: blackColor }} fontSize="md">
        text Commponent
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
        fontSize={15}
      />
      <Button
        onPress={() => {
          console.log('Custom button pressed');
        }}
      >
        asdf
      </Button>
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
