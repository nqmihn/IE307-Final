import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

const Header = () => {
  const router = useRouter();
  const handleNavigateBack = () => {
    router.push("/(tabs)/Home");
  };
  return (
    <View className="w-full bg-white flex-row items-center gap-4 px-4 pb-4 pt-6">
      <AntDesign name="back" size={28} onPress={() => handleNavigateBack()} />
      <Text className="text-xl font-bold">Quay lại trang chủ</Text>
    </View>
  );
};

export default Header;
