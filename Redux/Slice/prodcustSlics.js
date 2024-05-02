import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const { product_base } = require("../../api/baseURL/baseUrl");
const { product_end } = require("../../api/endPoints/endPoint");

let get_url = product_base + product_end.categories;
let allProd = product_base + product_end.product;
let singleProd = product_base + product_end.single
// console.log("Single URL: ", singleProd);

//get data
export const getData = createAsyncThunk("get/getData", async () => {
    const res = await axios.get(get_url);
    // console.log("Slice get data: ", res.data);
    return res?.data;
})

//get products
export const getProd = createAsyncThunk("get/getProd", async (catname) => {
    // console.log("Data: ", `${allProd}${catname}`);
    const res = await axios.get(`${allProd}/${catname}`);
    // console.log("All Products: ", res.data);
    return res?.data;
})

//get single products
export const getSingleprod = createAsyncThunk("get/getSingleprod", async (id) => {
    const res = await axios.get(`${singleProd}/${id}`);
    // console.log("Single Products: ", res.data);
    return res?.data;
})

const initialValues = {
    userData: [],
    loading: false,
    error: null
}

export const mediaSlice = createSlice({
    name: "Slice",
    initialState: initialValues,

    extraReducers: (builder) => {
        //get data
        builder.addCase(getData.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
            state.error = null;
            // console.log("Fulfilled action: ", action.payload);
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.loading = false;
            state.userData = [];
            state.error = action.error.message;
            console.log("Rejected action: ", action);
        })

        //all products
        builder.addCase(getProd.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getProd.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action;
            state.error = null;
            // console.log("Fulfilled action: ", action.payload);
        })
        builder.addCase(getProd.rejected, (state, action) => {
            state.loading = false;
            state.userData = [];
            state.error = action.error.message;
            console.log("Rejected action: ", action);
        })

        //single products
        builder.addCase(getSingleprod.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getSingleprod.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action;
            state.error = null;
            // console.log("Fulfilled action: ", action.payload);
        })
        builder.addCase(getSingleprod.rejected, (state, action) => {
            state.loading = false;
            state.userData = [];
            state.error = action.error.message;
            console.log("Rejected action: ", action);
        })
    }
})

export default mediaSlice.reducer;