import React from 'react';
import styled from 'styled-components/native';
import { CommunityBoardBox, CommunityImageBox } from '../../features';
import { useDispatch } from 'react-redux';
import { setScrolled } from '../../../store/scrollSlice';

// Props
interface CommunityContentProps {
  name: string;
};

const Box = styled.ScrollView`
  width: 100%;
  height: 100%;
`;



const CommunityContent = ({ name }: CommunityContentProps) => {

  const dispatch = useDispatch();

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    dispatch(setScrolled(offsetY > 0));
  };


  return (
    <Box
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <CommunityImageBox name={name} />
      <CommunityBoardBox name={name} />
    </Box>
  );
};

export { CommunityContent };