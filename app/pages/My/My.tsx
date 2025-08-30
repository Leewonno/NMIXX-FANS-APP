import React from 'react';
import styled from 'styled-components/native';
import my from '../../../assets/imgs/my_header.png'
import { AppText, RootStackParamList } from '../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { Pressable } from 'react-native';
import ButtonIcon from '../../../assets/icons/next.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { setId, setNick, setProfileImg, setUsername, setVerify } from '../../../store/authSlice';

// Props
type MyProps = {
};

const Box = styled.View`
  flex: 1;
  gap: 10px;
  background-color: #f8f8f8;
`;

const MyHeader = styled.View`
  background-color: #fff;
  padding: 4% 5%;
`

const TitleBox = styled.View`
  margin-bottom: 5px;
`

const TitleImage = styled.Image`
  width: 140px;
  object-fit: contain;
`

const UserBox = styled.View`
`

const UserText = styled(AppText)`
  font-size: 18px;
  color: #959595;
  font-weight: normal;
`

const MySetting = styled.ScrollView`
  padding: 4% 5%;
  background-color: #fff;
`

const MyManagementBox = styled.View`
`

const MyCategory = styled(AppText)`
  color: #959595;
  margin-bottom: 10px;
`

const MyButton = styled(Pressable)`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0px;
`

const ButtonText = styled(AppText)`
  font-weight: 300;
`

const My = ({ }: MyProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const verify = useSelector((state: RootState) => state.auth.verify);
  const username = useSelector((state: RootState) => state.auth.username);
  const rootNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'My'>>();

  const handleOut = async () => {

  }

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      dispatch(setVerify(false));
      dispatch(setId(null));
      dispatch(setUsername(''));
      dispatch(setNick(''));
      dispatch(setProfileImg(''));
      rootNavigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        })
      )
      return;
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleSignUp = async () => {
    rootNavigation.navigate('SignUp');
  }

  const handleLogin = async () => {
    rootNavigation.navigate('Login');
  }

  return (
    <Box>
      <MyHeader>
        <TitleBox>
          <TitleImage source={my} />
        </TitleBox>
        <UserBox>
          {verify ?
            <UserText>{username}</UserText>
            :
            <UserText>로그인 후 이용해 주세요</UserText>
          }
        </UserBox>
      </MyHeader>
      <MySetting>
        <MyManagementBox>
          <MyCategory>내 정보</MyCategory>
          {verify ?
            (<>
              <MyButton onPress={handleLogout}>
                <ButtonText>로그아웃</ButtonText>
                <ButtonIcon width={15} height={15} pointerEvents="none" />
              </MyButton>
              <MyButton onPress={handleOut}>
                <ButtonText>회원탈퇴</ButtonText>
                <ButtonIcon width={15} height={15} />
              </MyButton>
            </>
            )
            :
            <>
              <MyButton onPress={handleLogin}>
                <ButtonText>로그인</ButtonText>
                <ButtonIcon width={15} height={15} />
              </MyButton>
              <MyButton onPress={handleSignUp}>
                <ButtonText>회원가입</ButtonText>
                <ButtonIcon width={15} height={15} />
              </MyButton>
            </>
          }

        </MyManagementBox>
      </MySetting>
    </Box>
  );
};

export { My };