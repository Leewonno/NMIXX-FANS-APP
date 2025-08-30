import React from 'react';
import styled from 'styled-components/native';
import { RootStackParamList } from '../../../shared';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AddIcon from '../../../../assets/icons/add.svg'
import { Platform, Pressable } from 'react-native';

type CommunityDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Community'
>;

// Props
interface ComponentProps {
  community: string;
};

const Component = styled.View`
`;

const CreateButton = styled(Pressable)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  ${Platform.select({
  ios: `
      shadow-color: #000;
      shadow-offset: 0px 1px;
      shadow-opacity: 0.2;
      shadow-radius: 1px;
    `,
  android: `
      elevation: 3;
    `,
})}
`

const CommunityCreateButton = ({ community }: ComponentProps) => {
  const navigation = useNavigation<CommunityDetailNavigationProp>();

  const handlePress = () => {
    navigation.navigate('Create', {community: community});
  };

  return (
    <Component>
      <CreateButton onPress={handlePress}>
        <AddIcon width={30} height={30} fill={'#676767'} />
      </CreateButton>
    </Component>
  );
};

export { CommunityCreateButton };