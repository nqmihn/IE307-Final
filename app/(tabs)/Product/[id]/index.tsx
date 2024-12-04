import Header from "./Header";
import Detail from "./Detail";
import NotFoundPage from "./not-found";
import SelectVariant from "./Select";
import { getProductById } from "@/libs/product";
import { useCallback, useEffect, useRef } from "react";
import { Animated, ScrollView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const data = getProductById(Number(id));
  const slideAnim = useRef(new Animated.Value(100)).current;

  useFocusEffect(
    useCallback(() => {
      // Đặt lại giá trị của slideAnim trước khi bắt đầu hoạt ảnh
      slideAnim.setValue(100);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, [slideAnim])
  );

  if (!data) return <NotFoundPage />;

  return (
    <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
      <Header />
      <ScrollView className="flex gap-4 h-[54rem]">
        <View className="w-full h-[30rem] bg-gray-400"></View>
        <View className="px-6 pt-6 pb-12 flex gap-4">
          <Detail data={data} />
          <SelectVariant data={data} id={Number(id)} />
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default ProductDetail;