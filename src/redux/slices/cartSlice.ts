import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItemsFromLS } from "../../utils/getItemsFromLS";
import { getTotalPriceFromLs } from "../../utils/getTotalPriceFromLS";

export type CartItemType = {
    id: number;
    imageURL: string;
    name: string;
    price: number;
    count: number;
}
type CartInitialState ={
    items: CartItemType[];
    totalPrice: number;
    successData: boolean;

}
const initialState: CartInitialState = {
    items: getItemsFromLS(),
    totalPrice: getTotalPriceFromLs(),
    successData: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action:PayloadAction<CartItemType>) {
        const findItem = state.items.find(obj => obj.id === action.payload.id)
        if (findItem) {
            findItem.count++
        }else {
            state.items.push({...action.payload, count: 1}) ;
        }
        state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
        }, 0)
    },
    minusItems(state, action) {
        const findItem = state.items.find(obj => obj.id === action.payload);
        if (findItem) {
            if (findItem.count > 0) {
                findItem.count--;
                state.totalPrice -= findItem.price;
            }
        }
    },
    removeItems(state, action) {
        const removedItem = state.items.find(obj => obj.id === action.payload);
        if (removedItem) {
            state.totalPrice -= removedItem.price * removedItem.count;
            state.items = state.items.filter(obj => obj.id !== action.payload);
        }
    },
    clearItems(state) {
        state.items = []
        state.totalPrice = 0
    }
  },
});

export const { addItems, removeItems, minusItems, clearItems} = cartSlice.actions;
export default cartSlice.reducer;