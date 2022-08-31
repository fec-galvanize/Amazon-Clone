import { configureStore } from "@reduxjs/toolkit";
import prodInfoReducer from "./features/prodInfo-slice";
export const store = configureStore({
  reducer: {
    prodInfo:prodInfoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
