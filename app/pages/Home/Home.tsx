import React from 'react';
import styled from 'styled-components/native';
import { HomeCommunity, HomeHeader } from '../../widgets';

// Props
type HomeProps = {
};

const Box = styled.View`
`;

const Home = ({ }: HomeProps) => {

  return (
    <Box>
      <HomeHeader />
      <HomeCommunity />
    </Box>
  );
};

export { Home };