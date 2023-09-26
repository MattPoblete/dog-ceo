import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentFilters: []
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            const alreadyExists = state.currentFilters.some((element)=> element.breed == action.payload.breed && element.subBreed == action.payload.subBreed)
            if(!alreadyExists){
                state.currentFilters.push(action.payload)
            }
        },
        removeFilter: (state, action) => {
            state.currentFilters.splice(action.payload, 1)
        },
        addImage: (state, action) =>{
            state.currentFilters[action.payload.index].src = action.payload.src
        }
    }
})

export const { addFilter, removeFilter, addImage } = filtersSlice.actions
export default filtersSlice.reducer