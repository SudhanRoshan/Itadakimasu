import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function OrderItem({ item }) {
  const { title, price } = item;
  return (
    <View style={styles.orderItemsContainer}>
      <Text style={styles.orderItem}>{title}</Text>
      <Text style={styles.orderItemPrice}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  orderItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  orderItem: {
    fontSize: 16,
  },
  orderItemPrice: {
    opacity: 0.7,
    fontSize: 16,
  },
});
