import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: false,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toggleSearch: (state, action) => {
            state.search = !state.search
        }
    }
})


export const { toggleSearch } = searchSlice.actions

export default searchSlice.reducer