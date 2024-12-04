
import { IProductBase } from "@/types/product";
import { useEffect, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
interface SelectVariantProps {
  data: IProductBase;
  id: number;
}
const SelectVariant = ({ data, id }: SelectVariantProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<string>(
    data ? data.variants[0] : ""
  );
  useEffect(() => {
    setQuantity(1);
    setSelectedVariant(data ? data.variants[0] : "");
  }, [id]);

  const handleVariantSelect = (variant: string) => {
    setSelectedVariant(variant);
  };

  const quantityHandle = (type: "plus" | "minus") => {
    if (type === "plus") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };
  return (
    <>
      {/* Choose Variant */}
      <View className="flex gap-2">
        <Text className="text-xl font-medium">Product variants:</Text>
        <View className="flex-row gap-4">
          {data.variants &&
            data.variants.map((variant, i) => (
              <Pressable
                key={i}
                onPress={() => handleVariantSelect(variant)}
                className={`${
                  selectedVariant == variant ? "bg-sky-500" : "bg-gray-300"
                } border py-1 px-2 rounded-xl`}
              >
                <Text
                  className={`${
                    selectedVariant == variant ? "text-white font-medium" : ""
                  } text-lg`}
                >
                  {variant}
                </Text>
              </Pressable>
            ))}
        </View>
      </View>
      {/* Choose quantity */}
      <View className="flex gap-2">
        <Text className="text-xl font-medium">Select quantity:</Text>
        <View className="flex-row items-center justify-between h-12 w-48 border rounded-2xl overflow-hidden">
          <Pressable
            className={`flex justify-center items-center ${
              quantity == 1 ? "bg-slate-400" : "bg-orange-400"
            } h-full w-1/4`}
            onPress={() => quantityHandle("minus")}
          >
            <AntDesign name="minus" color="white" size={26} />
          </Pressable>
          <View className="h-full flex flex-1 justify-center items-center border-x">
            <Text className="text-xl">{quantity}</Text>
          </View>
          <Pressable
            className="flex justify-center items-center bg-orange-400 h-full w-1/4"
            onPress={() => quantityHandle("plus")}
          >
            <AntDesign name="plus" color="white" size={26} />
          </Pressable>
        </View>
      </View>
      <View className="flex-row gap-4">
        <TouchableOpacity className="rounded-xl border border-blue-600 flex-row justify-center items-center w-44 h-14">
          <MaterialCommunityIcons name="cart-variant" size={24} color="blue" />
          <Text className="text-blue-600 text-2xl">Add Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-xl bg-red-500 flex-row justify-center items-center w-52 h-14">
          <FontAwesome5 name="wallet" size={24} color="white" />
          <Text className="text-white text-2xl font-medium">{"  Buy Now!"}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SelectVariant;
