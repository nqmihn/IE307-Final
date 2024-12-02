import { Stack, Tabs, useRouter } from "expo-router";

import { useEffect } from "react";
import { View } from "react-native";
import "../global.css";
export default function RootLayout() {
  const router = useRouter();
  useEffect(() => {
    router.push("/(tabs)/Home");
  }, []);

  return (
    <>
      <View className="pt-12"></View>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
