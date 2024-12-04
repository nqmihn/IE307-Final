import CartItem from "@/components/CartItem";
import { product } from "@/constants/product";
import { ICart, useCartStore } from "@/store/cart";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { Text } from "react-native";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const cartStore = useCartStore();
  const handleAddToCart = (cart: ICart) => {
    cartStore.addToCart(cart);
  };

  const handleRemoveCart = (productId: number, variant: number) => {
    cartStore.removeFromCart(productId, variant);
  };
  const total = cartStore.carts.reduce((acc, item) => {
    const productDetail = product.find((prod) => prod.id == item.productId);
    if (productDetail) {
      acc += productDetail.price * item.quantity;
    }
    return acc;
  }, 0);
  return (
    <SafeAreaView className="bg-white h-full pt-1 px-5">
      <FlatList
        data={cartStore.carts}
        renderItem={(item) => (
          <CartItem
            productItem={item.item}
            handleAddToCart={handleAddToCart}
            handleRemoveCart={handleRemoveCart}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View className="h-[1] bg-secondary my-1" />
      <View className="flex flex-row justify-between items-center my-3">
        <Text className="font-bold text-2xl w-[40%]">
          Total: ${Math.round(total * 100) / 100}
        </Text>
        <TouchableOpacity className="w-[50%]">
          <Button title="Checkout" color={"#FF9C01"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
