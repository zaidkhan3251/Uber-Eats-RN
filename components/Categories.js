import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import Pickup from "../assets/images/shopping-bag.png"
import Softdrink from "../assets/images/soft-drink.png"
import Bread from "../assets/images/bread.png"
import Fastfood from "../assets/images/fast-food.png"
import Deals from "../assets/images/deals.png"
import Coffee from "../assets/images/coffee.png"
import Desserts from "../assets/images/desserts.png"
const items = [
  {
    image: Pickup,
    text: "Pick-up"
  },
  {
    image: Softdrink,
    text: "Soft Drinks"
  },
  {
    image: Bread,
    text: "Bakery Items"
  },
  {
    image: Fastfood,
    text: "Fast Food"
  },
  {
    image: Deals,
    text: "Deals"
  },
  {
    image: Coffee,
    text: "Coffee & Tea"
  },
  {
    image: Desserts,
    text: "Desserts"
  },
]

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item,index)=>(<View style={{ alignItems: "center", marginRight: 30 }}>
        <Image source={item.image}
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain"
          }}
        />
        <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
      </View>))}
      
    </ScrollView>
  );
}
