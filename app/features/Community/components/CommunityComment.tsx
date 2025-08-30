import React, { useState } from 'react';
import styled from 'styled-components/native';
import SendIcon from '../../../../assets/icons/send.svg'
import { Alert, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { postData } from '../../../shared';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import { setRefresh } from '../../../../store/pageSlice';

// Props
interface ComponentProps {
  id: number;
};

const Component = styled.View`
  width: 100%;
  border-top-color: #e9e9e9;
  border-top-width: 1px;
  border-top-style: solid;
  background-color: #fff;
  padding: 10px 20px;
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

const CommentInput = styled.TextInput`
  width: 90%;
  border-radius: 5px;
  font-size: 18px;
  background-color: #f4f8ff;
  padding: 10px 10px;
`

const CommentSaveButton = styled(Pressable)`
  
`

const CommentIconBox = styled.View`
  border-radius: 20px;
  background-color: #f4f8ff;
  padding: 5px;
`

const CommunityComment = ({ id }: ComponentProps) => {

  const dispatch = useDispatch<AppDispatch>();
  const refresh = useSelector((state: RootState) => state.page.refresh);
  const [comment, setComment] = useState<string>("");

  const handleSave = async () => {
    if (!comment) {
      Alert.alert("댓글을 입력해 주세요.");
      return;
    }

    const token = await AsyncStorage.getItem('token');

    const mutation = `
      mutation {
        createComment(comment:"${comment}", boardId:${id}, token:"${token}"){
          ok
          error
        }
      }
    `
    try {
      const data = await postData(API_URL, mutation);
      console.log(data);

      if (data && data.createComment.ok) {
        dispatch(setRefresh(!refresh))
        setComment(""); // 입력 필드 초기화
      }

    } catch (err) {

    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <SafeAreaProvider>
      <SafeAreaView>
        <Component>
          <CommentInput placeholder='댓글을 입력해 주세요' value={comment} onChangeText={setComment} />
          <CommentSaveButton onPress={handleSave}>
            <CommentIconBox>
              <SendIcon width={25} height={25} stroke={'#e9e9e9'} />
            </CommentIconBox>
          </CommentSaveButton>
        </Component>
      </SafeAreaView>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
};

export { CommunityComment };