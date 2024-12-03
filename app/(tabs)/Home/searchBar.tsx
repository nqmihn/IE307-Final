import AntDesign from "@expo/vector-icons/AntDesign";
import { TextInput, View } from "react-native";

export const SearchBar = () => {
  return (
    <View className="flex-row gap-2 items-center px-3 py-3 mb-6 border justify-center border-black rounded-2xl">
      <TextInput
        className="flex-1 outline-none"
        placeholder="Search for a video topic"
      />
      <AntDesign name="search1" size={20} color="black" />
    </View>
  );
};
