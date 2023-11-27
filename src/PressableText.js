import { Text, Pressable, Alert } from "react-native";

const PressableText = () => {
  function handleOnPress() {
    Alert.alert("You just pressed the text!!!")
  }

  return (
    <Pressable onPress={handleOnPress}>
      <Text> Press me!!! </Text>
    </Pressable>
  )
}

export default PressableText;