import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { RootStackParamList } from '../../shared';
import { CommunityContent, CommunityFooter, CommunityHeader } from '../../widgets';

type CommunityProps = {
  route: RouteProp<RootStackParamList, 'Community'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Community'>;
};

const Box = styled.View`
`;

const Community = ({ route, navigation }: CommunityProps) => {
  
  const { name } = route.params;
  
  return (
    <Box>
      <CommunityHeader />
      <CommunityContent name={name} />
      <CommunityFooter />
    </Box>
  );
};

export { Community };