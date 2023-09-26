import { configureStore } from "@reduxjs/toolkit";
import breedsReducer from "./reducers/breedsReducer";
import filtersReducer from "./reducers/filtersReducer";

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        breeds: breedsReducer,
    },
})