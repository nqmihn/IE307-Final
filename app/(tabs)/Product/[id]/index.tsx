import { getProductById, product } from "@/constants/product";
import { useLocalSearchParams, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Header from "./Header";
import Detail from "./Detail";
import NotFoundPage from "./not-found";
import SelectVariant from "./Select";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const data = getProductById(Number(id));
  if (!data) return <NotFoundPage />;
  return (
    <>
      <Header />
      <ScrollView className="flex gap-4 h-[60rem]">
        <View className="w-full h-[30rem] bg-gray-400"></View>
        <View className="px-6 pt-6 flex gap-4">
          <Detail data={data} />
          <SelectVariant data={data} id={Number(id)} />
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDetail;
