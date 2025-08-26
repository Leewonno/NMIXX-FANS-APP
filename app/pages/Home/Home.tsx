import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { HomeCommunity, HomeHeader } from '../../widgets';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { postData } from '../../shared';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setVerify } from '../../../store/authSlice';

// Props
type HomeProps = {
};

const Box = styled.View`
`;

const Home = ({ }: HomeProps) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const verifyToken = async (token: string) => {
      const mutation = `
        mutation {
          verifyToken(token: "${token}2s") {
        		ok
            error
            user {
              id
              username
            }
            member {
              id
              name
              nick
              profileImg
            }
          }
        }
      `
      const data = await postData(API_URL, mutation);
      return data;
    }

    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const valid = await verifyToken(token); // 서버에 검증 요청
          console.log(valid)
          if (valid) {
            if (valid.verifyToken.ok) {
              dispatch(setVerify(valid.verifyToken.ok))
            } else {
              dispatch(setVerify(valid.verifyToken.ok))
            }
          }
        } catch (error) {
          dispatch(setVerify(false))
        }
      }
    };
    checkToken();
  }, []);

  return (
    <Box>
      <HomeHeader />
      <HomeCommunity />
    </Box>
  );
};

export { Home };