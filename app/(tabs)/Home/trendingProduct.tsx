import { getTopSoldProducts } from "@/libs/product";
import { Image, ScrollView, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export const TrendingProduct = () => {
  const trendingProduct = getTopSoldProducts();
  return (
    <View className="flex gap-4 mb-6">
      <Text className="font-bold text-xl">Trending Products</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="h-60 w-full flex-row"
      >
        {trendingProduct.map((item, i) => (
          <View
            key={i}
            className="relative h-full mr-3 rounded-xl overflow-hidden w-40"
          >
            <Image src={item.image[0]} className="w-full h-full opacity-90" />
            <View className="z-10 absolute inset-0 bg-black opacity-40 w-full h-full rounded-xl" />
            <View className="z-10 absolute inset-0 rounded-xl border w-full h-full border-black opacity-25" />
            <View className="z-10 absolute bottom-2 right-3 flex-row items-center gap-1">
              <AntDesign name="areachart" size={24} color="white" />
              <Text className=" text-2xl font-bold text-white">
                {item.sold}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
