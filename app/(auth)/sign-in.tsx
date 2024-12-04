import FormButton from "@/components/FormButton";
import FormField from "@/components/FormField";
import { logout, signIn } from "@/libs/appwrite";
import { useUserStore } from "@/store/user";
import { Link, router, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SignIn = () => {
  const userStore = useUserStore();
  const router = useRouter();
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);
  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      setSubmitting(true);
    }
    try {
      const res = await signIn(form.email, form.password);
      setForm({ email: "", password: "" });
      if (res) {
        userStore.login(
          {
            email: res.profile.documents[0].email,
            avatarUrl: res.profile.documents[0].avatar,
            name: res.profile.documents[0].name,
          },
          res.session.userId,
          res.session.$id
        );
        router.replace("/Home");
        Alert.alert("Success", "Sign in successfully");
      }
    } catch (e: any) {
      Alert.alert("Error", e.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-[#161622] h-full">
      <TouchableOpacity
        onPress={() => {
          router.push("/(tabs)/profile");
        }}
      >
        <FontAwesome name="remove" size={24} color="white" className="pl-6" />
      </TouchableOpacity>
      <View className="w-full flex h-full px-4 pt-36">
        <Text className="text-2xl font-semibold text-white mt-10 font-psemibold text-center">
          Sign In
        </Text>

        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          placeholder=""
        />

        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
          placeholder=""
        />

        <FormButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">
            Don't have an account?
          </Text>
          <Link
            href="/sign-up"
            className="text-lg font-psemibold text-[#FF9C01]"
          >
            Signup
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignIn;
