import {
  Alert,
  Button,
  Checkbox,
  CheckboxItem,
  CheckboxValue,
  Div,
  Divider,
  Input,
  PText,
  Radio,
  Dropdown,
} from 'cherag-ui';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../src/Theme';
import Loader from '../../src/components/Loader';

export default function App() {
  const [userName, setUserName] = useState<string>();
  const [selectItem, setSelectItem] = useState<string>();
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
  const [alert, setAlert] = useState<Boolean>(false);

  const [isItemVisible, setItemVisible] = useState<Boolean>(false);
  const [dSelectedItem, setDSelectedItem] = useState<string>();

  const blackColor = 'black';

  return (
    <Div style={styles.container}>
      <PText style={{ color: blackColor }} fontSize="md">
        text Commponent
      </PText>
      <Div bg={'gray'} w={0} h={0} p={0} m={0}>
        <PText>Div Commponent</PText>
      </Div>
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
      <PText>Checkbox Test</PText>
      <Checkbox values={checkboxes} onChange={setCheckboxes}>
        <CheckboxItem value="1">Checkbox 1</CheckboxItem>
        <CheckboxItem value="2">Checkbox 2</CheckboxItem>
        <CheckboxItem value="3">Checkbox 3</CheckboxItem>
      </Checkbox>
      <Loader color={COLORS.green} size={'large'} />
      <Input
        //@ts-ignore
        onChangeText={(txt) => {
          setUserName(txt);
        }}
        value={userName}
        placeholder="enter name"
        leftIcon="lock"
        rightIcon="eye"
      />
      <Button
        onPress={() => {
          console.log('Custom button pressed');
          setAlert(!alert);
        }}
      >
        Button
      </Button>

      <Alert status="warning" title="Item deleted !!!" />

      <Divider color={COLORS.darkGray} thickness={1} />

      <Dropdown status={'success'}>
        <Div style={styles.dropdownBtn}>
          <Button
            width={350}
            height={50}
            fontSize={22}
            bg={COLORS.lightGray7}
            color={COLORS.black}
            onPress={() => {
              setItemVisible(!isItemVisible);
            }}
            style={styles.dropdown}
          >
            {dSelectedItem || 'choose you service'}
          </Button>
        </Div>

        {isItemVisible && (
          <Div>
            <PText fontSize="lg" style={styles.dropdownItem}>
              Choose Service
            </PText>
            <TouchableOpacity
              onPress={() => {
                setDSelectedItem('item1');
                setItemVisible(!isItemVisible);
              }}
            >
              <PText>Item 1</PText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDSelectedItem('item2');
                setItemVisible(!isItemVisible);
              }}
            >
              <PText>Item 2</PText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDSelectedItem('item3');
                setItemVisible(!isItemVisible);
              }}
            >
              <PText>Item 3</PText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDSelectedItem('item4');
                setItemVisible(!isItemVisible);
              }}
            >
              <PText>Item 4</PText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDSelectedItem('item5');
                setItemVisible(!isItemVisible);
              }}
            >
              <PText>Item 5</PText>
            </TouchableOpacity>
          </Div>
        )}
      </Dropdown>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    width: '100%',
  },
  radioGroup: {
    flexDirection: 'row',
  },
  dropdownBtn: {
    flexDirection: 'row',
  },
  dropdown: {
    justifyContent: 'center',
  },
  dropdownItem: {
    color: COLORS.darkGray,
  },
});
