import { Tabs } from "expo-router";
import "../global.css";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        // tabBarActiveTintColor: "#0492c2",
        tabBarActiveBackgroundColor: "#63C5DA",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          borderTopWidth: 1,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View className="items-center justify-center gap-2">
                <AntDesign name="home" size={20} color="black" />
                <Text className="text-xs">Home</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View className="items-center justify-center gap-2">
                <AntDesign name="shoppingcart" size={20} color="black" />
                <Text className="text-xs">Cart</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View className="items-center justify-center gap-2">
                <MaterialIcons name="history" size={20} color="black" />
                <Text className="text-xs">Order</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View className="items-center justify-center gap-2">
                <AntDesign name="user" size={20} color="black" />
                <Text className="text-xs">Order</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="(auth)/sign-in"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="(auth)/sign-up"
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
}
