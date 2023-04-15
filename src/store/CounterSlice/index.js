import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counterSlice",
    initialState: { counter: 0 },
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        incrementByAmount: (state, action) => {
            state.counter += action.payload
        },
        decrementByAmount: (state, action) => {
            state.counter -= action.payload.minus
        }
    }
});
export const { increment, decrement, decrementByAmount, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer