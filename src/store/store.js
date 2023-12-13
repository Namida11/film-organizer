
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import basketReducer from "./basketSlice";


const store = configureStore({
  reducer: {
    movies: moviesReducer,
    basket: basketReducer,
  },
});

export default store;
