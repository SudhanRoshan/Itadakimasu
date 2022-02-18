import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function BottomTabs() {
  return (
    <View style={styles.bottomTabsContainer}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-basket" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={props.icon} size={22} style={styles.bottomIcons} />
      <Text style={styles.bottomTabsText}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  bottomTabsContainer: {
    flexDirection: "row",
    margin: 7,
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  bottomTabsText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  bottomIcons: {
    marginBottom: 3,
    alignSelf: "center",
    color: "#212D40",
  },
});
