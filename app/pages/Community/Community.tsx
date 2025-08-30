import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { CommunityContent, CommunityFooter, CommunityHeader } from '../../widgets';
import { HomeStackParamList } from '../../shared/types/stack';

type CommunityProps = {
  route: RouteProp<HomeStackParamList, 'Community'>;
  navigation: NativeStackNavigationProp<HomeStackParamList, 'Community'>;
};

const Box = styled.View`
`;

const Community = ({ route, navigation }: CommunityProps) => {
  
  const { name } = route.params;
  
  return (
    <Box>
      <CommunityHeader />
      <CommunityContent name={name} />
      <CommunityFooter community={name} />
    </Box>
  );
};

export { Community };