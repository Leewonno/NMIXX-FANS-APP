import React from 'react';
import styled from 'styled-components/native';
import { HomeCommunityButton } from '../../features';

// img import
import lily from '../../../assets/imgs/lily.webp';
import haewon from '../../../assets/imgs/haewon.webp';
import sullyoon from '../../../assets/imgs/sullyoon.jpg';
import bae from '../../../assets/imgs/bae.webp';
import jiwoo from '../../../assets/imgs/jiwoo.webp';
import kyujin from '../../../assets/imgs/kyujin.webp';

// Props
interface HomeCommunityProps {
};

const Box = styled.ScrollView`
  /* max-height: 100%; */
  /* width: 100%; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  flex-grow: 1;
`;

const HomeCommunity = ({ }: HomeCommunityProps) => {

  return (
    <Box>
      <HomeCommunityButton name='LILY' img={lily} />
      <HomeCommunityButton name='HAEWON' img={haewon} />
      <HomeCommunityButton name='SULLYOON' img={sullyoon} />
      <HomeCommunityButton name='BAE' img={bae} />
      <HomeCommunityButton name='JIWOO' img={jiwoo} />
      <HomeCommunityButton name='KYUJIN' img={kyujin} />
    </Box>
  );
};

export { HomeCommunity };