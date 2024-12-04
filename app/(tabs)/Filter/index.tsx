import { IProductCard } from "@/types/product";
import { Animated, Text, View } from "react-native";
import Header from "./Header";
import { useCallback, useRef } from "react";
import { useFocusEffect } from "expo-router";

import { recommendProduct } from "@/libs/product";
import { ProductCard } from "@/components/productCard";

const FilterPage = () => {
  const slideAnim = useRef(new Animated.Value(100)).current;
  const suggestData = recommendProduct(4);
  useFocusEffect(
    useCallback(() => {
      slideAnim.setValue(100);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, [slideAnim])
  );
  return (
    <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
      <Header />
      <View className="pt-24 justify-center flex gap-4 px-4">
        <View>
          <Text className="text-2xl font-semibold italic">
            Maybe you will like:
          </Text>
        </View>
        <ProductCard data={suggestData} />
      </View>
    </Animated.View>
  );
};

export default FilterPage;
