import { logout } from "@/libs/appwrite";
import { useUserStore } from "@/store/user";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import ProductList from "./productList";
import { TrendingProduct } from "./trendingProduct";
import { HomeTitle } from "./homeTitle";
import { SearchBar } from "./searchBar";

const Home = () => {
  const userStore = useUserStore();
  return (
    <ScrollView className="px-4 flex gap-4">
      <HomeTitle />
      <SearchBar />
      <TrendingProduct />
      <ProductList />
      <Link href="/(auth)/sign-in"> Sign In </Link>
      <Pressable onPress={() => logout(userStore.sessionId)}>
        <Text>Log out</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Home;
