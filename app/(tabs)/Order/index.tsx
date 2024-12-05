import React from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const orders = [
  {
    id: 1,
    status: "done",
    total: 100.17,
    address: "123 Street",
    phone: "123456789",
  },
  {
    id: 2,
    status: "unfinished",
    total: 200.22,
    address: "123 Street",
    phone: "123456789",
  },
  {
    id: 3,
    status: "waiting",
    total: 1400.65,
    address: "123 Street",
    phone: "123456789",
  },
  {
    id: 4,
    status: "done",
    total: 230.14,
    address: "123 Street",
    phone: "123456789",
  },
  {
    id: 5,
    status: "waiting",
    total: 567.99,
    address: "123 Street",
    phone: "123456789",
  },
  {
    id: 6,
    status: "unfinished",
    total: 341.53,
    address: "123 Street",
    phone: "123456789",
  },
  {
    id: 7,
    status: "waiting",
    total: 316.25,
    address: "123 Street",
    phone: "123456789",
  },
];

const sortedOrders = orders.sort((a, b) => {
  if (a.status === "unfinished" && b.status !== "unfinished") return -1;
  if (a.status !== "unfinished" && b.status === "unfinished") return 1;
  if (a.status === "waiting" && b.status !== "waiting") return -1;
  if (a.status !== "waiting" && b.status === "waiting") return 1;
  return b.id - a.id;
});

const OrderList = () => {
  const router = useRouter();

  const handleOrderPress = (order: any) => {
    router.push(`/(tabs)/Order/${order}`);
  };
  const handleDeleteWaitingOrder = (order: any) => {
    // Delete order with status "waiting"
  };
  return (
    <ScrollView className="h-screen">
      <SafeAreaView />
      <ScrollView className="flex h-screen p-4">
        <Text className=" text-3xl font-bold mb-4">Orders List</Text>
        <View className="flex flex-1 gap-4">
          {sortedOrders.map((order) => (
            <TouchableOpacity
              key={order.id}
              className="border rounded-md overflow-hidden flex-row justify-between"
              onPress={() => handleOrderPress(order)}
            >
              <View className="pl-4 py-3">
                <Text className="text-2xl font-semibold">
                  Order #{order.id}
                </Text>
                <Text className="text-xl">
                  Status:
                  <Text
                    className={`font-semibold ${
                      order.status === "waiting"
                        ? "text-yellow-500"
                        : order.status === "done"
                        ? "text-green-500"
                        : order.status === "unfinished"
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {` ${order.status}`}
                  </Text>
                </Text>
                <Text className="text-xl">Total: ${order.total}</Text>
              </View>
              <Pressable
                className={`${
                  order.status == "done" || order.status == "waiting"
                    ? "hidden"
                    : ""
                } flex justify-center items-center w-16 bg-red-400`}
              >
                <Ionicons name="trash-bin" size={28} color="white" />
              </Pressable>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default OrderList;
