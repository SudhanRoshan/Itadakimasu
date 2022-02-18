import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter,lettuce,tomato and sauce.",
        price: "$13.50",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0RvK507eqxFci_ohlwSeSlTOPaKeweEo0g&usqp=CAU",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toString();

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.orderCompletedContainer}>
        <View style={styles.orderCompletedSubContainer}>
          <LottieView
            style={styles.checkMarkAnimation}
            source={require("../assets/animations/og-check-mark.json")}
            autoPlay
            speed={2}
            loop={false}
          ></LottieView>
          <Text style={styles.orderConfirmation}>
            Your order at {restaurantName} has been placed for ${totalUSD}
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={true}
          >
            <MenuItems foods={lastOrder.items} hideCheckbox={true}></MenuItems>
            <LottieView
              style={styles.cookingAnimation}
              source={require("../assets/animations/og-cooking.json")}
              autoPlay
              speed={1.5}
              loop={true}
            ></LottieView>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  orderCompletedContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  orderCompletedSubContainer: {
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: "center",
    height: "100%",
  },
  checkMarkAnimation: {
    height: 200,
    alignSelf: "center",
  },
  orderConfirmation: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cookingAnimation: {
    height: 200,
    alignSelf: "center",
  },
});
