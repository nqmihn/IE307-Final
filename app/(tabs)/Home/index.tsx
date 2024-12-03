import { logout } from "@/libs/appwrite";
import { useUserStore } from "@/store/user";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

import { TrendingProduct } from "./trendingProduct";
import { HomeTitle } from "./homeTitle";
import { SearchBar } from "./searchBar";
import { ProductList } from "./productList";

const Home = () => {
  const userStore = useUserStore();
  const handleLogout = async () => {
    await logout(userStore.sessionId);
    userStore.logout();
  };
  return (
    <ScrollView className="px-4 flex gap-4">
      <HomeTitle />
      <SearchBar />
      <TrendingProduct />
      <ProductList />
      <Link href="/(auth)/sign-in"> Sign In </Link>
      <Pressable onPress={handleLogout}>
        <Text>Log out</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Home;
