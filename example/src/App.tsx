import {
  Button,
  Checkbox,
  CheckboxItem,
  CheckboxValue,
  Div,
  Input,
  PText,
  Radio,
} from 'cherag-ui';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../src/Theme/Themes';
import Loader from '../../src/components/Loader';

export default function App() {
  const [userName, setUserName] = useState<string>();
  const [selectItem, setSelectItem] = useState<string>();

  const blackColor = 'black';

  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);

  return (
    <Div style={styles.container}>
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
      <Div>
        <PText>Checkbox Test</PText>
        <Checkbox values={checkboxes} onChange={setCheckboxes}>
          <CheckboxItem value="1">Checkbox 1</CheckboxItem>
          <CheckboxItem value="2">Checkbox 2</CheckboxItem>
          <CheckboxItem value="3">Checkbox 3</CheckboxItem>
        </Checkbox>
        <PText>{checkboxes.join(', ')}</PText>
      </Div>
      <Loader color={COLORS.green} size={'large'} />
    </Div>
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
  radioGroup: {
    flexDirection: 'row',
  },
});
