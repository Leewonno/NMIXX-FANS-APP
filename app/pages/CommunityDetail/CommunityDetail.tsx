import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { AppText, RootStackParamList } from '../../shared';
import { CommunityDetailHeader } from '../../widgets';
import { CommunityComment, CommunityDetailItem } from '../../features/Community';

type CommunityProps = {
  route: RouteProp<RootStackParamList, 'CommunityDetail'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'CommunityDetail'>;
};

const Box = styled.View`
`;

const CommunityDetail = ({ route, navigation }: CommunityProps) => {
  
  const { id } = route.params;
  
  return (
    <Box>
      <CommunityDetailHeader />
      <CommunityDetailItem id={id} />
      <CommunityComment />
      {/* <AppText>{id}</AppText> */}
    </Box>
  );
};

export { CommunityDetail };