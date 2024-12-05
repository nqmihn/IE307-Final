import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useUserStore } from "@/store/user";

const OrderDetail = () => {
  const userStore = useUserStore();
  const navigation = useNavigation();
  const order = useLocalSearchParams();
  const [name, setName] = useState<string>(userStore.user.name || "");
  const [address, setAddress] = useState(order.address || "");
  const [phone, setPhone] = useState(order.phone || "");

  const handleOrderSubmit = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 p-12 flex gap-6">
      <View className="pl-2  flex-row items-center">
        <Text className="text-2xl font-semibold">{`Order:  `}</Text>
        <Text className="text-2xl">{order.id}</Text>
      </View>
      <View className="pl-2  flex-row items-center">
        <Text className="text-2xl font-semibold">{`Total:  `}</Text>
        <Text className="text-2xl">${order.total}</Text>
      </View>
      <View className="pl-2  flex-row items-center">
        <Text className="text-2xl font-semibold">{`Name:  `}</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          className="text-gray-600 text-2xl"
        />
      </View>
      <View className="pl-2 flex-row items-center">
        <Text className="text-2xl font-semibold">{`Address:  `}</Text>
        <TextInput
          placeholder="Address"
          value={address[0]}
          onChangeText={setAddress}
          className="text-gray-600 text-2xl"
        />
      </View>
      <View className="pl-2 flex-row items-center">
        <Text className="text-2xl font-semibold">{`Phone Number:  `}</Text>
        <TextInput
          placeholder="Phone"
          value={phone[0]}
          onChangeText={setPhone}
          className="text-gray-600 text-2xl"
        />
      </View>
      <Button
        title="Submit Order"
        onPress={handleOrderSubmit}
        color={"#FF9C01"}
      />
    </View>
  );
};

export default OrderDetail;
