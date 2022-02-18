import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toString();

  const addOrderToFireBase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("OrderCompleted");
        }, 4500);
      });
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items?.map((item, index) => (
              <OrderItem key={index} item={item}></OrderItem>
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>${totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.checkoutButton}
                onPress={() => {
                  addOrderToFireBase();
                  setModalVisible(false);
                }}
              >
                <Text style={styles.buttonText}>Checkout</Text>
                <Text style={styles.totalUSD}>${total ? totalUSD : ""}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.viewCartContainer}>
          <View style={styles.viewCartSubContainer}>
            <TouchableOpacity
              style={styles.viewCartButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.viewCartText}>View Cart</Text>
              <View style={styles.emptySpace}></View>
              <Text style={styles.viewCartButtonPrice}>${totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View style={styles.loaderContainer}>
          <LottieView
            style={styles.loaderAnimation}
            source={require("../../assets/animations/og-loading.json")}
            autoPlay
            speed={2}
          ></LottieView>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subtotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  totalUSD: {
    position: "absolute",
    color: "white",
    right: 20,
    fontSize: 15,
    top: 17,
  },
  viewCartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    zIndex: 999,
  },
  viewCartSubContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  viewCartButton: {
    marginTop: 20,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  viewCartText: {
    color: "white",
    fontSize: 20,
  },
  emptySpace: {
    width: "25%",
  },
  viewCartButtonPrice: {
    color: "white",
    fontSize: 18,
  },
  loaderContainer: {
    backgroundColor: "white",
    position: "absolute",
    opacity: 0.9,
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  loaderAnimation: {
    height: 250,
    top: "30%",
  },
  loadingText: {
    top: "22.5%",
    fontWeight: "bold",
  },
});
