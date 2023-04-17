import dataSlice from "./data";
import searchSlice from "./Students";
import cartDrawerSlice from './CartDrawer'
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        search: searchSlice,
        data: dataSlice,
        cartDrawerSlice
    }
})