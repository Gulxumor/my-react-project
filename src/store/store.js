import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice/index"

export const store = configureStore({
    reducer: {
        counterReducer,
    }
})