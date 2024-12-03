import { ScrollView } from "react-native";
import { TrendingProduct } from "./trendingProduct";
import { HomeTitle } from "./homeTitle";
import { SearchBar } from "./searchBar";
import { ProductList } from "./productList";

const Home = () => {
  return (
    <ScrollView className="px-4 flex gap-4">
      <HomeTitle />
      <SearchBar />
      <TrendingProduct />
      <ProductList />
    </ScrollView>
  );
};

export default Home;
