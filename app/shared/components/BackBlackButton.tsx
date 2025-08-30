import { Pressable } from "react-native"
import LeftIcon from '../../../assets/icons/left.svg'
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types"

type ButtonProps = {
}

const CustomBackButton = styled(Pressable)`
  width: 40px;
`

const BackBlackButton = ({ }: ButtonProps) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'CommunityDetail'>>();

  const handlePressBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <CustomBackButton onPress={handlePressBack}>
      <LeftIcon width={20} height={20} strokeWidth={1} stroke={"#000"} />
    </CustomBackButton>
  )
}

export { BackBlackButton }