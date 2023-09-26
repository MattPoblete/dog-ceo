import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    isLoading: true,
    breedsList: [],
    selectedBreed: {
        breed: "",
        selectedSubBreed: "",
        subBreed: []
    },
    error: null
}

export const breedsSlice = createSlice({
    name: "breeds",
    initialState,
    reducers: {
        initBreeds: (state, action) => {
            state.breedsList = action.payload
        },
        selectBreed: (state, action) => {
            state.selectedBreed = {
                breed: action.payload.breed,
                selectedSubBreed: action.payload.subBreed[0] ? action.payload.subBreed[0] : "",
                subBreed: action.payload.subBreed
            }
        },
        selectSubBreed: (state, action) => {
            state.selectedBreed.selectedSubBreed = action.payload
        }
    }
})

export const { initBreeds, selectBreed, selectSubBreed } = breedsSlice.actions
export default breedsSlice.reducer