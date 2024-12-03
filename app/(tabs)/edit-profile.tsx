import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FormField from "@/components/FormField";
import { useEffect, useState } from "react";
import { getMe, updateProfile, uploadFile } from "@/libs/appwrite";
import * as DocumentPicker from "expo-document-picker";
import { useUserStore } from "@/store/user";
import { Alert } from "react-native";
const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const [isNewAvatar, setIsNewAvatar] = useState(false);
  const [newAvatar, setNewAvatar] = useState<any>();
  const userStore = useUserStore();
  const openPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/png", "image/jpg", "image/jpeg"],
    });
    if (!result.canceled) {
      setIsNewAvatar(true);
      setNewAvatar(result.assets[0]);
      setAvatar(result.assets[0].uri);
    }
  };
  const setUserInfo = async () => {
    setLoading(true);
    const user = await getMe();
    setLoading(false);
    if (user) {
      setEmail(user.userDetail.documents[0].email);
      setName(user.userDetail.documents[0].name);
      setAvatar(user.userDetail.documents[0].avatar);
    }
  };
  const onSubmit = async () => {
    let url: string | undefined = "";
    if (isNewAvatar) {
      url = await uploadFile(newAvatar);
    }
    const data = { email, name, avatar: url || avatar };
    await updateProfile(data);
    userStore.setUser({
      email: data.email,
      name: data.name,
      avatarUrl: data.avatar,
    });
    Alert.alert("Update profile successfully!");
  };
  useEffect(() => {
    setUserInfo();
  }, []);
  if (loading)
    return (
      <View>
        <Text> Loading... </Text>
      </View>
    );
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="font-bold text-2xl text-white">Edit Profile</Text>

        <View className="flex flex-col py-10">
          <View className="flex justify-center items-center gap-3">
            <Image
              className="h-36 w-36 rounded-[999] border-gray-500 object-cover border-2"
              source={{
                uri:
                  avatar ||
                  "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
              }}
            />
            <TouchableOpacity onPress={openPicker}>
              <View className="bg-secondary p-2 rounded-xl border-primary border-[1px] uppercase">
                <AntDesign name="upload" size={24} color="gray" />
              </View>
            </TouchableOpacity>

            <FormField
              title="Email"
              value={email}
              otherStyles="w-full"
              handleChangeText={(e) => setEmail(e)}
              readOnly={true}
            />
            <FormField
              title="Name"
              value={name}
              otherStyles="w-full"
              handleChangeText={(e) => setName(e)}
            />

            <TouchableOpacity onPress={onSubmit}>
              <View className="bg-secondary p-2 rounded-xl border-primary border-[1px] uppercase">
                <Text className="text-sm mx-5 font-[600]">Update</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
