import { IProductCard } from "@/types/product";
import { Animated, Text, View } from "react-native";
import Header from "./Header";
import { useCallback, useRef } from "react";
import { useFocusEffect } from "expo-router";

const FilterPage = () => {
  const slideAnim = useRef(new Animated.Value(100)).current;

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
      <View className='h-96 justify-center items-center flex'>
        <Text>Có thể thêm vài sản phẩm gợi ý khi search đang null</Text>
      </View>
    </Animated.View>
  );
};

export default FilterPage;
