import React, { useState } from 'react';
import styled from 'styled-components/native';
import logo from '../../../assets/imgs/nmixxfans.png';
import { Alert, Pressable } from 'react-native';
import { AppText, postData, RootStackParamList } from '../../shared';
import { API_URL } from '@env';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Props
type LoginProps = {
};

const Box = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LogoBox = styled.View`
  margin-bottom: 30px;
`

const LogoImage = styled.Image`
  width: 200px;
  object-fit: contain;
`

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

const LoginButton = styled(Pressable)`
  width: 250px;
  background-color: #000;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

const LoginButtonText = styled(AppText)`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`

const SignUpButton = styled(Pressable)`
  
`

const SignUpButtonText = styled(AppText)`
  color: #989898;
  font-size: 15px;
`

const Login = ({ }: LoginProps) => {

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();

  const handleLoginButton = async () => {
    const mutation = `
      mutation {
        tokenAuth(username: "${id}", password: "${password}") {
          token
        }
      }
    `
    try {
      const data = await postData(API_URL, mutation);
      if (data.tokenAuth) {
        await AsyncStorage.setItem('token', data.tokenAuth.token);
        // 스택 리셋: Login 없애고 Home만 남김
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        );
      } else {
        AsyncStorage.setItem('token', '');
        Alert.alert('로그인 실패', '아이디 또는 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      console.log(error)
      AsyncStorage.setItem('token', '');
      Alert.alert('로그인 실패', '아이디 또는 비밀번호를 확인해주세요.');
    }
  }

  const handleSignUpButton = () => {
    navigation.navigate('SignUp');
  }

  return (
    <Box>
      <LogoBox>
        <LogoImage source={logo} />
      </LogoBox>
      <InputBox>
        <Input placeholder='아이디' autoCapitalize="none" onChangeText={setId} value={id} />
        <Input secureTextEntry={true} placeholder='비밀번호' value={password} onChangeText={setPassword} />
        <LoginButton onPress={handleLoginButton}>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
      </InputBox>
      <SignUpButton onPress={handleSignUpButton}>
        <SignUpButtonText>회원가입</SignUpButtonText>
      </SignUpButton>
    </Box>
  );
};

export { Login };