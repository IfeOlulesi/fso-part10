import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

import RepositoryList from "./components/RepositoryList";
import FancyTextDemo from "./components/FancyText";
import Text from "./components/Text";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 13,
    padding: 20,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="heading">
        Rate Repository Application
      </Text>
      <RepositoryList />
      <FancyTextDemo />
    </View>
  );
};

export default Main;
