import React from 'react';
import styled from 'styled-components/native';

// Props
type HeaderProps = {
};

const Box = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* position: fixed; */
  /* z-index: 9999; */
`;

const LogoBox = styled.View`
  
`

const LogoText = styled.Text`
  font-size: 2rem;
  
`

const Header = ({ }: HeaderProps) => {

  return (
    <Box>
      <LogoBox>
        <LogoText>
          {/* We are FANS */}
        </LogoText>
      </LogoBox>
    </Box>
  );
};

export { Header };