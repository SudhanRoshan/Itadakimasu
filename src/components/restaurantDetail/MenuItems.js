import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

export default function MenuItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, restaurantName: restaurantName, checkboxValue },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemsContainer}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            )}

            <FoodInfo food={food} />

            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <View style={styles.bottomDivider} />
        </View>
      ))}
      <View style={styles.emptySpace} />
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={styles.foodInfoContainer}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text style={styles.foodPrice}>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "bold",
  },
  bottomDivider: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    marginHorizontal: 20,
  },
  emptySpace: {
    height: 120,
  },
  foodInfoContainer: {
    width: 240,
    justifyContent: "space-evenly",
  },
  foodPrice: {
    fontWeight: "bold",
    marginTop: 10,
  },
});
