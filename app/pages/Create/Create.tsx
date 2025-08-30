import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { AppText, BackBlackButton, postData, RootStackParamList, uploadToS3 } from '../../shared';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView } from 'react-native';
import ImageIcon from '../../../assets/icons/image.svg'
import CloseIcon from '../../../assets/icons/close.svg'
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { setRefresh } from '../../../store/pageSlice';
import { HomeStackParamList } from '../../shared/types/stack';

// Props
type CreateProps = {
  route: { params: { community: string } };
};

const Box = styled.View`
`;

const CreateHeader = styled.View`
  padding: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 1000;
  background-color: #fff;
`

const Title = styled(AppText)`
  font-weight: bold;
  font-size: 18px;
`

const SaveBox = styled.View`
  /* BackBlackButton 가로 크기 만큼 */
  /* width: 20px; */
`

const SaveButton = styled(Pressable)`
  
`

const SaveText = styled(AppText)`
  font-size: 15px;
  width: 40px;
  text-align: right;
  color: #528cff;
`

const CreateContentBox = styled.View`
  /* border: 1px solid; */
  margin-top: 60px;
`

const CreateContent = styled.TextInput.attrs({
  multiline: true,
  textAlignVertical: 'top', // Android에서 위에서부터 입력
  placeholderTextColor: '#999',
})`
  width: 100%;
  height: 100%;
  padding: 15px;
`

const CreateFooter = styled.View`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #f5f5f5;
  padding: 15px 20px;
`

const ImageBox = styled.View`
  position: absolute;
  left: 20px;
  bottom: 60px;
  gap: 10px;
  flex-direction: row;
`

const PreviewItem = styled.View`
  position: relative;
`

const DeleteButton = styled.View`
  position: absolute;
  top: -5.5px;
  right: -5.5px;
`

const DeleteImage = styled(Pressable)`
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  justify-content: center;
  align-items: center;
  border: 1px solid #f5f5f5;
`

const PreviewImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`

const ImageSelectButton = styled(Pressable)`
  
`

const Create = ({ route }: CreateProps) => {
  const { community } = route.params;

  const dispatch = useDispatch<AppDispatch>();
  const refresh = useSelector((state: RootState) => state.page.refresh);
  const homeNavigation = useNavigation<NativeStackNavigationProp<HomeStackParamList, 'Create'>>();

  const [imgList, setImgList] = useState<(string | null | undefined)[]>([]);
  const [img01, setImg01] = useState<string | null | undefined>(null);
  const [img02, setImg02] = useState<string | null | undefined>(null);
  const [img03, setImg03] = useState<string | null | undefined>(null);
  const [img04, setImg04] = useState<string | null | undefined>(null);
  const [img05, setImg05] = useState<string | null | undefined>(null);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setImgList([
      img01,
      img02,
      img03,
      img04,
      img05,
    ])
  }, [img01, img02, img03, img04, img05]);


  const handleSelectButton = async () => {
    const url = await uploadToS3();
    try {
      if (img05) {
        Alert.alert('이미지는 최대 5장 까지 업로드 가능합니다.')
        return;
      }
      if (!url) return;

      if (!img01) {
        setImg01(url);
      }
      else if (!img02) {
        setImg02(url);
      } else if (!img03) {
        setImg03(url);
      } else if (!img04) {
        setImg04(url);
      } else if (!img05) {
        setImg05(url);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleDeleteImage = (index: number) => {
    // 현재 이미지를 배열 형태로 모으기
    const images = [img01, img02, img03, img04, img05];

    // index 번째 이미지를 삭제
    images.splice(index, 1);

    // 남은 이미지를 앞으로 당기고 나머지는 null로 채우기
    const newImages = [...images, null, null, null, null].slice(0, 5);

    // 상태 갱신
    setImg01(newImages[0]);
    setImg02(newImages[1]);
    setImg03(newImages[2]);
    setImg04(newImages[3]);
    setImg05(newImages[4]);
  }

  const handleSave = async () => {
    if (!content) {
      Alert.alert('내용을 입력해 주세요.');
    }

    const token = await AsyncStorage.getItem('token');

    const fields: string[] = [
      `title:"${content}"`,
      `content:"${content}"`,
      `community:"${community}"`,
      `token:"${token}"`,
    ];

    if (img01) fields.push(`img01:"${img01}"`);
    if (img02) fields.push(`img02:"${img02}"`);
    if (img03) fields.push(`img03:"${img03}"`);
    if (img04) fields.push(`img04:"${img04}"`);
    if (img05) fields.push(`img05:"${img05}"`);

    const mutation = `
      mutation {
        createBoard(${fields.join(', ')}) {
          ok
          error
        }
      }
  `
    try {
      const data = await postData(API_URL, mutation);
      if (data && data.createBoard) {
        if (data.createBoard.ok) {
          homeNavigation.goBack();
          dispatch(setRefresh(!refresh))
          return;
        } else {
          Alert.alert('문제가 발생했습니다.');
          return;
        }
      }
    } catch (err) {
      console.log(err);
      Alert.alert('문제가 발생했습니다.');
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // iOS에서 header 높이만큼 offset
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box>
          <CreateHeader>
            <BackBlackButton />
            <Title>글쓰기</Title>
            <SaveBox>
              <SaveButton onPress={handleSave}>
                <SaveText>등록</SaveText>
              </SaveButton>
            </SaveBox>
          </CreateHeader>
          <CreateContentBox>
            <CreateContent placeholder='내용을 입력해 주세요.' value={content} onChangeText={setContent} />
          </CreateContentBox>
          <CreateFooter>
            <ImageBox>
              {imgList.map((v, i) => {
                return v ? (
                  <PreviewItem key={i}>
                    <PreviewImage source={{ uri: v }} resizeMode="cover" />
                    <DeleteButton>
                      <DeleteImage onPress={() => handleDeleteImage(i)}>
                        <CloseIcon width={10} height={10} />
                      </DeleteImage>
                    </DeleteButton>
                  </PreviewItem>
                ) : null;
              })}
            </ImageBox>
            <ImageSelectButton onPress={() => handleSelectButton()}>
              <ImageIcon width={20} height={20} />
            </ImageSelectButton>
          </CreateFooter>
        </Box >
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export { Create };