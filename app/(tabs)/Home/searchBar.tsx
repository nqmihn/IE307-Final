import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { Text, View, Pressable } from "react-native";

export const SearchBar = () => {
  const router = useRouter();
  const searchNavigate = () => {
    router.push("/(tabs)/Filter");
  };
  return (
    <Pressable
      className="flex-row gap-2 items-center px-3 py-3 mb-6 border justify-between border-black rounded-2xl"
      onPress={() => searchNavigate()}
    >
      <Text className="text-gray-400" >What are you looking for today?</Text>
      <AntDesign name="search1" size={20} color="black" />
    </Pressable>
  );
};
