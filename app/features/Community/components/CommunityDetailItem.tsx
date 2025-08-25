import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { AppText, getData, RootStackParamList, timeAgo } from '../../../shared';
import TranslateIcon from '../../../../assets/icons/translate.svg'
import StarIcon from '../../../../assets/icons/star.svg'
import { Alert, Dimensions } from 'react-native';
import { API_URL } from '@env';

// Props
interface ComponentProps {
  id: number;
};

const Component = styled.ScrollView`
  margin-top: 70px;
  margin-bottom: 70px;
  padding: 0px 20px;
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
  border-radius: 7.5px;
`

const DivisionLine = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e3e3e3;
  margin-top: 15px;
`

const CommentBox = styled.View`
`

const CommentBoxTitle = styled(AppText)`
  font-weight: 600;
  font-size: 18px;
  padding: 20px 0px;
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
  gap: 5px;
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

const example: CommunityItemProps = {
  id: 1,
  content: "안녕하세요~ 엔써~",
  createdAt: "2025-08-24T10:00:00.000000+00:00",
  img01: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
  img02: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
  img03: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
  img04: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
  img05: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
  member: {
    id: 4,
    nick: "LILY",
    profileImg: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
    role: "C",
  },
  boardComments: [
    {
      id: 4,
      comment: "안녕하세요~~",
      member: {
        id: 3,
        nick: "홍길동",
        profileImg: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
        role: "A"
      }
    },
    {
      id: 5,
      comment: "안녕하세요~~!!!",
      member: {
        id: 3,
        nick: "설윤",
        profileImg: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
        role: "C"
      }
    }
  ]
}

const CommunityDetailItem = ({ id }: ComponentProps) => {

  const [item, setItem] = useState<CommunityItemProps>(example);

  useEffect(() => {
    const fetchGraphQL = async () => {
      // role -> 아티스트 게시판 "C" / 팬 게시판 "A"
      const query = `
      `;
      try {
        const data = await getData(API_URL, query);
        console.log(data)
        if (data) {
          setItem(data.boards)
        }
      } catch (error) {
        setItem(example);
      }
    };

    fetchGraphQL();
  }, []);

  return (
    <Component>
      {/* 프로필 박스 */}
      <ProfileBox>
        <Profile>
          <ProfileImage source={{ uri: item.member.profileImg }} />
          <ProfileTextBox>
            <ProfileNickBox>
              <ProfileNick>{item.member.nick}</ProfileNick>
              {item.member.role === 'C' ? <StarIcon width={15} height={15} fill={'#528cff'} /> : <></>}
            </ProfileNickBox>
            <ProfileDate>{timeAgo(item.createdAt)}</ProfileDate>
          </ProfileTextBox>
        </Profile>
        {/* 번역버튼 */}
        <Translate onPress={() => Alert.alert('준비중인 서비스입니다.')}>
          <TranslateIcon width={17.5} height={17.5} fill={'#c0c0c0'} />
        </Translate>
      </ProfileBox>
      <ContentBox>
        <Content>{item.content}</Content>
        {
          item.img01 ? <ContentImage source={{ uri: item.img01 }} /> : <></>
        }
        <CommentBoxTitle>댓글</CommentBoxTitle>
        {item.boardComments ?
          item.boardComments.map((v, i) => {
            return (
              <CommentBox key={i}>
                <CommentProfile>
                  <CommentProfileImage source={{ uri: v.member.profileImg }} />
                  <CommentProfileTextBox>
                    <CommentProfileNickBox>
                      <CommentProfileNick>{v.member.nick}</CommentProfileNick>
                      {v.member.role === 'C' ? <StarIcon width={15} height={15} fill={'#528cff'} /> : <></>}
                    </CommentProfileNickBox>
                    {/* 댓글 내용 */}
                    <CommentContent>
                      {v.comment}
                    </CommentContent>
                  </CommentProfileTextBox>
                </CommentProfile>
                {/* 구분선 */}
                <DivisionLine />
              </CommentBox>
            )
          })
          :
          <></>
        }
      </ContentBox>
    </Component >
  );
};

export { CommunityDetailItem };