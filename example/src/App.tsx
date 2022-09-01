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
  const [selectedRadio, setSelectedRadio] = useState<RadioButtonValue>(1);

  return (
    <ScrollView>
      <Div style={styles.container}>
        <Text style={{ color: COLORS.black }} fontSize="md">
          Cherag-UI
        </Text>
        <Div>
          <Text>Div Commponent</Text>
        </Div>
        <Div style={styles.radioBtnGroup}>
          <RadioButton
            btnColor={COLORS.green}
            onChange={setSelectedRadio}
            selected={selectedRadio}
          >
            <RadioButtonItem value={1}>Radio button</RadioButtonItem>
            <RadioButtonItem value={2}>Radio button</RadioButtonItem>
          </RadioButton>
        </Div>
        <Checkbox values={checkboxes} onChange={setCheckboxes}>
          <CheckboxItem iconSize={22} textStyle={styles.checkboxText} value="1">
            Checkbox item 1
          </CheckboxItem>
          <CheckboxItem iconSize={22} textStyle={styles.checkboxText} value="2">
            Checkbox item 2
          </CheckboxItem>
          <CheckboxItem iconSize={22} textStyle={styles.checkboxText} value="3">
            Checkbox item 3
          </CheckboxItem>
        </Checkbox>
        <Spinner color={COLORS.green} size={'large'} />
        <Input
          onChangeText={setUserName}
          value={userName}
          placeholder="Enter name"
          leftIcon="lock"
          rightIcon="eye"
          w={200}
          h={40}
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
        <Divider color={COLORS.black} thickness={1} w={410} />
        <Divider color={COLORS.errorIcon} thickness={3} w={410} />
        <Dropdown
          onChange={setSelectItem}
          selected={selectItem}
          header="Choose your service"
          w={'50%'}
          borderColor={COLORS.softGray}
        >
          <DropdownItem value="Audio device">Audio device</DropdownItem>
          <DropdownItem value="Video device">Video device</DropdownItem>
          <DropdownItem value="Wifi device">Wifi device</DropdownItem>
        </Dropdown>
        <Image
          w={120}
          h={120}
          size={10}
          alt="Image not found"
          source={require('./assets/cat.jpg')}
        />
        <Image
          w={120}
          h={120}
          size={10}
          alt="Image not found"
          source={{
            uri: 'https://images.unsplash.com/photo-1598589290625-9b04630ec5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80',
          }}
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
        <Div style={styles.radioBtnGroup}>
          <IconButton
            icon="rocket"
            onPress={() => {
              console.log('Test IconButton component');
            }}
            size={68}
            color={COLORS.green}
          />
          <IconButton
            icon="heart"
            onPress={() => {
              console.log('Test IconButton component');
            }}
            size={68}
            color={COLORS.red}
          />
          <IconButton
            icon="clover"
            onPress={() => {
              console.log('Test IconButton component');
            }}
            size={68}
            color={COLORS.green}
          />
        </Div>
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
          source={require('./assets/alauddin.jpg')}
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
          onPress={() => console.log('Test Avatar.Icon component')}
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
  radioBtnGroup: {
    flexDirection: 'row',
  },
  textAreaContainer: {
    marginTop: 30,
  },
  checkboxText: {
    fontSize: 16,
  },
});
