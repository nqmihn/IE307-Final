import { ScrollView, Text, View } from "react-native";

export const TrendingProduct = () => {
  return (
    <View className="flex gap-4 mb-6">
      <Text className="font-bold text-xl">Trending Products</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="h-60 w-full flex-row"
      >
        {[...Array(10)].map((_, i) => (
          <View
            key={i}
            className="h-full mr-3 bg-gray-500 rounded-xl w-40 flex justify-center items-center"
          >
            <Text>{i}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
