import Entypo from "@expo/vector-icons/Entypo";
import { Text, View } from "react-native";

import { ProductCard } from "@/components/productCard";
import { recommendProduct } from "@/libs/product";

export const ProductList = () => {
  const product = recommendProduct(6)
  return (
    <View className="mb-6 flex gap-4">
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-xl">Product List</Text>
      </View>
      <ProductCard data={product} />
    </View>
  );
};
