import { View, StyleSheet, Alert } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 100,
    backgroundColor: theme.colors.royalBlue,
  },
  tabsContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 20,
    gap: 15,
  },
});

const AppBar = () => {
  const tabs = ["Repositories"];

  function handleTabPress(tabName) {
    Alert.alert(`You pressed ${tabName}`)
  }
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <AppBarTab onPressHandler={() => handleTabPress(tab)} key={tab} tabName={tab} />
        ))}
      </View>
    </View>
  );
};

export default AppBar;
