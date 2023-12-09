import { View, StyleSheet } from "react-native";
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
  const tabs = [
    {name: "Repositories", path: '/'},
    {name: "Sign In", path: '/sign-in'},
  ];

  
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <AppBarTab path={tab.path} key={tab.name} tabName={tab.name} />
        ))}
      </View>
    </View>
  );
};

export default AppBar;
