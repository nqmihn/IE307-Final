import { TextInput, View } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (value: string) => void;
}
const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  return (
    <View className="flex-1 px-3 py-2 border border-gray-300 rounded-md">
      <TextInput
        placeholder="What are you looking for today?"
        className="text-gray-400"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
