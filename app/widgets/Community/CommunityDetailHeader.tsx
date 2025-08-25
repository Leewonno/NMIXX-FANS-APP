import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { AppText, BackBlackButton, BackButton } from '../../shared';

// Props
interface CommunityDetailHeaderProps {
};

const Box = styled.View`
  padding: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 1000;
  background-color: #fff;
`;

const Title = styled(AppText)`
  font-weight: bold;
  font-size: 18px;
`

const EmptyBox = styled.View`
  /* BackBlackButton 가로 크기 만큼 */
  width: 20px;
`

const CommunityDetailHeader = ({ }: CommunityDetailHeaderProps) => {

  return (
    <Box>
      <BackBlackButton />
      <Title>게시글</Title>
      <EmptyBox />
    </Box>
  );
};

export { CommunityDetailHeader };