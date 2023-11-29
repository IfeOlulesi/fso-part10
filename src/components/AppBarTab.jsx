import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    color: "white",
    paddingRight: 10,
  },
});

const AppBarTab = ({ tabName, onPressHandler }) => {
  return (
    <Pressable onPress={onPressHandler}>
      <View>
        <Text
          style={styles.tab}
          color={"white"}
          fontSize={"heading"}
          fontWeight={"bold"}
        >
          {tabName}
        </Text>
      </View>
    </Pressable>
  );
};

export default AppBarTab;
