import React from 'react';
import styled from 'styled-components/native';
import { CommunityCreateButton } from '../../features';

// Props
interface CommunityFooterProps {
  community: string;
};

const Box = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0px;
  z-index: 1000;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
`;

const CommunityFooter = ({ community }: CommunityFooterProps) => {

  return (
    <Box>
      <CommunityCreateButton community={ community } />
    </Box>
  );
};

export { CommunityFooter };