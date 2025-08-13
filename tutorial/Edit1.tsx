import React from 'react';
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string,
) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

// Props
type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  return (
    <View>
      <Text>Hello, I'm Cat</Text>
    </View>
  )
}

const Edit1 = () => {

  const name = "엔믹스";

  return (
    <ScrollView>
      <StyledText />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello {name}! 🎉 {getFullName('1', '2', '3')}</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        <TextInput
          style={{
            width: '90%',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="You can type in me"
        />
      </View>
      <Cat name='Lee' />
      <Cat name='Park' />
    </ScrollView>
  );
};

interface StyledTextProps {
  readonly length?: number;
}
const StyledText = styled.Text<StyledTextProps>`
  padding: 50px;
  background-color: yellow;
  text-align: center;
`;

export default Edit1;