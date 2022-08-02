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
import { loadAsync } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [userName, setUserName] = useState<string>();
  const [selectItem, setSelectItem] = useState<string>();
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const blackColor = 'black';

  useEffect(() => {
    loadAsync({
      'material-community': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
    }).then(() => setIsLoading(false));
  });

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
          <CheckboxItem value="1" icon="ios-pizza">
            Checkbox 1
          </CheckboxItem>
          <CheckboxItem value="2" icon="ios-pizza">
            Checkbox 2
          </CheckboxItem>
          <CheckboxItem value="3" icon="ios-pizza">
            Checkbox 3
          </CheckboxItem>
        </Checkbox>
        <PText>{checkboxes.join(', ')}</PText>
        <Icon name="plus" size={30} color="#900" />
      </Div>
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
