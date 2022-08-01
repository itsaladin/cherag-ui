import { Button, Div, Input, PText, Radio } from 'cherag-ui';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [userName, setUserName] = useState<string>('');
  const [selectItem, setSelectItem] = useState<string>('');

  const blackColor = 'black';

  return (
    <View style={styles.container}>
      <PText style={{ color: blackColor }} fontSize="md">
        text Commponent
      </PText>
      <Div bg={'gray'} w={0} h={0} p={0} m={0} style={{ color: blackColor }}>
        <PText>Div Commponent</PText>
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

      <Div style={styles.radioGroup}>
        <Radio
          width={150}
          onPress={() => {
            setSelectItem('Radio button 1');
          }}
        >
          Radio Button 1
        </Radio>
        <Radio
          width={150}
          onPress={() => {
            setSelectItem('Radio button 2');
          }}
        >
          Radio Button 1
        </Radio>
      </Div>
      <PText>{selectItem}</PText>
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
  radioGroup: { flexDirection: 'row' },
});
