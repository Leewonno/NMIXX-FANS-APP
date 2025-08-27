import React, { useState } from 'react';
import { Alert, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { AppText, postData, RootStackParamList } from '../../shared';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';

// Props
type SignUpProps = {
};

const Box = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.View`
  gap: 10px;
  margin-bottom: 20px;
`

const Input = styled.TextInput`
  width: 250px;
  border: 1px solid #e5e5e5;
  height: 40px;
  padding: 0px 10px;
  font-size: 16px;
  border-radius: 10px;
`

const SignUpButton = styled(Pressable)`
  width: 250px;
  background-color: #000;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

const SignUpButtonText = styled(AppText)`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`

const BackButton = styled(Pressable)`
  
`

const BackButtonText = styled(AppText)`
  color: #989898;
  font-size: 15px;
`


const SignUp = ({ }: SignUpProps) => {
  // 데이터 관리
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nick, setNick] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'SignUp'>>();

  const handleSignUpButton = async () => {
    // 아이디 입력 확인
    if (!id) {
      Alert.alert('아이디를 확인해주세요.');
      return;
    }
    // 이메일 입력 확인
    if (!email) {
      Alert.alert('이메일을 확인해주세요.');
      return;
    }
    // 닉네임 입력 확인
    if (!nick) {
      Alert.alert('닉네임을 확인해주세요.');
      return;
    }
    // 비밀번호 입력 확인 및 일치 확인
    if (!password) {
      Alert.alert('비밀번호를 확인해주세요.');
      return;
    }
    if (password !== passwordCheck) {
      Alert.alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const mutation = `
      mutation {
        createUser(
          username: "${id}"
          password: "${password}"
          email: "${email}"
          nick: "${nick}"
        ) {
          ok
        }
      }
    `
    try {
      const data = await postData(API_URL, mutation);
      if (data.createUser) {
        if (data.createUser.ok) {
          // 스택 리셋: Login 없애고 Home만 남김
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            })
          );
          Alert.alert('환영합니다!');
        }
        return;
      }
      Alert.alert('회원가입 실패');
    } catch (error) {
      Alert.alert('회원가입 실패');
    }
  }

  const handleBackButton = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <Box>
      <InputBox>
        <Input placeholder='아이디' autoCapitalize="none" onChangeText={setId} value={id} />
        <Input placeholder='이메일' autoCapitalize="none" onChangeText={setEmail} value={email} />
        <Input placeholder='닉네임' autoCapitalize="none" onChangeText={setNick} value={nick} />
        <Input secureTextEntry={true} placeholder='비밀번호' onChangeText={setPassword} value={password} />
        <Input secureTextEntry={true} placeholder='비밀번호 확인' onChangeText={setPasswordCheck} value={passwordCheck} />
        <SignUpButton onPress={handleSignUpButton}>
          <SignUpButtonText>회원가입</SignUpButtonText>
        </SignUpButton>
      </InputBox>
      <BackButton onPress={handleBackButton}>
        <BackButtonText>이전</BackButtonText>
      </BackButton>
    </Box>
  );
};

export { SignUp };