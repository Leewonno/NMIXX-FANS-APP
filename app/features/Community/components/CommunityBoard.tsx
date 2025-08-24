import React from 'react';
import styled from 'styled-components/native';
import { CommunityTitle } from './CommunityTitle';
import { CommunityItemList } from './CommunityItemList';

// Props
interface ComponentProps {
  category: string;
};

const Component = styled.View`
  padding: 0px 20px;
  flex: 1;
`;

const CommunityBoard = ({ category }: ComponentProps) => {

  return (
    <Component>
      <CommunityTitle category={category} />
      <CommunityItemList category={category} />
    </Component>
  );
};

export { CommunityBoard };