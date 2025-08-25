import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import SendIcon from '../../../../assets/icons/send.svg'
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

// Props
interface ComponentProps {
  // id: number;
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

const CommentIconBox = styled.View`
  border-radius: 20px;
  background-color: #f4f8ff;
  padding: 5px;
`

const CommunityComment = ({ }: ComponentProps) => {
  const insets = useSafeAreaInsets();
  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <SafeAreaProvider>
        <SafeAreaView>
          <Component>
            <CommentInput placeholder='댓글을 입력해 주세요' />
            <CommentIconBox>
              <SendIcon width={25} height={25} stroke={'#e9e9e9'} />
            </CommentIconBox>
          </Component>
        </SafeAreaView>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
};

export { CommunityComment };