import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../theme";
import { abbreviateNumber } from "js-abbreviation-number";

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
    width: "90%",
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    marginTop: 5,
    color: theme.colors.textSecondary,
    flexWrap: "wrap",
    flex: 1,
  },
  languageTag: {
    backgroundColor: theme.colors.royalBlue,
    padding: 4,
    borderRadius: 4,
    marginTop: 8,
    color: theme.colors.white,
    alignSelf: "flex-start"
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  dataItem: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
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
          <View style={{display: "flex", flexDirection:'row'}}>
            <Text style={styles.subTitle}>{item.description}</Text>
          </View>
          <Text style={styles.languageTag}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        {itemData.map((data) => (
          <View key={data.value} style={styles.dataItem}>
            <Text style={styles.title}>{abbreviateNumber(data.value, 1)}</Text>
            <Text>{data.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RepositoryItem;
