import { Text, View } from "react-native";

interface product {
  id: number;
  name: string;
  price: number;
  sold: number;
}

interface ProductCardProps {
  data: product[];
}

export const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <View className="flex flex-row flex-wrap gap-3">
      {data.map((product, i) => (
        <View
          key={product.id}
          className="flex w-[48%] justify-between border rounded-md overflow-hidden h-64"
        >
          <View className="w-full h-3/5 bg-gray-400"></View>
          <View className="px-2 flex-1 pt-2">
            <Text className="text-lg font-semibold">{product.name}</Text>
          </View>
          <View className="px-2 pb-1 flex-row justify-between items-center">
            <Text className="text-lg font-semibold text-orange-600">
              ${product.price}
            </Text>
            <Text className="text-md text-gray-500">Sold: {product.sold}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
