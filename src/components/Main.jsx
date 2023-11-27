import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  titleText: {
    fontSize: 23,
    fontWeight: "bold",
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;