import {
  Alert,
  Avatar,
  Button,
  Card,
  Checkbox,
  CheckboxItem,
  CheckboxValue,
  COLORS,
  Div,
  Divider,
  Dropdown,
  DropdownItem,
  IconButton,
  Image,
  Input,
  RadioButton,
  RadioButtonItem,
  RadioButtonValue,
  SIZES,
  Spinner,
  Switch,
  Text,
  TextArea,
} from 'cherag-ui';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [userName, setUserName] = useState<string>();
  const [selectItem, setSelectItem] = useState<string>();
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
  const [alert, setAlert] = useState(false);
  const [isSwitchCheck, setIsSwitchCheck] = useState(false);
  const [isRadioBtnCheck, setIsRadioBtnCheck] = useState<RadioButtonValue>(1);

  return (
    <ScrollView>
      <Div style={styles.container}>
        <Text style={{ color: COLORS.black }} fontSize="md">
          Cherag-UI
        </Text>
        <Div bg={'gray'} w={0} h={0} p={0} m={0}>
          <Text>Div Commponent</Text>
        </Div>
        <Div style={styles.radioBtnGroup}>
          <RadioButton onChange={setIsRadioBtnCheck} selected={isRadioBtnCheck}>
            <RadioButtonItem value={1} btnColor={COLORS.green}>
              Radio button
            </RadioButtonItem>
            <RadioButtonItem value={2} btnColor={COLORS.green}>
              Radio button
            </RadioButtonItem>
          </RadioButton>
        </Div>
        <Checkbox values={checkboxes} onChange={setCheckboxes}>
          <CheckboxItem value="1">Checkbox 1</CheckboxItem>
          <CheckboxItem value="2">Checkbox 2</CheckboxItem>
          <CheckboxItem value="3">Checkbox 3</CheckboxItem>
        </Checkbox>
        <Spinner color={COLORS.green} size={'large'} />
        <Input
          onChangeText={(txt: string) => {
            setUserName(txt);
          }}
          value={userName}
          placeholder="Enter name"
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
          w={120}
          h={120}
          size={10}
          source={require('./assets/aladdin.jpeg')}
          // source={{
          //   uri: 'https://avatars.githubusercontent.com/u/6187401?v=4',
          // }}
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
    height: SIZES.DimensionHeight * 1.6,
    marginTop: 30,
  },
  radioBtnGroup: {
    flexDirection: 'row',
  },
  textAreaContainer: {
    marginTop: 30,
  },
});
