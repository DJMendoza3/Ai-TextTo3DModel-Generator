import { configureStore } from "@reduxjs/toolkit";

import navReducer from "./slices/navSlice";
import homeReducer from "./slices/homeSlice";

export default configureStore({
    reducer: {
       nav: navReducer,
       home: homeReducer,
    },
})