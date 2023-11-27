import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  }
})

const RepositoryItem = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>Full Name: {item.fullName}</Text>
    <Text>Description: {item.description}</Text>
    <Text>Language: {item.language}</Text>
    <Text>Forks Count: {item.forksCount}</Text>
    <Text>Stargazers Count: {item.stargazersCount}</Text>
    <Text>Avg. Rating: {item.ratingAverage}</Text>
    <Text>Reviews: {item.reviewCount}</Text>
  </View>
);

export default RepositoryItem;