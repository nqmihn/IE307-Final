import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { product } from "@/constants/product";
import { useEffect, useState } from "react";
import { ICart } from "@/store/cart";
interface CartProps {
  productItem: {
    productId: number;
    quantity: number;
    variant: number;
  };
  handleAddToCart: (cart: ICart) => void;
  handleRemoveCart: (productId: number, variant: number) => void;
}
const CartItem = ({
  productItem,
  handleAddToCart,
  handleRemoveCart,
}: CartProps) => {
  const [productDetail, setProductDetail] = useState<{
    id: number;
    name: string;
    price: number;
    sold: number;
    categoryId: number;
    rate: number;
    description: string;
    variants: string[];
  }>({
    id: 0,
    name: "",
    price: 0,
    sold: 0,
    categoryId: 0,
    rate: 0,
    description: "",
    variants: [],
  });
  const onChangeQuantity = (type: number) => {
    if (type == -1 && productItem.quantity == 1) {
      handleRemoveCart(productItem.productId, productItem.variant);
      return;
    }
    handleAddToCart({
      productId: productItem.productId,
      quantity: 1 * type,
      variant: productItem.variant,
    });
  };
  const onRemove = () => {
    handleRemoveCart(productItem.productId, productItem.variant);
  };
  useEffect(() => {
    const p = product.find((prod) => prod.id == productItem.productId);
    if (p) {
      setProductDetail(p);
    }
  }, []);

  return (
    <TouchableOpacity
      className="flex flex-row justify-center items-center border-t border-gray-300"
      onPress={() => router.push(`/(tabs)/Product/${productItem.productId}`)}
    >
      <Image
        source={{
          uri: "https://img.game8.co/4048755/c6bd82e3dd5bb738908fd44f49aebc15.png/show",
        }}
        className="w-[30%] h-[80%] object-cover"
      />
      <View className="w-[65%]">
        <View className="flex flex-row justify-between mb-2 mt-2">
          <Text className="font-bold text-lg truncate h-8">
            {" "}
            {productDetail.name}{" "}
          </Text>
          <TouchableOpacity className="w-10 h-10 items-end" onPress={onRemove}>
            <EvilIcons name="trash" size={26} color="red" />
          </TouchableOpacity>
        </View>
        <Text className="font-light mb-4 text-sm">
          {" "}
          {productDetail.variants[productItem.variant]}{" "}
        </Text>
        <View className="flex flex-row justify-between items-center mb-1">
          <Text className="font-bold">${productDetail.price} </Text>
          <View className="flex flex-row h-10 items-center justify-around bg-gray-100 rounded-xl w-[70%]">
            <TouchableOpacity
              className="w-10 h-10 justify-center items-center"
              onPress={() => onChangeQuantity(-1)}
            >
              <AntDesign name="minuscircle" size={24} color="gray" />
            </TouchableOpacity>
            <Text className="font-bold">{productItem.quantity}</Text>
            <TouchableOpacity
              className="w-10 h-10 justify-center items-center"
              onPress={() => onChangeQuantity(1)}
            >
              <AntDesign name="pluscircle" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
