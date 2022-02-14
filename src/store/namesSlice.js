import { createSlice } from "@reduxjs/toolkit";

const namesSlice = createSlice({
  name: "names",
  initialState: [],
  /*
    1 - Immutable approach: WE NEED TO RETURN STATE OBJECT
    2 - Mutable approach: WE DONT RETURN THE STATE
    3 - WE CAN'T DO BOTH IN SAME REDUCER!!!
    */
  reducers: {
    addName(state, action) {
      state.push(action.payload);
    },
    removeName(state, action) {
      return state.filter((name) => name !== action.payload);
    },
  },
});

export const { addName, removeName } = namesSlice.actions;

export default namesSlice.reducer;
