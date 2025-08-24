import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { BackButton } from '../../shared';
import { CommunityProfileBox } from '../../features';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Animated, Dimensions } from 'react-native';

// Props
interface CommunityHeaderProps {
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
`;

const CommunityHeader = ({ }: CommunityHeaderProps) => {

  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const y: number = useSelector((state: RootState) => state.scroll.y);

  // 기기 가로 길이
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    if (y >= screenWidth) { // 스크롤을 화면 너비의 20% 이상 내리면
      setBackgroundColor('#fff');
    } else {
      setBackgroundColor('transparent');
    }
  }, [y]);

  return (
    <Box style={{ backgroundColor }}>
      <BackButton />
      <CommunityProfileBox />
    </Box>
  );
};

export { CommunityHeader };