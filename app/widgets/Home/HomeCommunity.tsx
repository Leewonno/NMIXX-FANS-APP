import React from 'react';
import styled from 'styled-components/native';
import { HomeCommunityButton } from '../../features';

// img import
import lily from '../../../assets/imgs/lily.webp';
import haewon from '../../../assets/imgs/haewon.webp';
import sullyoon from '../../../assets/imgs/sullyoon.jpg';
import bae from '../../../assets/imgs/bae.webp';
import jiwoo from '../../../assets/imgs/jiwoo.webp';
import kyujin from '../../../assets/imgs/kyujin.webp';
import { FlatList, ImageSourcePropType } from 'react-native';

// Props
interface HomeCommunityProps {
};

interface DataType {
  id: string;
  img: ImageSourcePropType;
}

const Box = styled(FlatList<DataType>)`
  height: 100%;
`;

const data: DataType[] = [
  {
    id: "LILY",
    img: lily
  },
  {
    id: "HAEWON",
    img: haewon
  },
  {
    id: "SULLYOON",
    img: sullyoon
  },
  {
    id: "BAE",
    img: bae
  },
  {
    id: "JIWOO",
    img: jiwoo
  },
  {
    id: "KYUJIN",
    img: kyujin
  },

]

const HomeCommunity = ({ }: HomeCommunityProps) => {

  return (
    <Box data={data}
      renderItem={({ item }: { item: DataType }) => (
        <HomeCommunityButton name={item.id} img={item.img} />
      )}
      numColumns={2}
      keyExtractor={(item: DataType) => item.id}
      columnWrapperStyle={{ gap: 3 }} // 가로 간격
      contentContainerStyle={{ gap: 3 }} // 세로 간격
    />
  );
};

export { HomeCommunity };