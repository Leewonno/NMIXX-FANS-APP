import { useState } from "react";
import { Button, Text, View } from "react-native";

type CatProps = {
  name: string;
}


// State 실습
const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState<boolean>(true);
  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"} !
      </Text>
      <Button
        onPress={() => {
          setIsHungry(!isHungry);
        }}
        // disabled={!isHungry}
        title={isHungry ? 'Give me some food, please!' : 'Thank You!'}
      />
    </View>
  )
}

const Edit2 = () => {
  return (
    <View>
      <Cat name="Lee" />
      <Cat name="Han" />
    </View>
  )
}

export default Edit2;