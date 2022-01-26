import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
export const localRestaurants = [
    {
        name: " Girl & the Goat",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Bicyclette Bistro",
        image_url:
            "https://www.barhygge.com/wp-content/uploads/2020/02/IMG-4865.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Brentwood. 11648 San Vicente Blvd",
        image_url:
            "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=",
        categories: ["Bavel", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];
export default function ResturantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {props.resturantData.map((restaurants, index) => (
                <View key={index} style={{
                    backgroundColor: "white", marginTop: 10,
                    padding: 15
                }}>
                    <ResturantImage image={restaurants.image_url} />
                    <ResturantInfo name={restaurants.name} rating={restaurants.rating} />
                </View>))}
        </TouchableOpacity>
    );
}
const ResturantImage = (props) => (
    <>
        <Image source={{ uri: props.image }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{
            position: "absolute", right: 20,
            top: 20
        }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
)
const ResturantInfo = (props) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name
            }</Text>
            <Text style={{ fontSize: 13, color: "grey" }}>30-45 · min </Text>
        </View>
        <View style={{
            backgroundColor: "#eee", height: 30, width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15
        }}>
            <Text >{props.rating
            }</Text></View>
    </View>
)     