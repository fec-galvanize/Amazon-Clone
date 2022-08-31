import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./features/image-slice";
export const store = configureStore({
  reducer: {
    img:imageReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
