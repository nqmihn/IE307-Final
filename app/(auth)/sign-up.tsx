import FormButton from "@/components/FormButton";
import FormField from "@/components/FormField";
import { createUser } from "@/libs/appwrite";
import { useUserStore } from "@/store/user";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Dimensions, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<{
    email: string;
    password: string;
    name: string;
  }>({
    name: "",
    email: "",
    password: "",
  });
  const submit = async () => {
    if (form.email === "" || form.password === "" || form.name === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
    setSubmitting(true);
    const { email, name, password } = form;
    try {
      const res = await createUser(email, password, name);
      if (res) {
        const userStore = useUserStore();
        userStore.login(email, res?.userId, res.$id);
        router.replace("/Home");
        Alert.alert("Success", "Sign up successfully");
      }
    } catch (e: any) {
      Alert.alert("Error", e.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold text-center">
            Sign Up
          </Text>

          <FormField
            title="Name"
            value={form.name}
            handleChangeText={(e) => setForm({ ...form, name: e })}
            otherStyles="mt-10"
            placeholder=""
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <FormButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
