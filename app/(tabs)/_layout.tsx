import { Tabs } from "expo-router";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
        // tabBarActiveTintColor: "#0492c2",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <Entypo
                  name="home"
                  size={24}
                  color={`${focused ? "black" : "lightgray"}`}
                />
                <Text
                  className={`${
                    focused ? "font-bold text-black" : "text-lightgray"
                  } text-lg `}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: true,
          title: "Cart",
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <Entypo
                  name="shopping-cart"
                  size={24}
                  color={`${focused ? "black" : "lightgray"}`}
                />
                <Text
                  className={`${
                    focused ? "font-bold text-black" : "text-lightgray"
                  } text-lg `}
                >
                  Cart
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <MaterialIcons
                  name="bookmark-border"
                  size={24}
                  color={`${focused ? "black" : "lightgray"}`}
                />
                <Text
                  className={`${
                    focused ? "font-bold text-black" : "text-lightgray"
                  } text-lg `}
                >
                  Order
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <Entypo
                  name="user"
                  size={24}
                  color={`${focused ? "black" : "lightgray"}`}
                />
                <Text
                  className={`${
                    focused ? "font-bold text-black" : "text-lightgray"
                  } text-lg `}
                >
                  Profile
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="edit-profile"
        options={{ tabBarButton: () => null, headerShown: false }}
      />
      <Tabs.Screen
        name="Product/[id]"
        options={{ tabBarButton: () => null, headerShown: false }}
      />
      <Tabs.Screen
        name="Filter"
        options={{ tabBarButton: () => null, headerShown: false }}
      />
    </Tabs>
  );
}
