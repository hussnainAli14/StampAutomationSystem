import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./formReducer";
// const configure = configureStore();
export const store = configureStore(
    {
        reducer:{formReducer:formReducer,
},
});