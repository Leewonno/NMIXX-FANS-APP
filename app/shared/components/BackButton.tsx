import { Pressable } from "react-native"
import LeftIcon from '../../../assets/icons/left.svg'
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { useEffect, useRef } from "react"
import { HomeStackParamList } from "../types/stack"

type BackButtonProps = {
}

const CustomBackButton = styled(Pressable)`
`

const BackButton = ({ }: BackButtonProps) => {

  const homeNavigation = useNavigation<NativeStackNavigationProp<HomeStackParamList, 'Community'>>();
  const scrolled = useSelector((state: RootState) => state.scroll.scrolled);
  const y: number = useSelector((state: RootState) => state.scroll.y);
  
  // 첫 렌더링에는 배경색 초기화
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 처음 렌더링일 때는 실행하지 않고 종료
    }
  }, [y]);

  const handlePressBack = () => {
    if (homeNavigation?.canGoBack()) {
      homeNavigation.goBack();
    }
  }

  return (
    <CustomBackButton onPress={handlePressBack}>
      <LeftIcon width={20} height={20} strokeWidth={1} fill={scrolled && !isFirstRender.current ? "#000" : "#fff"} />
    </CustomBackButton>
  )
}

export { BackButton }