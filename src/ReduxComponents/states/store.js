import { configureStore } from "@reduxjs/toolkit";
import { incdecSlice } from "./reducers";

export default configureStore({
  reducer: {
    number: incdecSlice,
  },
});
