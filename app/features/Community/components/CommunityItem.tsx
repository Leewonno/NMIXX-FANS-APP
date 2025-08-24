import React from 'react';
import styled from 'styled-components/native';
import { AppText } from '../../../shared';
import TranslateIcon from '../../../../assets/icons/translate.svg'
import { Alert, Dimensions } from 'react-native';

// Props
interface ComponentProps extends CommunityItemListProps {
};

const Component = styled.View`
  flex: 1;
  gap: 10px;
`;

const ProfileBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`

const Profile = styled.View`
  flex-direction: row;
  gap: 10px;
`

const ProfileImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
`

const ProfileTextBox = styled.View`
  
`

const ProfileNick = styled(AppText)`
  font-weight: 500;
`

const ProfileDate = styled(AppText)`
  font-size: 13px;
  font-weight: normal;
  color: #c0c0c0;
`

const Translate = styled.TouchableOpacity`
  
`

const ContentBox = styled.View`
  width: 100%;
  padding: 15px;
  background-color: #e9f8ff;
  border-radius: 15px;
  flex-direction: column;
  gap: 15px;
`

const Content = styled(AppText)`
  width: 100%;
`

const screenWidth = Dimensions.get('window').width;

const ContentImage = styled.Image`
  width: 100%;
  height: ${screenWidth - 70}px;
  object-fit: cover;
  border-radius: 10px;
`


const CommunityItem = ({ id, nick, profile_img, content, created_date, img_01 }: ComponentProps) => {
  return (
    <Component>
      <ProfileBox>
        <Profile>
          <ProfileImage source={{ uri: profile_img }} />
          <ProfileTextBox>
            <ProfileNick>{nick}</ProfileNick>
            <ProfileDate>{created_date}</ProfileDate>
          </ProfileTextBox>
        </Profile>
        <Translate onPress={() => Alert.alert('준비중인 서비스입니다.')}>
          <TranslateIcon width={17.5} height={17.5} fill={'#c0c0c0'} />
        </Translate>
      </ProfileBox>
      <ContentBox>
        <Content>{content}</Content>
        {
          img_01 ? <ContentImage source={{ uri: img_01 }} /> : <></>
        }
      </ContentBox>
    </Component>
  );
};

export { CommunityItem };