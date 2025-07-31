// Handling Text Input

import { useState } from "react"
import { Text, TextInput, View } from "react-native";

const Edit3 = () => {
  const [text, setText] = useState<string>("");
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40, padding: 5 }}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 30 }}>
        {
          text.split(' ').map((word) => { return word && '🍕' }).join(' ')
        }
      </Text>
    </View>
  )
}

export default Edit3