import { Stack, Tabs, useRouter } from "expo-router";

import { useEffect } from "react";
import { View } from "react-native";
import "../global.css";
import GetMeComponent from "@/components/GetMe";
export default function RootLayout() {
  const router = useRouter();
  useEffect(() => {
    router.push("/(tabs)/Home");
  }, []);

  return (
    <>
      <View className="pt-12"></View>
      <GetMeComponent />
      <Stack>
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: true, title: "Sign In/ Sign Up" }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
