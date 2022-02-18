import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import BottomTabs from "../components/home/BottomTabs";
import { StatusBar } from "react-native";

const YELP_API_KEY =
  "xNQytcKuzRUNFGSUWOZUuWpv9PAj20bdH6Pm1DgXRjVqsb7WFN1fCmUycX9IE0Epu1tsw_uPuOUfot-BpCo-LGU9ybIioiJrUuX3L88CK1IOW6DrDiYinMgCkYnxYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${
      city ? city : "San Francisco"
    }`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((businesses) =>
            businesses.transactions.includes(activeTab.toLocaleLowerCase())
          )
        )
      )
      .catch((err) => console.log("Invalid Location :("));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ marginTop: StatusBar.currentHeight }}></View>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></HeaderTabs>
        <SearchBar
          city={city}
          onCityChange={(newCity) => setCity(newCity)}
          // onCitySubmit={() => {}}
        ></SearchBar>
      </View>
      <ScrollView showVerticalScrollIndicator={false}>
        <Categories></Categories>
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        ></RestaurantItems>
      </ScrollView>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      ></View>
      <BottomTabs></BottomTabs>
    </SafeAreaView>
  );
}
