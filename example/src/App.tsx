import {
  Alert,
  Avatar,
  Button,
  Card,
  Checkbox,
  CheckboxItem,
  CheckboxValue,
  Div,
  Divider,
  Dropdown,
  DropdownItem,
  IconButton,
  Image,
  Input,
  Radio,
  Switch,
  Text,
  TextArea,
} from 'cherag-ui';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Loader from '../../src/components/Loader';
import { COLORS, SIZES } from '../../src/theme';

export default function App() {
  const [userName, setUserName] = useState<string>();
  const [selectItem, setSelectItem] = useState<string>();
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
  const [alert, setAlert] = useState(false);
  const [isSwitchCheck, setIsSwitchCheck] = useState(false);

  return (
    <ScrollView>
      <Div style={styles.container}>
        <Text style={{ color: COLORS.black }} fontSize="md">
          Cherag-UI
        </Text>
        <Div bg={'gray'} w={0} h={0} p={0} m={0}>
          <Text>Div Commponent</Text>
        </Div>
        <Div style={styles.radioGroup}>
          <Radio
            onPress={() => {
              setSelectItem('Radio button 1');
            }}
          >
            Radio Button 1
          </Radio>
          <Radio
            onPress={() => {
              setSelectItem('Radio button 2');
            }}
          >
            Radio Button 1
          </Radio>
        </Div>
        <Checkbox values={checkboxes} onChange={setCheckboxes}>
          <CheckboxItem value="1">Checkbox 1</CheckboxItem>
          <CheckboxItem value="2">Checkbox 2</CheckboxItem>
          <CheckboxItem value="3">Checkbox 3</CheckboxItem>
        </Checkbox>
        <Loader color={COLORS.green} size={'large'} />
        <Input
          onChangeText={(txt: string) => {
            setUserName(txt);
          }}
          value={userName}
          placeholder="enter name"
          leftIcon="lock"
          rightIcon="eye"
        />
        <Button
          bg={COLORS.softGray}
          color={COLORS.black}
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
        <Card
          title="The Garden City"
          subTitle="The Silicon Valley of BD"
          category="Photo"
          footerText="6 mins ago"
        >
          'Bengaluru (also called Bangalore) is the center of BD high-tech
          industry. The city is also known for its parks and nightlife Bengaluru
          (also called Bangalore) is the center of BD high-tech industry. The
          city is also known for its parks and nightlife
        </Card>
        <IconButton
          icon="rocket"
          onPress={() => {
            console.log('Icon Button pressed');
          }}
          size={68}
          color={COLORS.green}
        />
        <Switch
          size="lg"
          isSwitchCheck={isSwitchCheck}
          setIsSwitchCheck={setIsSwitchCheck}
        />
        <Div style={styles.textAreaContainer}>
          <TextArea />
        </Div>
        <Avatar.Image
          size={60}
          dotSize={20}
          dotColor={COLORS.green}
          source={require('./assets/aladdin.jpeg')}
        />
        <Avatar.Text
          bgColor={COLORS.orange}
          textColor={COLORS.white}
          size={60}
          label="XD"
        />
        <Avatar.Icon
          iconColor={COLORS.blue}
          bgColor={COLORS.lightGray}
          iconSize={35}
          icon="file"
        />
      </Div>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SIZES.DimensionHeight * 2,
    marginTop: 30,
  },
  radioGroup: {
    flexDirection: 'row',
  },
  textAreaContainer: {
    marginTop: 30,
  },
});
