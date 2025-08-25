import React from 'react';
import styled from 'styled-components/native';
import { AppText } from '../../shared';
import logo from '../../../assets/imgs/nmixxfans.png';

// Props
interface HomeHeaderProps {
};

const Box = styled.View`
  background-color: #fff;
  padding: 4% 5%;
`;

const LogoBox = styled.View`
  width: 100%;
`

const LogoText = styled(AppText)`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: -2px;
`

const LogoImage = styled.Image`
  width: 200px;
  object-fit: contain;
`

const HomeHeader = ({ }: HomeHeaderProps) => {

  return (
    <Box>
      <LogoBox>
        <LogoImage source={logo} />
        {/* <LogoText>
          NMIXX FANS
        </LogoText> */}
      </LogoBox>
    </Box>
  );
};

export { HomeHeader };