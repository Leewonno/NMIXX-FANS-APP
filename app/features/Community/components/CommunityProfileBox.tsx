import { Pressable } from "react-native"
import styled from "styled-components/native"
import lily from "../../../../assets/imgs/lily.webp"

type BoxProps = {
}

const Box = styled.View`
  border-radius: 50%;
  /* border: 1px solid #ececec; */
  width: 25px;
  height: 25px;
`

const ProfileButton = styled(Pressable)`
  width: 100%;
`

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

const CommunityProfileBox = ({ }: BoxProps) => {

  return (
    <Box>
      <ProfileButton>
        <ProfileImage source={lily}/>
      </ProfileButton>
    </Box>
  )
}

export { CommunityProfileBox }