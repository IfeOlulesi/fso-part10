import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: theme.colors.white,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  headerContainer: {
    flexDirection: "row",
  },
  headerTextContainer: {
    paddingLeft: 15,
    gap: 5,
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    marginTop: 5,
    color: theme.colors.textSecondary,
    flexWrap: "wrap",

  },
  languageTag: {
    backgroundColor: theme.colors.royalBlue,
    padding: 6,
    borderRadius: 4,
    marginTop: 5,
    color: theme.colors.white,
    maxWidth: "auto"
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  dataItem: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center"
  }
});

const RepositoryItem = ({ item }) => {
  const itemData = [
    {
      label: "Stars",
      value: item.stargazersCount,
    },
    {
      label: "Forks",
      value: item.forksCount,
    },
    {
      label: "Reviews",
      value: item.reviewCount,
    },
    {
      label: "Rating",
      value: item.ratingAverage,
    },
  ];

  return (
    <View style={styles.itemContainer}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.itemImage}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>{item.fullName}</Text>
          <Text style={styles.subTitle}>{item.description}</Text>
          <Text style={styles.languageTag}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        {itemData.map((data) => (
          <View key={data.value} style={styles.dataItem}>
            <Text style={styles.title}>{data.value}</Text>
            <Text>{data.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RepositoryItem;
