import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../Slice/prodcustSlics"

const store = configureStore({
    reducer: {
        product: productReducer
    }
})

export default store