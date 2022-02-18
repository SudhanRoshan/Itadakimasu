import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/n/g/p102140-163851976061a9d3d04d72e.jpg?tr=tr:n-xlarge",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1744,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url: "https://hospitalitydesign.com/wp-content/uploads/IMG_16.png",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqrCgHhRgjKDu2G8f7Tvb7Y3EsQGw_UHGrg&usqp=CAU",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "Ramen Paradis",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGCKFrq6G37nRfE1Fz_5ponWlhR52mgcnvw&usqp=CAU",
    categories: ["Japanese", "Bar"],
    price: "$$",
    reviews: 7005,
    rating: 4.7,
  },
  {
    name: "Biryani Beach",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVx2bS5u8Y1T0vwXhPVrH1sSABqfecCUOsg&usqp=CAU",
    categories: ["South Indian", "Beach"],
    price: "$$$",
    reviews: 8905,
    rating: 4.4,
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return props.restaurantData !== undefined ? (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBootom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url}></RestaurantImage>
            <RestaurantInfo
              name={restaurant.name}
              rating={restaurant.rating}
            ></RestaurantInfo>
          </View>
        </TouchableOpacity>
      ))}
    </>
  ) : (
    <>
      <View style={styles.errorContainer}>
        <MaterialIcons name="location-off" style={styles.errorIcon} />
        <Text style={styles.errorStyleOne}>Invalid Location :(</Text>
        <Text style={styles.errorStyleTwo}>Search any other location.</Text>
      </View>
    </>
  );
}

const RestaurantImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image
            ? props.image
            : "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content8426.jpg",
        }}
        style={{ width: "100%", height: 180 }}
      ></Image>
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={25}
          color="white"
        ></MaterialCommunityIcons>
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = (props) => {
  const start = Math.floor(Math.random() * 30);
  const end = Math.floor(Math.random() * 60);
  let min = 0;
  let max = 0;
  if (end > start && start > 10 && end < 60) {
    min = start;
    max = end;
  } else {
    min = 30;
    max = 50;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>
          {min} - {max} mins
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    alignItems: "center",
  },
  errorIcon: {
    marginBottom: 0,
    marginTop: "33.30%",
    fontSize: 150,
    color: "black",
  },
  errorStyleOne: {
    marginTop: 0,
    fontSize: 30,
    fontWeight: "bold",
  },
  errorStyleTwo: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "normal",
  },
});
