import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import defaultAvatar from "../../assets/account/no-account.svg"

type initialStateType = {
    userAuth: boolean;
    avatar: string;
}

const initialState:initialStateType = {
    userAuth: false,
    avatar: defaultAvatar
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserAuth(state, action:PayloadAction<boolean>) {
            state.userAuth = action.payload
        },
        setAvatar(state, action:PayloadAction<string>) {
            state.avatar = action.payload
        }
      
    },
    
})
export const {setUserAuth, setAvatar} = authSlice.actions
export default authSlice.reducer