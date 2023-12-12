
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  lists: { default: [] }, 
  selectedList: "default",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    addToList: (state, action) => {
      const { listName, movie } = action.payload;
      
      if (!state.lists[listName]) {
        state.lists[listName] = [];
      }
     
      state.lists[listName].push(movie);
      state.selectedList = listName;
    },
  },
});

export const { setMovies, addToList } = moviesSlice.actions;
export const selectMovies = (state) => state.movies.movies;
export const selectLists = (state) => state.movies.lists;
export const selectSelectedList = (state) => state.movies.selectedList;

export default moviesSlice.reducer;
