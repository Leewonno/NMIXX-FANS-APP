import React from 'react';
import styled from 'styled-components/native';
import { AppText } from '../../shared';

// Props
interface HomeHeaderProps {
};

const Box = styled.View`
  background-color: #fff;
  padding: 2.5% 5%;
`;

const LogoBox = styled.View`
  width: 100%;
`

const LogoText = styled(AppText)`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: -2px;
`

const HomeHeader = ({ }: HomeHeaderProps) => {

  return (
    <Box>
      <LogoBox>
        <LogoText>
          NMIXX FANS
        </LogoText>
      </LogoBox>
    </Box>
  );
};

export { HomeHeader };