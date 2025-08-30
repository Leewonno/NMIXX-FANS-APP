import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ImageSourcePropType, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../../../shared';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { HomeStackParamList } from '../../../shared/types/stack';

type HomeNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Community'
>;

type RootNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;

// Props
interface HomeCommunityButtonProps {
  name: string;
  img: ImageSourcePropType;
};

const CommunityButton = styled(Pressable)`
  width: 50%;
  aspect-ratio: 1;
  position: relative;
`;

const CommunityButtonImage = styled.Image`
  width: 100%;
  height: 100%;
`

const CommunityButtonText = styled.Text`
  width: 100%;
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-shadow: 1px 1px 15px #00000023;
  text-align: left;
`

const HomeCommunityButton = ({ name, img }: HomeCommunityButtonProps) => {
  const homeNavigation = useNavigation<HomeNavigationProp>();
  const rootNavigation = useNavigation<RootNavigationProp>();
  const verify = useSelector((state: RootState) => state.auth.verify);

  const handlePress = () => {
    if (verify) {
      homeNavigation.navigate('Community', { name })
      return;
    }
    rootNavigation.navigate('Login');
  }

  return (
    <CommunityButton
      onPress={handlePress}
    >
      <CommunityButtonImage
        source={img}
      />
      <CommunityButtonText>{name}</CommunityButtonText>
    </CommunityButton>
  );
};

export { HomeCommunityButton };