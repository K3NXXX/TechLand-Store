import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { goodsType } from "../../lists/goodsList"
import axios from "axios";

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

type initialStateType = {
    goods: goodsType[];
    status: string;
    currentPage: number,
    searchValue: string

}

const initialState:initialStateType = {
    goods: [],
    status: Status.LOADING,
    currentPage: 0,
    searchValue: ""
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
        setGoods(state, action:PayloadAction<goodsType[]>) {
            state.goods = action.payload
        },
        setCurrentPage(state, action:PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setSearchValue(state, action:PayloadAction<string>) {
            state.searchValue = action.payload; 
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
export const {setGoods, setCurrentPage, setSearchValue} = goodsSlice.actions
export default goodsSlice.reducer