import { useUserStore } from "@/store/user";
import { Link } from "expo-router";
import { Text } from "react-native";
import { View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text className="mt-40"> Home</Text>
      <Link href="/(auth)/sign-in"> Sign In </Link>
    </View>
  );
};

export default Home;
