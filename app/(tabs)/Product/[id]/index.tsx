import Header from "./Header";
import Detail from "./Detail";
import NotFoundPage from "./not-found";
import SelectVariant from "./Select";
import { getProductById } from "@/libs/product";
import { useCallback, useRef, useState } from "react";
import { Animated, Image, ScrollView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import SubImage from "./subImage";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const data = getProductById(Number(id));
  const slideAnim = useRef(new Animated.Value(100)).current;
  const [selectedImage, setSelectedImage] = useState<string>(data?.image[0]|| "");
  useFocusEffect(
    useCallback(() => {
      if (data?.image[0]) {
        setSelectedImage(data.image[0]);
      }
      slideAnim.setValue(100);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, [slideAnim, data])
  );

  if (!data) return <NotFoundPage />;

  return (
    <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
      <Header />
      <ScrollView className="flex gap-4 h-[54rem]">
        <Image src={selectedImage} className="w-full h-[30rem] bg-gray-400" />
        <View className="px-6 pt-6 pb-12 flex gap-4">
          <SubImage imageArray={data.image} setSelectedImage={setSelectedImage}  />
          <Detail data={data} />
          <SelectVariant data={data} id={Number(id)} />
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default ProductDetail;
