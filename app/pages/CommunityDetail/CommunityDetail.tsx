import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { CommunityDetailHeader } from '../../widgets';
import { CommunityComment, CommunityDetailItem } from '../../features/Community';
import { HomeStackParamList } from '../../shared/types/stack';

type CommunityProps = {
  route: RouteProp<HomeStackParamList, 'CommunityDetail'>;
  navigation: NativeStackNavigationProp<HomeStackParamList, 'CommunityDetail'>;
};

const Box = styled.View`
`;

const CommunityDetail = ({ route, navigation }: CommunityProps) => {
  
  const { id } = route.params;
  
  return (
    <Box>
      <CommunityDetailHeader />
      <CommunityDetailItem id={id} />
      <CommunityComment id={id} />
      {/* <AppText>{id}</AppText> */}
    </Box>
  );
};

export { CommunityDetail };