import { configureStore } from "@reduxjs/toolkit";
import goodsSlice from "./slices/goodsSlice";
import cartSlice from "./slices/cartSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
    reducer: {
        goodsSlice,
        cartSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();