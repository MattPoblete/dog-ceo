import { configureStore } from "@reduxjs/toolkit";
import breedsReducer from "./reducers/breedsReducer";

export const store = configureStore({
    reducer: {
        breeds: breedsReducer,
    },
})