import { createSlice } from "@reduxjs/toolkit";
import { filter } from "../../constants";

const initialState = {
    currentFilters: [] as Array<Object>,
    isLoading: true,
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            const alreadyExists = state.currentFilters.some(
                (element: any)=> 
                    element.breed == action.payload.breed && 
                    element.subBreed == action.payload.subBreed
                )
            if(!alreadyExists){
                const filter = action.payload as filter
                state.currentFilters.push(filter)
            }
        },
        removeFilter: (state, action) => {
            state.currentFilters.splice(action.payload, 1)
        },
        addImage: (state, action) =>{
            const currentFilter = state.currentFilters[action.payload.index] as filter
            currentFilter.src = action.payload.src
        },
        setLoading: (state, action) =>{
            state.isLoading = action.payload
        },
    }
})

export const { addFilter, removeFilter, addImage, setLoading } = filtersSlice.actions
export default filtersSlice.reducer