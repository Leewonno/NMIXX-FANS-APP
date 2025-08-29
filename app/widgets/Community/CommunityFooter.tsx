import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { BackButton } from '../../shared';
import { CommunityCreateButton, CommunityProfileBox } from '../../features';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Animated, Dimensions } from 'react-native';

// Props
interface CommunityFooterProps {
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

const CommunityFooter = ({ }: CommunityFooterProps) => {

  return (
    <Box>
      <CommunityCreateButton />
    </Box>
  );
};

export { CommunityFooter };