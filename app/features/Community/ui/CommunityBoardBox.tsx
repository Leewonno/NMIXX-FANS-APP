import React from 'react';
import styled from 'styled-components/native';

// Props
interface BoxProps {
  name: string;
};

const Box = styled.View`
  padding: 0px 20px;
`;

const CommunityText = styled.Text`
  
`

const CommunityBoardBox = ({ name }: BoxProps) => {

  return (
    <Box>
      <CommunityText>
        {name}
      </CommunityText>
    </Box>
  );
};

export { CommunityBoardBox };