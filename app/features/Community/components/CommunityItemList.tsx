import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { CommunityItem } from './CommunityItem';
import { getData } from '../../../shared';
import { API_URL } from '@env';

// Props
interface ComponentProps {
  category: string;
  community: string;
};

const Component = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const example: CommunityItemListProps[] = [
  {
    id: 1,
    content: "안녕하세요~ 엔써~",
    createdAt: "2025-08-24T10:00:00.000000+00:00",
    img01: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
    member: {
      id: 4,
      nick: "LILY",
      profileImg: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
      role: "C",
    },
    boardComment: {
      id: 4,
      comment: "안녕하세요~~",
      member: {
        id: 3,
        nick: "홍길동",
        profileImg: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
        role: "A"
      }
    }
  },
  {
    id: 2,
    content: "이번 릴리딩은 ~",
    createdAt: "2025-08-24T10:00:00.000000+00:00",
    img01: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
    member: {
      id: 4,
      nick: "LILY",
      profileImg: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
      role: "C",
    },
    boardComment: {
      id: 4,
      comment: "안녕하세요~~",
      member: {
        id: 3,
        nick: "홍길동",
        profileImg: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
        role: "A"
      }
    }
  },
  {
    id: 3,
    content: "이번 릴리딩은 ~",
    createdAt: "2025-08-23T14:37:54.211646+00:00",
    img01: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
    member: {
      id: 4,
      nick: "LILY",
      profileImg: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
      role: "C",
    },
    boardComment: {
      id: 4,
      comment: "안녕하세요~~",
      member: {
        id: 3,
        nick: "설윤",
        profileImg: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
        role: "C"
      }
    }
  }
]

const CommunityItemList = ({ category, community }: ComponentProps) => {
  const [itemList, setItemList] = useState<CommunityItemListProps[]>(example);

  useEffect(() => {
    const fetchGraphQL = async () => {
      let boardName = ""
      if (category === '아티스트') {
        boardName = "C"
      } else {
        boardName = "A"
      }
      // role -> 아티스트 게시판 "C" / 팬 게시판 "A"
      const query = `
        query {
          boards(page: 1, community:"${community}", role:"${boardName}") {
            id
            content
            createdAt
            img01
            member {
              id
              name
              nick
              profileImg
              role
            }
            boardComment {
              id
              comment
              member {
                id
                name
                nick
                profileImg
                role
              }
            }
          }
        }
      `;
      try {
        const data = await getData(API_URL, query);
        console.log(data)
        if (data) {
          setItemList(data.boards)
        }
        // setItemList(example);
      } catch (error) {
        setItemList(example);
      }
    };

    fetchGraphQL();
  }, []);

  return (
    <Component>
      {
        itemList.map((v, i) => {
          return (
            <CommunityItem
              key={i}
              id={v.id}
              member={v.member}
              content={v.content}
              createdAt={v.createdAt}
              img01={v.img01}
              boardComment={v.boardComment}
            />
          )
        })
      }
    </Component>
  );
};

export { CommunityItemList };