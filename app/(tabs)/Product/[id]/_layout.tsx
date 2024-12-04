import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Detail" options={{ headerShown: false }} />
        <Stack.Screen name="Header" options={{ headerShown: false }} />
        
      </Stack>
    </>
  );
}
