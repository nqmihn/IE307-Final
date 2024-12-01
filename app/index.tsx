import { useUserStore } from "@/store/user";
import { Text } from "react-native";
import { View } from "react-native";

const Home = () => {
  const user = useUserStore();
  return (
    <View>
      <Text className="mt-40"> Home: {user.token !== '' ? '1' : '2' }</Text>
    </View>
  );
};

export default Home;
