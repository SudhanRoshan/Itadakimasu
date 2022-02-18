import { View, Text, Image } from "react-native";
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
      <RestaurantImage image={image}></RestaurantImage>

      <RestaurantName name={name}></RestaurantName>

      <RestaurantDescription description={description}></RestaurantDescription>
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{ width: "100%", height: 180 }}
  ></Image>
);
const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 35,
      fontWeight: "bold",
      marginTop: 5,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 3,
      marginHorizontal: 15,
      fontWeight: "normal",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
