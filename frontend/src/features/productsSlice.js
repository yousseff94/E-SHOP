
import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    items : [] ,
    statue : null,
    error : null
};
export const productsFetch =  createAsyncThunk(
    "products/productsFetch",
   async (id=null,  { rejectWithValue })=> {
    try{
        const response = await axios.get("http://localhost:5000/products");
        return response?.data;
    }catch(error){
        return rejectWithValue("error occured");
    }
    }
);
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers : {},
    extraReducers:{
        [productsFetch.pending]: (state,action)=> {
            state.statue = "pending";
        },
        [productsFetch.fulfilled]: (state,action)=> {
            console.log(action);
            state.statue = "success";
            state.items= action.payload;
        },
        [productsFetch.rejected]: (state,action)=> {
            state.statue = "rejected";
            state.error= action.payload;
        },
    },
});

export default productsSlice.reducer