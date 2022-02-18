import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 7,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home"></Icon>
      <Icon icon="search" text="Browse"></Icon>
      <Icon icon="shopping-basket" text="Grocery"></Icon>
      <Icon icon="receipt" text="Orders"></Icon>
      <Icon icon="user" text="Account"></Icon>
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={22}
        style={{ marginBottom: 3, alignSelf: "center" }}
      ></FontAwesome5>
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
