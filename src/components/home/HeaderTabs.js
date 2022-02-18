import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function HeaderTabs(props) {
  return (
    <View style={styles.headerContainer}>
      <HeaderButton
        text="Delivery"
        btnColor="#212D40"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      ></HeaderButton>
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="#212D40"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      ></HeaderButton>
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "#212D40" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "#212D40",
        fontSize: 15,
        fontWeight: "bold",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
