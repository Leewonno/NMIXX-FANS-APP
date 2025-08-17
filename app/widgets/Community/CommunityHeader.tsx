import React from 'react';
import styled from 'styled-components/native';
import { BackButton } from '../../shared';
import { CommunityProfileBox } from '../../features';

// Props
interface CommunityHeaderProps {
};

const Box = styled.View`
  padding: 20px;
  width: 100%;
  /* background-color: gray; */
  flex-direction: row;      /* ← 요소들을 가로로 배치 */
  align-items: center;      /* ← 세로 중앙 정렬 */
  justify-content: space-between; /* ← 양 끝으로 배치 */
  position: absolute;
  top: 0;
  z-index: 9999;
`;

const CommunityHeader = ({ }: CommunityHeaderProps) => {

  return (
    <Box>
      <BackButton />
      <CommunityProfileBox />
    </Box>
  );
};

export { CommunityHeader };