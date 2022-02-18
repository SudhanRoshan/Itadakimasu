import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";

const items = [
  { image: require("../../assets/images/shopping-bag.png"), text: "Pick-up" },
  { image: require("../../assets/images/soft-drink.png"), text: "Soft Drinks" },
  { image: require("../../assets/images/bread.png"), text: "Bakery Items" },
  { image: require("../../assets/images/fast-food.png"), text: "Fast Foods" },
  { image: require("../../assets/images/deals.png"), text: "Deals" },
  { image: require("../../assets/images/coffee.png"), text: "Coffee & Tea" },
  { image: require("../../assets/images/desserts.png"), text: "Desserts" },
];

export default function Categories() {
  return (
    <View style={styles.categoriesContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((items, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Image source={items.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{items.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    marginTop: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingLeft: 20,
  },

  categoryContainer: {
    alignItems: "center",
    marginRight: 30,
  },

  categoryImage: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },

  categoryText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#212D40",
  },
});
