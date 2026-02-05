import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>

       <Tabs.Screen name="home" options={{ title: "Home", 
      tabBarLabelStyle: {color: "black",}, tabBarIcon: ({ size }) => (
      <FontAwesome name="home" size={size} color="black" />),}}/>

     
       <Tabs.Screen name="orders" options={{ title: "orders", 
      tabBarLabelStyle: {color: "black",}, tabBarIcon: ({ size }) => (
      <FontAwesome name="shopping-bag" size={size} color="black" />),}}/>

     
       <Tabs.Screen name="Addproduct" options={{ title: "Addproduct", 
      tabBarLabelStyle: {color: "black",}, tabBarIcon: ({ size }) => (
      <FontAwesome name="plus-square" size={size} color="black" />),}}/>

      
       <Tabs.Screen name="ProductList" options={{ title: "ProductList", 
      tabBarLabelStyle: {color: "black",}, tabBarIcon: ({ size }) => (
      <FontAwesome name="list-alt" size={size} color="black" />),}}/>

     

      <Tabs.Screen name="Update" options={{ title: "Update", 
      tabBarLabelStyle: {color: "black",}, tabBarIcon: ({ size }) => (
      <FontAwesome name="edit" size={size} color="black" />),}}/>


       <Tabs.Screen
        name="index"
        options={{
          href: null, }}/>

    </Tabs>
  );
}
