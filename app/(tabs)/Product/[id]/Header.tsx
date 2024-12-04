import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  const navigation = useNavigation()
  return (
    <>
      <SafeAreaView className='bg-white' />
      <View className="w-full bg-white flex-row items-center gap-4 px-4 pb-4 pt-6">
        <AntDesign name="back" size={28} onPress={() => navigation.goBack()} />
        <Text className="text-xl font-bold">Go back</Text>
      </View>
    </>
  );
};

export default Header;
