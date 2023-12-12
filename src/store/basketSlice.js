import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  lists: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addListToBasket: (state, action) => {
      const { listName, movies } = action.payload;

      if (state.lists.find((item) => item.listName === listName)) {
        alert("eyni list adi daxil etmisiz!")
      } else {
        state.lists.push({
          listName: listName,
          data: movies,
        });
        console.log(state.lists);
      }
    },
  },
});

export const { addListToBasket } = basketSlice.actions;
export const selectBasketLists = (state) => state.basket.lists;

export default basketSlice.reducer;
