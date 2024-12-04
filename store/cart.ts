import { create } from "zustand";

export interface ICart {
  productId: number;
  quantity: number;
  variant: number;
}
interface CartState {
  carts: ICart[];
  addToCart: (cart: ICart) => void;
  removeFromCart: (productId: number, variant: number) => void;
}
export const useCartStore = create<CartState>()((set) => ({
  carts: [],
  addToCart: (cart: ICart) =>
    set((state) => {
      const index = state.carts.findIndex(
        (item) =>
          item.productId === cart.productId && item.variant === cart.variant,
      );
      if (index !== -1) {
        state.carts[index].quantity += cart.quantity;
      } else {
        state.carts.push(cart);
      }
      return { carts: state.carts };
    }),
  removeFromCart: (productId: number, variant: number) =>
    set((state) => {
      const index = state.carts.findIndex(
        (item) => item.productId === productId && item.variant === variant,
      );
      if (index !== -1) {
        state.carts.splice(index, 1);
      }
      return { carts: state.carts };
    }),
}));
