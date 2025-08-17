import React from 'react';
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
import { Linking, Pressable } from 'react-native';

// Props
interface CommunityImageBoxProps {
  name: string;
};

const Box = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
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
  bottom: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 25px;
`

type AppType = 'yt' | 'is' | 'fa';

const CommunityImageBox = ({ name }: CommunityImageBoxProps) => {

  const handlePress = async (url: string, type: AppType) => {
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
    <Box>
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