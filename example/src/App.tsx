import {
  Alert,
  Button,
  Card,
  Checkbox,
  CheckboxItem,
  CheckboxValue,
  Div,
  Divider,
  Dropdown,
  DropdownItem,
  Image,
  Input,
  Radio,
  Text,
} from 'cherag-ui';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Loader from '../../src/components/Loader';
import { COLORS } from '../../src/Theme';

export default function App() {
  const [userName, setUserName] = useState<string>();
  const [selectItem, setSelectItem] = useState<string>();
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
  const [alert, setAlert] = useState<Boolean>(false);

  const blackColor = 'black';

  return (
    <ScrollView style={styles.scrollView}>
      <Div style={styles.container}>
        <Text style={{ color: blackColor }} fontSize="md">
          text Commponent
        </Text>
        <Div bg={'gray'} w={0} h={0} p={0} m={0}>
          <Text>Div Commponent</Text>
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
        <Text>{selectItem}</Text>
        <Text>Checkbox Test</Text>
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

        <Dropdown
          onChange={setSelectItem}
          selected={selectItem}
          header=" Choose Service"
        >
          <DropdownItem value="item1">item1</DropdownItem>
          <DropdownItem value="item2">item2</DropdownItem>
          <DropdownItem value="item3">item3</DropdownItem>
        </Dropdown>

        <Image
          w={40}
          h={50}
          uri="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
        />

        <Card w={380} h={400} />
      </Div>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: '100%',
    height: 990,
  },
  radioGroup: {
    flexDirection: 'row',
  },
  scrollView: {
    height: 990,
    flex: 1,
  },
});
