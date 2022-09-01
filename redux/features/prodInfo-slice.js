import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleImage:
    "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
  pageUrl: "http://localhost:3000/#",
  currentImage:
    "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
};

export const prodInfoSlice = createSlice({
  name: "prodInfo-slice",
  initialState,
  reducers: {
    changeVisibleImage: (state, { payload }) => {
      state.visibleImage = payload;
    },
    changeCurrentImage: (state, { payload }) => {
      state.currentImage = payload;
    },
  },
});

export const { changeCurrentImage, changeVisibleImage } = prodInfoSlice.actions;
export default prodInfoSlice.reducer;
