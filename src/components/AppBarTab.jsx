import { View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    color: "white",
    paddingRight: 10,
  },
});

const AppBarTab = ({ tabName, path }) => {
  return (
    <Link to={path}>
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
    </Link>
  );
};

export default AppBarTab;
