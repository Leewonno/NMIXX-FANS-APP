import { Pressable } from "react-native"
import styled from "styled-components/native"
import lily from "../../../../assets/imgs/lily.webp"

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
`

const CommunityProfileBox = ({ }: BoxProps) => {

  return (
    <Box>
      {/* 버튼 누르면 프로필 창으로 이동 시키면 됨 */}
      <ProfileButton>
        <ProfileImage source={lily}/>
      </ProfileButton>
    </Box>
  )
}

export { CommunityProfileBox }