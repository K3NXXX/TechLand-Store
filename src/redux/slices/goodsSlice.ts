import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { goodsType } from "../../lists/goodsList"
import axios from "axios";

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

type initialStateType = {
    goods: goodsType[];
    isLoading:boolean;
    status: string;
}

const initialState:initialStateType = {
    goods: [],
    isLoading: true,
    status: Status.LOADING,
}

export const fetchGoods = createAsyncThunk(`goods/fetchGoodsById`, async (_ , thunkAPI) => {
    const res = await axios.get(`https://64f776fe9d77540849539c0d.mockapi.io/goods`)
    thunkAPI.dispatch(setGoods(res.data))
    return res.data as goodsType[]
})

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        setGoods(state, action) {
            state.goods = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGoods.pending, (state) => {
            state.status = Status.LOADING
            state.goods = []
        }),
        builder.addCase(fetchGoods.fulfilled, (state) => {
            state.status = Status.SUCCESS
        }),
        builder.addCase(fetchGoods.rejected, (state) => {
            state.status = Status.ERROR
            state.goods = []
        })
    }
})
export const {setGoods, setIsLoading} = goodsSlice.actions
export default goodsSlice.reducer