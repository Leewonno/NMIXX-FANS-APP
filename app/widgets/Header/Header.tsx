import React from 'react';
import styled from 'styled-components/native';

// Props
type HeaderProps = {
};

const Box = styled.View`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: fixed;
  z-index: 9999;
`;

const LogoBox = styled.View`
  font-size: 2rem;
`

const Header = ({ }: HeaderProps) => {

  return (
    <Box>
      <LogoBox>We are FANS</LogoBox>
    </Box>
  );
};

export { Header };