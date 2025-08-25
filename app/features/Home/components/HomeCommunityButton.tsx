import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ImageSourcePropType, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../../../shared';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

type CommunityScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
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
  const navigation = useNavigation<CommunityScreenNavigationProp>();
  const token = useSelector((state: RootState) => state.auth.token);

  const handlePress = ()=>{
    if (token) {
      navigation.navigate('Community', { name })
      return;
    }
    navigation.navigate('Login');
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