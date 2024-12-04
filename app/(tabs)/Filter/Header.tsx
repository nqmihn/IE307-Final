import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "./searchBar";
import { useEffect, useRef, useState } from "react";
import {
  getProductNameListByKeyword,
  searchProductsByKeyword,
} from "@/libs/product";

const Header = () => {
  const navigation = useNavigation();
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 1000);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (debouncedQuery.trim() === "") {
        setSearchResults([]);
        setIsDropdownVisible(false);
        return;
      }
      // Replace with your actual search function
      const results = getProductNameListByKeyword(debouncedQuery);
      setSearchResults(results.slice(0, 5));
      console.log(results);
      setIsDropdownVisible(results.length > 0);
    };

    fetchSearchResults();
  }, [debouncedQuery]);

  const handleResultPress = (item: any) => {
    // Handle the result selection (e.g., navigate to product details)
    setIsDropdownVisible(false);
  };
  return (
    <View>
      <SafeAreaView className="bg-white" />
      <View className="w-full bg-white flex-row items-center gap-4 px-4 pb-2">
        <AntDesign name="back" size={28} onPress={() => navigation.goBack()} />
        <SearchBar
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      {isDropdownVisible && (
        <View className="bg-white mt-1">
          <View className="py-2">
            {searchResults.map((item, index) => (
              <TouchableOpacity
                className={`${index % 2 != 0 ? "bg-gray-200" : ""} px-8 py-4`}
                key={index}
                onPress={() => handleResultPress(item)}
              >
                <Text className="text-md">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity className="py-3 flex justify-center items-center border-t border-gray-300">
            <Text className="text-blue-500">Show All Result....</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
