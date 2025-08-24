import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import lily from '../../../../assets/imgs/lily.webp';
import haewon from '../../../../assets/imgs/haewon.webp';
import sullyoon from '../../../../assets/imgs/sullyoon.jpg';
import bae from '../../../../assets/imgs/bae.webp';
import jiwoo from '../../../../assets/imgs/jiwoo.webp';
import kyujin from '../../../../assets/imgs/kyujin.webp';
import YouTubeIcon from '../../../../assets/icons/youtube.svg'
import InstagramIcon from '../../../../assets/icons/instagram.svg'
import FacebookIcon from '../../../../assets/icons/facebook.svg'
import { Dimensions, Linking, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

// Props
interface BoxProps {
  name: string;
};

const Box = styled.View`
  width: 100%;
  position: relative;
  margin-bottom: -50px;
  z-index: 9999;
`;

const ImageBox = styled.View`
  width: 100%;
  aspect-ratio: 1;
`

const CommunityImage = styled.Image`
  width: 100%;
  height: 100%;
`

const LinkBox = styled.View`
  position: absolute;
  bottom: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 25px;
`

type AppType = 'yt' | 'is' | 'fa';

const CommunityImageBox = ({ name }: BoxProps) => {

  const y: number = useSelector((state: RootState) => state.scroll.y);
  const [opacity, setOpacity] = useState<number>(1);

  // 기기 가로 길이
  const screenWidth = Dimensions.get('window').width;

  // 첫 렌더링에는 배경색 초기화
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 처음 렌더링일 때는 실행하지 않고 종료
    }

    setOpacity(Math.max(0, Math.min(1, 1 - y / screenWidth)));
  }, [y])

  const handlePress = async (url: string, type: AppType) => {
    console.log("클릭")
    let appUrl = `${url}`;
    let webUrl = `${url}`;

    if (type === 'yt') {
      appUrl = `youtube://${url}`;
      webUrl = `https://${url}`;
    } else if (type === 'fa') {
      appUrl = `fb://page/${url}`;
      webUrl = `https://www.facebook.com/${url}`;
    } else if (type === 'is') {
      appUrl = `instagram://user?username=${url}`;
      webUrl = `https://www.instagram.com/${url}`;
    }

    const supported = await Linking.canOpenURL(appUrl);
    if (supported) {
      // 유튜브 앱으로 연결
      await Linking.openURL(appUrl);
    } else {
      // 웹 브라우저로 연결
      await Linking.openURL(webUrl);
    }
  };

  return (
    <Box style={{ opacity: opacity }}>
      <ImageBox>
        <CommunityImage source={
          name === 'LILY' ? lily :
            name === 'HAEWON' ? haewon :
              name === 'SULLYOON' ? sullyoon :
                name === 'BAE' ? bae :
                  name === 'JIWOO' ? jiwoo :
                    name === 'KYUJIN' ? kyujin :
                      kyujin} />
      </ImageBox>
      <LinkBox>
        <Pressable onPress={() => handlePress("www.youtube.com/@NMIXXOfficial", "yt")}>
          <YouTubeIcon width={25} height={25} fill={'#fff'} />
        </Pressable>
        <Pressable onPress={() => handlePress("nmixx_official", "is")}>
          <InstagramIcon width={25} height={25} fill={'#fff'} />
        </Pressable>
        <Pressable onPress={() => handlePress("NMIXXOfficial", 'fa')}>
          <FacebookIcon width={25} height={25} fill={'#fff'} />
        </Pressable>
      </LinkBox>
    </Box>
  );
};

export { CommunityImageBox };