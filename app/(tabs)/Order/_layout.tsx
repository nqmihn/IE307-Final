

import { Stack } from "expo-router";
const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[order]/index" options={{title:"Order detail"}} />
    </Stack>
  );
};

export default AuthLayout;
