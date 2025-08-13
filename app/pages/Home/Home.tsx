import React from 'react';
import styled from 'styled-components/native';

// Props
type HomeProps = {
};

const ScrollBox = styled.ScrollView`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.Text`
  padding: 50px;
  background-color: yellow;
  text-align: center;
`;

const Home = ({ }: HomeProps) => {

  return (
    <ScrollBox>
    </ScrollBox>
  );
};

export { Home };