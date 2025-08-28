import React, { useState } from 'react';
import styled from 'styled-components/native';
import { AppText, postData, RootStackParamList, timeAgo } from '../../../shared';
import TranslateIcon from '../../../../assets/icons/translate.svg'
import StarIcon from '../../../../assets/icons/star.svg'
import { Alert, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LikeIcon from '../../../../assets/icons/favorite.svg'
import EmptyLikeIcon from '../../../../assets/icons/favorite_empty.svg'
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CommunityDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CommunityDetail'
>;

// Props
interface ComponentProps extends CommunityItemListProps {
};

const Component = styled.View`
  flex: 1;
`;

const ProfileBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
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
  border-color: #c0c0c0;
`

const ProfileTextBox = styled.View`
  gap: 2px;
`

const ProfileNickBox = styled.View`
  gap: 2px;
  flex-direction: row;
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

const ContentBox = styled.Pressable`
  width: 100%;
  padding: 15px;
  background-color: #f1fbff;
  border-radius: 10px;
  flex-direction: column;
  gap: 15px;
`

const ContentTriangle = styled.View`
  width: 0;
  height: 0;
  border-left-width: 6px;
  border-right-width: 6px;
  border-bottom-width: 10px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #f1fbff;
  align-self: flex-start; /* 부모 가로 중앙 정렬 */
  margin-left: 12px;
`

const Content = styled(AppText)`
  width: 100%;
`

const screenWidth = Dimensions.get('window').width;

const ContentImage = styled.Image`
  width: 100%;
  height: ${screenWidth - 60}px;
  object-fit: cover;
  border-radius: 7.5px;
`

const DivisionLine = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e3e3e3;
  margin-bottom: 15px;
`

const LikeBox = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

const LikeButton = styled(Pressable)`
`

const LikeText = styled(AppText)`
  color: #e5e5e5;
  font-size: 16px;
`

const CommentBox = styled.View`
`

const CommentProfile = styled.View`
  flex-direction: row;
  gap: 10px;
`

const CommentProfileImage = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  border-color: #c0c0c0;
`

const CommentProfileTextBox = styled.View`
  gap: 2px;
`

const CommentProfileNickBox = styled.View`
  gap: 2px;
  flex-direction: row;
`

const CommentProfileNick = styled(AppText)`
  font-weight: 500;
`

const CommentContent = styled(AppText)`
  padding-top: 2px;
`

const CommunityItem = ({ id, member, content, createdAt, img01, boardComment, isLiked, like }: ComponentProps) => {
  const navigation = useNavigation<CommunityDetailNavigationProp>();

  const [newLike, setNewLike] = useState<number | null>(null);
  const [newIsLiked, setNewIsLiked] = useState<boolean | null>(null);

  const handlePress = (id: number) => {
    navigation.navigate('CommunityDetail', { id });
  };

  const handleLike = async () => {
    const token = await AsyncStorage.getItem('token');

    const mutation = `
      mutation {
        updateBoardLike(boardId:${id}, token:"${token}") {
          ok
          status
          like
          error
        }
      }
    `
    const data = await postData(API_URL, mutation);
    const res = data.updateBoardLike;
    if (res) {
      if (res.ok) {
        setNewIsLiked(res.status);
        setNewLike(res.like);
      }
      return;
    } else {
      Alert.alert('문제가 발생했습니다.')
    }
  }

  return (
    <Component>
      {/* 프로필 박스 */}
      <ProfileBox>
        <Profile>
          <ProfileImage source={{ uri: member.profileImg }} />
          <ProfileTextBox>
            <ProfileNickBox>
              <ProfileNick>{member.nick}</ProfileNick>
              {member.role === 'C' ? <StarIcon width={15} height={15} fill={'#528cff'} /> : <></>}
            </ProfileNickBox>
            <ProfileDate>{timeAgo(createdAt)}</ProfileDate>
          </ProfileTextBox>
        </Profile>
        {/* 번역버튼 */}
        <Translate onPress={() => Alert.alert('준비중인 서비스입니다.')}>
          <TranslateIcon width={17.5} height={17.5} fill={'#c0c0c0'} />
        </Translate>
      </ProfileBox>
      {/* 말풍선효과 */}
      <ContentTriangle />
      <ContentBox onPress={() => { handlePress(id) }}>
        <Content>{content}</Content>
        {
          img01 ? <ContentImage source={{ uri: img01 }} /> : <></>
        }
        {/* 좋아요 */}
        <LikeBox>
          <LikeButton onPress={() => { handleLike() }}>
            {
              newIsLiked !== null
                ? (newIsLiked
                  ? <LikeIcon width={20} height={20} fill="#528cff" />
                  : <EmptyLikeIcon width={20} height={20} fill="#c0c0c0" />)
                : (isLiked
                  ? <LikeIcon width={20} height={20} fill="#528cff" />
                  : <EmptyLikeIcon width={20} height={20} fill="#c0c0c0" />)
            }
          </LikeButton>
          <LikeText style={
            newIsLiked !== null
              ? (newIsLiked ? { fontWeight: '600', color: '#528cff' } : {})
              :
              (isLiked ? { fontWeight: '600', color: '#528cff' } : {})
          }>
            {
              newLike !== null ? newLike : like
            }
          </LikeText>
        </LikeBox>
        {boardComment ?
          <CommentBox>
            <DivisionLine />
            <CommentProfile>
              <CommentProfileImage source={{ uri: boardComment.member.profileImg }} />
              <CommentProfileTextBox>
                <CommentProfileNickBox>
                  <CommentProfileNick>{boardComment.member.nick}</CommentProfileNick>
                  {member.role === 'C' ? <StarIcon width={15} height={15} fill={'#528cff'} /> : <></>}
                </CommentProfileNickBox>
                {/* 댓글 내용 */}
                <CommentContent>
                  {boardComment.comment}
                </CommentContent>
              </CommentProfileTextBox>
            </CommentProfile>

          </CommentBox>
          :
          <></>
        }
      </ContentBox>

    </Component >
  );
};

export { CommunityItem };