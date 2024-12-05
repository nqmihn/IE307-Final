import { useUserStore } from "@/store/user";
import { router } from "expo-router";
import { Alert, Image, StatusBar, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { logout } from "@/libs/appwrite";

const Home = () => {
  const userStore = useUserStore();
  const onSignOut = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: handleLogOut,
      },
    ]);
  };
  const handleLogOut = async () => {
    await logout(userStore.sessionId);
    userStore.logout();
    router.replace("/Home");
  };
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1">
        <StatusBar backgroundColor={"gray"} />
        <View className="w-full">
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/-NTp7mVrJzk/hq720.jpg?v=674554cc&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNt3d-YMrCB7JH8BX1tpraIZ0thQ",
            }}
            className="h-72 w-full object-cover"
          />
        </View>
        <View className="flex-1 items-center">
          <Image
            className="h-36 w-36 rounded-[999] border-gray-500 object-cover -mt-24 border-2"
            source={{
              uri:
                userStore.user.avatarUrl ||
                "https://randomuser.me/api/portraits/men/36.jpg",
            }}
          />
          <Text className="font-bold my-1">
            {userStore.isLogin
              ? userStore.user.name
              : "Login to edit your profile"}
          </Text>
          {userStore.isLogin ? (
            <View className="bg-secondary p-2 rounded-xl border-primary border-[1px]">
              <Text className="text-sm mx-5 font-[600]">
                {userStore.user.email}
              </Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")}>
              <View className="bg-secondary p-2 rounded-xl border-primary border-[1px] uppercase">
                <Text className="text-sm mx-5 font-[600]">Login </Text>
              </View>
            </TouchableOpacity>
          )}
          {userStore.isLogin && (
            <View className="mt-5 w-[90%] bg-white rounded-xl">
              <TouchableOpacity
                onPress={() => {
                  router.replace("/(tabs)/Cart");
                }}
              >
                <View className="border-b-[1px] flex flex-row px-8 py-3 border-gray-400">
                  <AntDesign name="shoppingcart" size={24} color="gray" />
                  <Text className="color-gray-500 ml-5 font-[600] text-sm">
                    {" "}
                    Cart{" "}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.replace("/(tabs)/Order");
                }}
              >
                <View className="border-b-[1px] flex flex-row px-8 py-3 border-gray-400">
                  <Fontisto name="history" size={24} color="gray" />
                  <Text className="color-gray-500 ml-5 font-[600] text-sm">
                    {" "}
                    History{" "}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View className="border-b-[1px] flex flex-row px-8 py-3 border-gray-400">
                  <AntDesign name="setting" size={24} color="gray" />
                  <Text className="color-gray-500 ml-5 font-[600] text-sm">
                    {" "}
                    Setting{" "}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.replace("/(tabs)/Profile/edit-profile");
                }}
              >
                <View className="border-b-[1px] flex flex-row px-8 py-3 border-gray-400">
                  <AntDesign name="user" size={24} color="gray" />
                  <Text className="color-gray-500 ml-5 font-[600] text-sm">
                    Edit Profile
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onSignOut}>
                <View className="border-b-[1px] flex flex-row px-8 py-3 border-gray-400">
                  <MaterialIcons name="logout" size={24} color="gray" />
                  <Text className="color-gray-500 ml-5 font-[600] text-sm">
                    {" "}
                    Logout{" "}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Home;
