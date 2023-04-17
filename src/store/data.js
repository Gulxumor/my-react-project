import { createSlice } from "@reduxjs/toolkit";
import { products } from "../utils/products";

let initialState = {
    products: products,
    cartItems: [],
    wishlist: []
}


if (localStorage.getItem('data')) {
    initialState = JSON.parse(localStorage.getItem('data'))
}

localStorage.setItem("data", JSON.stringify(initialState))

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addToCar: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload]
        },
        incrementQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((value) => value.id === action.payload.id ? { ...value, quantity: value?.quantity + 1 } : value)
        },
        decrementQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((value) => value.id === action?.payload?.id ? { ...value, quantity: value?.quantity - 1 } : value)
            state.cartItems = state.cartItems.filter((value) => value.quantity !== 0)
        },
        deleteItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((value) => value.id !== action?.payload?.id)
        },
        likedProduct: (state, action) => {
            state.products = state?.products?.map((product) => product?.id === action?.payload?.id ? { ...product, liked: !product.liked } : product)
            state.wishlist = state?.products?.filter((product) => product?.liked)
        }
    }
})

export const { addToCar, incrementQuantity, decrementQuantity, deleteItemFromCart, likedProduct } = dataSlice.actions

export default dataSlice.reducer;