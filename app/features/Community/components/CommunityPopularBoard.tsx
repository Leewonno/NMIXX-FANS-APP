import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { AppText, getData, timeAgo } from '../../../shared';
import { Pressable, StyleSheet } from 'react-native';
import { API_URL } from '@env';
import LikeIcon from '../../../../assets/icons/favorite_empty.svg'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../shared/types/stack';

// Props
interface ComponentProps {
  name: string;
};

const Component = styled.View`
  padding: 0px 15px;
`;

const ItemBox = styled.ScrollView`
  width: 100%;
`

const Title = styled(AppText)`
  
`

const Item = styled(Pressable)`
  width: 250px;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding: 15px;
`

const ItemInforBox = styled.View`
  justify-content: space-between;
  flex-direction: row;
`

const ItmeProfileBox = styled.View`
  flex-direction: row;
  /* align-items: center; */
  gap: 5px;
`

const ItemProfileImage = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #cbcbcb;
`

const ItemNick = styled(AppText)`
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 10px;
`

const ItemDate = styled(AppText)`
  color: #c7c7c7;
`

const ItemContent = styled(AppText).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  width: 100%;
  color: #a2a2a2;
  margin-bottom: 10px;
`;

const ItemLikeBox = styled.View`
  flex-direction: row;
  gap: 5px;
`

const LikeCount = styled(AppText)`
  font-size : 16px;
`

type NavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'CommunityDetail'
>;


const CommunityPopularBoard = ({ name }: ComponentProps) => {
  const homeNavigation = useNavigation<NavigationProp>();
  const [itemList, setItemList] = useState<CommunityItemPopularListProps[]>([]);

  const fetchGraphQL = async () => {

    const query = `
      query {
        popularBoards(community:"${name}") {
          id
          like
          content
          createdAt
          member {
            id
            nick
            profileImg
            role
          }
        }
      }
    `;

    try {
      const data = await getData(API_URL, query);
      if (data) {
        setItemList(data.popularBoards);
        return;
      }
      setItemList([]);
    } catch (error) {
      setItemList([]);
    }
  };

  useEffect(() => {
    fetchGraphQL();
  }, [])

  const handlePressItem = (id: number) => {
    homeNavigation.navigate('CommunityDetail', { id: id })
  }

  return (
    <Component>
      <Title style={style.text}>어제의 인기글</Title>
      <ItemBox
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      >
        {
          itemList.map((v, i) => {
            return (
              <Item key={i} onPress={()=>handlePressItem(v.id)}>
                <ItemInforBox>
                  <ItmeProfileBox>
                    <ItemProfileImage source={{ uri: v.member.profileImg }} />
                    <ItemNick>{v.member.nick}</ItemNick>
                  </ItmeProfileBox>
                  <ItemDate>{timeAgo(v.createdAt)}</ItemDate>
                </ItemInforBox>
                <ItemContent>{v.content} 문자열 길이 테스트용 문자열 길이 테스트용</ItemContent>
                <ItemLikeBox>
                  <LikeIcon width={20} height={20} />
                  <LikeCount>{v.like}</LikeCount>
                </ItemLikeBox>
              </Item>
            )
          })
        }
      </ItemBox>
    </Component>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingTop: 30,
    paddingBottom: 20,
    fontWeight: 'bold',
  }
})


export { CommunityPopularBoard };