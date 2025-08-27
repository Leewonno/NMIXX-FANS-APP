import { Pressable } from "react-native"
import styled from "styled-components/native"
import profile from "../../../../assets/imgs/profile.png"
import { useSelector } from "react-redux"
import { RootState } from "../../../../store"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../shared"

type BoxProps = {
}

const Box = styled.View`
  border-radius: 12.5px;
  width: 25px;
  height: 25px;
`

const ProfileButton = styled(Pressable)`
  width: 100%;
`

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12.5px;
  object-fit: cover;
  border: 1px solid #f1f1f1;
`

const CommunityProfileBox = ({ }: BoxProps) => {

  const profileImg = useSelector((state: RootState) => state.auth.profileImg);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Community'>>();

  const handlePress = ()=>{
    navigation.navigate('Profile')
  }

  return (
    <Box>
      {/* 버튼 누르면 프로필 창으로 이동 시키면 됨 */}
      <ProfileButton onPress={handlePress}>
        {
          profileImg ?
            <ProfileImage source={{ uri: profileImg }} />
            :
            <ProfileImage source={profile} />
        }
      </ProfileButton>
    </Box>
  )
}

export { CommunityProfileBox }