import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description:
      "A flat and expanded pasta feast, traditionally made in Italy with Parmigiano-Reggiano, Béchamel sauce, and ragù.",
    price: "$13.50",
    image:
      "https://www.oliviascuisine.com/wp-content/uploads/2019/03/lasagna-quattro-formaggi-IG.jpg",
  },
  {
    title: "Taco",
    description:
      "A crispy wheat tortilla that is folded or rolled and stuffed with a mixture",
    price: "$13.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOpJok_2bhewFmA-Axz4sdTx2IMaWJCKuRA&usqp=CAU",
  },

  {
    title: "Tandoori Chicken",
    description: "Roasted chicken marinated in yogurt and generously spiced.",
    price: "$26.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rYEEiCVFTpxhM2j-meAok4YB0quWNQrcaA&usqp=CAU",
  },
  {
    title: "Biryani",
    description:
      "Indian dish that includes rice and either lamb, chicken, fish, and vegetables along with spices like saffron in a rich gravy.",
    price: "$18.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWt6HZv6zsbs84TuTon0lEWR2oGTFrP4nfTA&usqp=CAU",
  },
  {
    title: "Shawarma",
    description:
      "Levantine Arab dish consisting of meat cut into thin slices, stacked in a cone-like shape, and roasted on a slowly-turning vertical rotisserie or spit.",
    price: "$9.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZeT7xoHAAhDYJmOqOPP26dR7QsA8SNYhuw&usqp=CAU",
  },
  {
    title: "Japanese Ramen",
    description:
      "Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg.",
    price: "$20.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXw9fHG9G3uMf9ls8m3u8Y43ClFaEpSwE20w&usqp=CAU",
  },
  {
    title: "Coffee",
    description: "What's life without Coffee",
    price: "$3.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4igjBQLPiZcHzpxzGoMxjiYpQSM363Z_uA&usqp=CAU",
  },
  {
    title: "Red Velvet",
    description:
      "a red, red-brown, crimson, or scarlet-colored chocolate layer cake, layered with ermine icing",
    price: "$30.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF184d9FyTgtnBYPI6aECWdn-7NhUUy5-hWw&usqp=CAU",
  },
  {
    title: "Apple Pie",
    description:
      "Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.",
    price: "$29.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAigShgnWrvDe9G97rI0Nh0xsHXyIg9BMjg&usqp=CAU",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flexDirection: "column", height: "100%" }}>
      <About route={route}></About>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          marginVertical: 20,
        }}
      ></View>
      <MenuItems restaurantName={route.params.name} foods={foods}></MenuItems>
      <ViewCart navigation={navigation}></ViewCart>
    </View>
  );
}
