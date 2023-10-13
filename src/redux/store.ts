import { configureStore } from "@reduxjs/toolkit";
import goodsSlice from "./slices/goodsSlice";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
    reducer: {
        goodsSlice,
        cartSlice,
        authSlice,
        
    }
})
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();