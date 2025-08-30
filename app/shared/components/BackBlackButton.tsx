import { Pressable } from "react-native"
import LeftIcon from '../../../assets/icons/left.svg'
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { HomeStackParamList } from "../types/stack"

type ButtonProps = {
}

const CustomBackButton = styled(Pressable)`
  width: 40px;
`

const BackBlackButton = ({ }: ButtonProps) => {

  const homeNavigation = useNavigation<NativeStackNavigationProp<HomeStackParamList, 'CommunityDetail'>>();

  const handlePressBack = () => {
    if (homeNavigation?.canGoBack()) {
      homeNavigation.goBack();
    }
  }

  return (
    <CustomBackButton onPress={handlePressBack}>
      <LeftIcon width={20} height={20} strokeWidth={1} fill={"#000"} />
    </CustomBackButton>
  )
}

export { BackBlackButton }