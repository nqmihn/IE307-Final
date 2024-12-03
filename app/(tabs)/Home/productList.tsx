import Entypo from "@expo/vector-icons/Entypo";
import { Text, View } from "react-native";
import { ProductCard } from "./productCard";
import { product } from "@/constants/product";


export const ProductList = () => {
  return (
    <View className="mb-6 flex gap-4">
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-xl">Product List</Text>
        <Text className="text-gray-500 text-lg">
          All Products
          <Entypo name="chevron-thin-right" size={14} color="gray" />
        </Text>
      </View>
      <ProductCard data={product} />
    </View>
  );
}
