import { Pressable } from "react-native"
import LeftIcon from '../../../assets/icons/left.svg'
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"

type BackButtonProps = {
}

const CustomBackButton = styled(Pressable)`
`

const BackButton = ({ }: BackButtonProps) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Community'>>();
  const scrolled = useSelector((state: RootState) => state.scroll.scrolled);

  const handlePressBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <CustomBackButton onPress={handlePressBack}>
      <LeftIcon width={20} height={20} strokeWidth={1} stroke={scrolled ? "#000" : "#fff"} />
    </CustomBackButton>
  )
}

export { BackButton }