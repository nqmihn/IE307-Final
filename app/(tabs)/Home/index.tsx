import { logout } from "@/libs/appwrite";
import { useUserStore } from "@/store/user";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text, TextInput } from "react-native";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  const userStore = useUserStore();
  return (
    <View className="px-4 flex gap-4">
      {/* Home page title */}
      <View className="pt-4 flex-row justify-between items-center">
        <View>
          <Text className="text-md ">Welcome back</Text>
          <Text className="text-2xl font-bold">Ecommerce Store</Text>
        </View>
        <Ionicons name="logo-amplify" size={40} />
      </View>
      {/* Home page search bar */}
      <View className="flex-row gap-2 items-center px-3 py-3 border justify-center border-black rounded-2xl">
        <TextInput
          className="flex-1 outline-none"
          placeholder="Search for a video topic"
        />
        <AntDesign name="search1" size={20} color="black" />
      </View>
      {/* carousel */}
      <ScrollView
        horizontal={true}
        className="h-40 w-full gap-2 flex-row overflow-hidden"
      >
        <View className="h-full bg-gray-500 rounded-xl w-24">
          <Text>a</Text>
        </View>
        <View className="h-full bg-gray-500 rounded-xl w-24">
          <Text>b</Text>
        </View>
        <View className="h-full bg-gray-500 rounded-xl w-24">
          <Text>c</Text>
        </View>
        <View className="h-full bg-gray-500 rounded-xl w-24">
          <Text>d</Text>
        </View>
        <View className="h-full bg-gray-500 rounded-xl w-24">
          <Text>e</Text>
        </View>
        <View className="h-full bg-gray-500 rounded-xl w-24">
          <Text>f</Text>
        </View>
        <View className="h-full bg-gray-500 rounded-xl w-24">
          <Text>g</Text>
        </View>
      </ScrollView>
      <Link href="/(auth)/sign-in"> Sign In </Link>
      <Pressable onPress={() => logout(userStore.sessionId)}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};

export default Home;
