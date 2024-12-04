import { Image, TouchableOpacity, View } from "react-native";

interface SubImageProps {
  imageArray: string[];
  setSelectedImage: (src: string) => void;
}

const SubImage = ({ imageArray, setSelectedImage }: SubImageProps) => {
  return (
    <View className="flex-row gap-2">
      {imageArray.map((src, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedImage(src)} >
          <Image  src={src} className="size-16 rounded-md" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SubImage;
