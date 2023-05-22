import { createSlice } from "@reduxjs/toolkit";
export const incdecSlice = createSlice({
  name: "incdec",
  initialState: 10,
  reducers: {
    Inc: (state, action) => {
      return (state += 1);
    },
    Dec: (state, action) => {
      return (state -= 1);
    },
  },
});
export const { Inc, Dec } = incdecSlice.actions;
export default incdecSlice.reducer;
