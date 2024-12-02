import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextInputProps } from "react-native";
interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  placeholder?: string;
  otherStyles: string;
  handleChangeText: (text: string) => void;
}

const FormField = ({
  title,
  value,
  placeholder,
  otherStyles,
  handleChangeText,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <AntDesign name="eye" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
