import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join("  •  ");

  const description = `${formattedCategories} ${
    price ? "  •  " + price : ""
  }   •  🎫   •  ${rating}🌟 (${reviews}+) `;
  return (
    <View>
      <RestaurantImage image={image} />

      <RestaurantName name={name} />

      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={styles.restaurantImage} />
);
const RestaurantName = (props) => (
  <Text style={styles.restaurantName}>{props.name}</Text>
);

const RestaurantDescription = (props) => (
  <Text style={styles.restaurantDescription}>{props.description}</Text>
);

const styles = StyleSheet.create({
  restaurantImage: {
    width: "100%",
    height: 180,
  },
  restaurantName: {
    color: "#212D40",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 5,
    marginHorizontal: 15,
  },
  restaurantDescription: {
    marginTop: 3,
    marginHorizontal: 15,
    fontWeight: "normal",
    fontSize: 15.5,
  },
});
