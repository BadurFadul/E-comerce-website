import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CartItem } from "../../types/cartItem";
import { Products } from "../../types/products";


const initialState: {
    items: CartItem[]
    loading: boolean,
    error: string
} = {
    items:[],
    loading: false,
    error: ""
}


const cardSlice = createSlice({
    name:"cardlist",
    initialState,
    reducers: {
        addToCard: (state, action: PayloadAction<Products>) => {
            const { payload: product } = action;
            const existingItem = state.items.find(
            (item) => item.product.id === product.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ product, quantity: 1 });
            }
        },
        removeProductFromCart: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            state.items = state.items.filter(
              (item) => item.product.id !== productId
            );
          },
          updateProductQuantityInCart: (
            state,
            action: PayloadAction<{ productId: number; quantity: number }>
          ) => {
            const { productId, quantity } = action.payload;
            const existingItem = state.items.find(
              (item) => item.product.id === productId
            );
            if (existingItem) {
              existingItem.quantity = quantity;
            }
          },
    }
})

const cardReducer = cardSlice.reducer
export const {addToCard, removeProductFromCart, updateProductQuantityInCart } = cardSlice.actions
export default cardReducer