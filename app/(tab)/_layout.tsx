import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View } from "react-native";
import { Text } from "react-native";

const TabsLayout = () => {
  return (
    <>
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
          name="home"
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
      </Tabs>
    </>
  );
};

export default TabsLayout;
