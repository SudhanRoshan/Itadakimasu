import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function SearchBar({ city, onCityChange }) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainerStyle}>
        <MaterialIcons
          name="location-pin"
          color="#212D40"
          style={styles.locationIconStyle}
        />
        <TextInput
          autofocus={true}
          placeholder="Search"
          selectionColor={"black"}
          style={styles.textInputStyle}
          value={city}
          onChangeText={onCityChange}
        />
        <TouchableOpacity>
          <MaterialIcons
            name="location-searching"
            style={styles.targetIconStyle}
            color="#212D40"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 10,
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    backgroundColor: "white",
  },

  inputContainerStyle: {
    marginTop: 3,
    backgroundColor: "#eee",
    height: 45,
    flexDirection: "row",
    width: "100%",
    borderRadius: 30,
  },

  locationIconStyle: {
    fontSize: 30,
    paddingLeft: 10,
    paddingTop: 7,
    marginRight: 5,
  },

  textInputStyle: {
    width: "77%",
  },

  targetIconStyle: {
    fontSize: 30,
    marginTop: 5,
    marginLeft: 5,
    paddingTop: 2.5,
  },
});
