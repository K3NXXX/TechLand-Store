import { createSlice } from "@reduxjs/toolkit";
import defaultAvatar from "../../assets/account/accountImgBig.jpg"

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
        setUserAuth(state, action) {
            state.userAuth = action.payload
        },
        setAvatar(state, action) {
            state.avatar = action.payload
        }
      
    },
    
})
export const {setUserAuth, setAvatar} = authSlice.actions
export default authSlice.reducer