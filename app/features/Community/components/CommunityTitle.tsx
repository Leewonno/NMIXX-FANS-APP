import React from 'react';
import styled from 'styled-components/native';
import { AppText } from '../../../shared';
import { StyleSheet } from 'react-native';

// Props
interface ComponentProps {
  category: string;
};

const Component = styled.View`
`;

const CommunityTitle = ({ category }: ComponentProps) => {
  return (
    <Component>
      {
        category === '아티스트' ?
          <AppText style={style.text}>From. NMIXX</AppText>
          :
          <AppText style={style.text}>팬 게시물</AppText>
      }
    </Component>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingTop: 30,
    paddingBottom: 20,
    fontWeight: 'bold',
  }
})

export { CommunityTitle };