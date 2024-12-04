import { useLocalSearchParams } from "expo-router";
import Header from "../Header";
import { getProductsListByKeyword } from "@/libs/product";
import { View } from "react-native";
import { ProductCard } from "@/components/productCard";

const ResultPage = () => {
  const param = useLocalSearchParams();
  const filterData = getProductsListByKeyword(String(param.keyword));
  return (
    <View>
      <Header />
      <View className="px-4 pt-6">
        <ProductCard data={filterData} />
      </View>
    </View>
  );
};

export default ResultPage;
