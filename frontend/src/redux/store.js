import { configureStore } from "@reduxjs/toolkit"
import reduicers from "./reduicers";

const store = configureStore({reducer: reduicers});

export default store;