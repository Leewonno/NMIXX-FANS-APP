import React, { useState } from 'react';
import styled from 'styled-components/native';
import { CommunityItem } from './CommunityItem';

// Props
interface ComponentProps {
  category: string;
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
    nick: "LILY",
    profile_img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
    content: "안녕하세요~ 엔써~",
    created_date: "1일전",
    img_01: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
  },
  {
    id: 2,
    nick: "LILY",
    profile_img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
    content: "이번 릴리딩은 ~",
    created_date: "2일전",
    img_01: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
  },
  {
    id: 3,
    nick: "LILY",
    profile_img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
    content: "이번 릴리딩은 ~",
    created_date: "2일전",
    img_01: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_GhpERv8NJEQbu4xwbCIZ9rRgIDAB7_dgcAe9zsmAaXWM6JmXtISUXzCBtmq5XibD_qSN0pZn1IBfkyr6042cmg",
  }
]

const CommunityItemList = ({ category }: ComponentProps) => {
  const [itemList, setItemList] = useState<CommunityItemListProps[]>(example);

  return (
    <Component>
      {
        itemList.map((v, i) => {
          return (
            <CommunityItem
              key={i}
              id={v.id}
              nick={v.nick}
              profile_img={v.profile_img}
              content={v.content}
              created_date={v.created_date}
              img_01={v.img_01}
            />
          )
        })
      }
    </Component>
  );
};

export { CommunityItemList };