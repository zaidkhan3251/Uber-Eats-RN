import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState,useEffect } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ResturantItems from '../components/ResturantItems';
import { localRestaurants } from '../components/ResturantItems';
const YELP_API_KEY =
  "cb4T6D2FSrBCyR7LukXusUwbmj5tJH5Rj763rDz85MUvdsUdHETVlo3BdCnJphj5Rovduc0-hnXr_KgRoaSoWVVA50dJyV06b8uCuV74u5581AL7Ov8Ucz11wlnxYXYx";
export default function Home() {
  const [resturantData, setResturantData] = useState(localRestaurants);
  const getResturantsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=losAngeles"
  
  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`
    }};

    return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => setResturantData(json.businesses))
  }
  useEffect(() => {
    getResturantsFromYelp()
  
  }, []);
  
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems resturantData={resturantData} />
      </ScrollView>

    </SafeAreaView>
  );
}  
