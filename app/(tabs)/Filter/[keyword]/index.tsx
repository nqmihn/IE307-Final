import { IProductCard } from "@/types/product";
import { useLocalSearchParams } from "expo-router";
import { ProductCard } from "../../Home/productCard";

interface resultPageProps {
  data: IProductCard[];
}
const ResultPage = ({ data }: resultPageProps) => {
  const keyword = useLocalSearchParams();

  return (
    <>
      <ProductCard data={data} />
    </>
  );
};

export default ResultPage;
