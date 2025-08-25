import React from 'react';
import styled from 'styled-components/native';
import { CommunityTitle } from './CommunityTitle';
import { CommunityItemList } from './CommunityItemList';

// Props
interface ComponentProps {
  category: string;
  community: string;
};

const Component = styled.View`
  padding: 0px 15px;
  flex: 1;
`;

const CommunityBoard = ({ category, community }: ComponentProps) => {

  return (
    <Component>
      <CommunityTitle category={category} community={community} />
      <CommunityItemList category={category} community={community} />
    </Component>
  );
};

export { CommunityBoard };