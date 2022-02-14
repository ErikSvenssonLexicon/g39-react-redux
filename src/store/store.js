import { configureStore } from "@reduxjs/toolkit";
import namesSlice from "./namesSlice";

const store = configureStore({
    reducer: {
        namesSlice: namesSlice            
    }
})

export default store;