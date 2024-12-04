import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

interface IProductCard {
  id: number;
  name: string;
  price: number;
  sold: number;
}

interface ProductCardProps {
  data: IProductCard[];
}

export const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();
  const handlePress = (id: number) => {
    router.push(`/(tabs)/Product/${id}`);
  };
  return (
    <View className="flex flex-row flex-wrap gap-3">
      {data.map((product, i) => (
        <Pressable
          key={product.id}
          onPress={() => handlePress(product.id)}
          className="flex w-[48%] justify-between rounded-md overflow-hidden h-[18rem]"
        >
          <View className="w-full h-[75%] rounded-md bg-gray-400"></View>
          <View className="flex h-[25%]">
            <View className="px-2 flex-1 pt-2">
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className="text-lg font-semibold w-full"
              >
                {product.name}
              </Text>
            </View>
            <View className="px-2 pb-1 flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-orange-600">
                ${product.price}
              </Text>
              <Text className="text-md text-gray-500">
                Sold: {product.sold}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};
