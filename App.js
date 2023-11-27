import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Greet from './src/Greet';
import PressableText from "./src/PressableText";

export default function App() {
  console.log("Hello world")
  return (
    <View style={styles.container}>
      <Greet name={"Bob"} />
      <PressableText />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
