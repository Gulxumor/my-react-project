import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartDrawer: false
}

export const cartDrawerSlice = createSlice({
    name: 'cartDrawerSlice',
    initialState,
    reducers: {
        cartDrawerToggle: (state, action) => {
            state.cartDrawer = !state?.cartDrawer
        }
    }
})


export const { cartDrawerToggle } = cartDrawerSlice.actions

export default cartDrawerSlice.reducer;