import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

export const HomeTitle = () => {
  return (
    <View className="pt-4 pb-2 flex-row justify-between items-center">
      <View>
        <Text className="text-md ">Welcome back</Text>
        <Text className="text-2xl font-bold">Ecommerce Store</Text>
      </View>
      <Ionicons name="logo-amplify" size={40} />
    </View>
  );
};
