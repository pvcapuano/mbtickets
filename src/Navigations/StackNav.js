import React from "react";
import Home from "../Screens/Home";
import SingleProduct from "../Screens/SingleProduct";
import Shipping from "../Screens/Shipping";
import Payment from "../Screens/Payment";
import PlaceOrder from "../Screens/PlaceOrder";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Single" component={SingleProduct} />
      <Stack.Screen name="Shipping" component={Shipping} />
      <Stack.Screen name="Checkout" component={Payment} />
      <Stack.Screen name="Placeorder" component={PlaceOrder} />
    </Stack.Navigator>
  );
};

export default StackNav;
