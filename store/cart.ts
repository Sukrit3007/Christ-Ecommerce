import { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cartItems: any[];
  addItemToCart: (item: Product) => void;
  getProductQuantity: (productId: number) => number | undefined;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeItemFromCart: (productId: number) => void;
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cartItems: [],

      addItemToCart: (item) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === item.id
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            itemExists.quantity++;
          }

          set({ cartItems: [...get().cartItems] });
        } else {
          set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
        }
      },

      getProductQuantity: (productId) => {
        const product = get().cartItems.find((item) => item.id === productId);
        return product ? product.quantity : undefined;
      },

      increaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            itemExists.quantity++;
          }

          set({ cartItems: [...get().cartItems] });
        }
      },
      decreaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            if (itemExists.quantity === 1) {
              const updatedCartItems = get().cartItems.filter(
                (item) => item.id !== productId
              );
              set({ cartItems: updatedCartItems });
            } else {
              itemExists.quantity--;
              set({ cartItems: [...get().cartItems] });
            }
          }
        }
      },

      removeItemFromCart: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            const updatedCartItems = get().cartItems.filter(
              (item) => item.id !== productId
            );
            set({ cartItems: updatedCartItems });
          }
        }
      },
    }),
    {
      name: "cart-items",
    }
  )
);

export default useCartStore;