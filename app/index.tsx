import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-blue-400">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Button title={"test rneui"} />
      <Link href="/home">Go to Home</Link>
    </View>
  );
}
