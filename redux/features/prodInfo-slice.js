import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleImage:
    "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
  pageUrl: "http://localhost:3000/#",
  currentImage: {
    url: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
    isProd: true,
  },
  imageBtnArr: [
    "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
    "https://m.media-amazon.com/images/I/71deJMlACUL._AC_UX466_.jpg",
  ],
};

export const prodInfoSlice = createSlice({
  name: "prodInfo-slice",
  initialState,
  reducers: {
    changeVisibleImage: (state, { payload }) => {
      state.visibleImage = payload;
    },
    changeCurrentImage: (state, { payload }) => {
      if (typeof payload.isProd !== 'boolean') {
        state.currentImage.url = payload.url;
      } else if (!payload.url) {
        state.currentImage.isProd = payload.isProd;
      } else if (typeof payload.isProd === 'boolean' && payload.url) {
        state.currentImage = payload;
      }
    },
    updImageBtnArr: (state, { payload }) => {
      if (typeof payload.index === 'number' ) {
        state.imageBtnArr[payload.index] = payload.url;
      } else {
        payload.imageBtnArr = payload;
      }
    },
  },
});

export const { changeCurrentImage, changeVisibleImage, updImageBtnArr} = prodInfoSlice.actions;
export default prodInfoSlice.reducer;
