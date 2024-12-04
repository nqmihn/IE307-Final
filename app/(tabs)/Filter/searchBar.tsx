import { useRouter } from "expo-router";
import { TextInput, View } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (value: string) => void;
}
const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  const router = useRouter();

  const handleSubmit = (keyword: string) => {
    if (keyword) {
      router.push(`/(tabs)/Filter/${keyword}`);
    }
  };
  return (
    <View className="flex-1 px-3 py-2 border border-gray-300 rounded-md">
      <TextInput
        placeholder="What are you looking for today?"
        className="text-gray-400"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={() => handleSubmit(value)}
      />
    </View>
  );
};

export default SearchBar;
