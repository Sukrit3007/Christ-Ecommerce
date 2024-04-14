import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Product } from '@/types/Product';

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const product = action.payload;
            const existingProduct = state.cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
        removeFromTheCart(state, action: PayloadAction<string>) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        incrementQuantity(state, action: PayloadAction<string>) {
            const product = state.cart.find(item => item.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
        },
        decrementQuantity(state, action: PayloadAction<string>) {
            const product = state.cart.find(item => item.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        clearAllCart(state) {
            state.cart = [];
        }
    }
});

export const { addToCart, removeFromTheCart, incrementQuantity, decrementQuantity, clearAllCart } = cartSlice.actions;

export const getCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
