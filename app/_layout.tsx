import { Stack, Tabs, useRouter } from "expo-router";

import { useEffect } from "react";
import { View } from "react-native";
import "../global.css";
import GetMeComponent from "@/components/GetMe";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  const router = useRouter();
  useEffect(() => {
    router.push("/(tabs)/Home");
  }, []);

  return (
    <>
      <GetMeComponent />
      <Stack>
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false, title: "Sign In/ Sign Up" }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
