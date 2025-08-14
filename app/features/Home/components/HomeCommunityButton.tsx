import React from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';
import styled from 'styled-components/native';

// Props
interface HomeCommunityButtonProps {
  name: string;
  img: ImageSourcePropType;
};

const CommunityButton = styled(Pressable)`
  width: 50%;
  max-height: 300px;
  position: relative;
`;

const CommunityButtonImage = styled.Image`
  width: 100%;
  object-fit: contain;
`

const CommunityButtonText = styled.Text`
  text-align: center;
  position: absolute;
  bottom: 0;
`

const HomeCommunityButton = ({ name, img }: HomeCommunityButtonProps) => {

  return (
    <CommunityButton>
      <CommunityButtonImage
        source={img}
      />
      <CommunityButtonText>{name}</CommunityButtonText>
    </CommunityButton>
  );
};

export { HomeCommunityButton };