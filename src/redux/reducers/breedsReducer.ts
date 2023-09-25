import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    isLoading: true,
    breeds: {},
    selectedBreeds: {},
    error: null
}

export const breedsSlice = createSlice({
    name: "breeds",
    initialState,
    reducers: {
        initBreeds: (state, action) => {
            state.breeds = action.payload
        }
    }
})

export const { initBreeds } = breedsSlice.actions
export default breedsSlice.reducer