import { productType } from "@/constants/product";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
import { Text, View } from "react-native";

interface DetailProps {
  data: productType;
}
const Detail = ({ data }: DetailProps) => {
  const [liked, setLiked] = useState<boolean>(false);
  const likeHandle = () => {
    setLiked((prev) => !prev);
  };
  return (
    <>
      <View className="flex-row justify-between items-center">
        <Text className="text-4xl font-bold text-orange-500">
          ${data.price}
        </Text>
        <View>
          <Fontisto
            className={`${liked ? "hidden" : ""}`}
            onPress={() => likeHandle()}
            name="heart-alt"
            size={28}
            color="black"
          />
          <Fontisto
            className={`${!liked ? "hidden" : ""}`}
            onPress={() => likeHandle()}
            name="heart"
            size={28}
            color="#f56658"
          />
        </View>
      </View>
      <Text className="text-3xl font-semibold">{data.name}</Text>
      <View className="flex-row gap-1 items-center">
        {renderStars(data.rate)}
        <Text className="text-lg pl-2 text-slate-400 font-medium">
          {data.rate}
          <Text className="text-gray-300">{" | "}</Text>
          {`${data.sold} sold`}
        </Text>
      </View>
      <View className="w-full h-px bg-gray-400"></View>
      <View>
        <Text className="text-slate-500 text-xl">{data.description}</Text>
      </View>
    </>
  );
};

const renderStars = (rate: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rate >= i) {
      stars.push(<FontAwesome key={i} name="star" color="orange" size={20} />);
    } else if (rate >= i - 0.8) {
      stars.push(
        <FontAwesome key={i} name="star-half-empty" color="orange" size={20} />
      );
    } else {
      stars.push(
        <FontAwesome key={i} name="star-o" color="orange" size={20} />
      );
    }
  }
  return stars;
};

export default Detail;
