import { createSlice } from "@reduxjs/toolkit";

// If wanting to add to global redux state insert a new key here with the appropriate naming convention
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
  rating: 0,
  totalRatings: 23,
  size: false,
  cartCount: 0,
};

export const prodInfoSlice = createSlice({
  name: "prodInfo-slice",
  initialState,
  reducers: {
    // Add functions as keys here to update state abopve the firat parameter is the state object, the second parameter is the action object, for our purposes we only need the payload key, you can write as regular mutating js as it does the copying for us in the background
    changeVisibleImage: (state, { payload }) => {
      state.visibleImage = payload;
    },

    changeCurrentImage: (state, { payload }) => {
      if (typeof payload.isProd !== "boolean") {
        state.currentImage.url = payload.url;
      } else if (!payload.url) {
        state.currentImage.isProd = payload.isProd;
      } else if (typeof payload.isProd === "boolean" && payload.url) {
        state.currentImage = payload;
      }
    },

    updImageBtnArr: (state, { payload }) => {
      if (typeof payload.index === "number") {
        state.imageBtnArr[payload.index] = payload.url;
      } else {
        payload.imageBtnArr = payload;
      }
    },

    updateRating: (state, { payload:{ratingDistribution} }) => {
      // Use reduce to get the average of all ratings
      state.rating = ratingDistribution.reduce((prev, current, i) => {
        // if we are on the first index then prev is equal to the count * the star, otherwise it is equal to the regular prev, which is the same as count * stars
        let prior = i === 1 ? prev.count * prev.star : prev;
        // present is the current count * the current stars,
        let present = current.count * current.star;
        // when on the last index get the average of all the ratings and make it so it round to one decimal place
        return i === ratingDistribution.length - 1
          ? Math.round(((prior + present) / state.totalRatings) * 10) / 10
          // other wise keep adding the prior product with the current product resulting in a new value of prev
          : prior + present;
      });
    },

    updateCartCount: (state) => {
      state.cartCount++;
    },
    updateSize: (state, { payload }) => {
      state.size = payload;
    },
  },
});

// Export any created actions here/ functions that mutate the state
export const {
  changeCurrentImage,
  changeVisibleImage,
  updImageBtnArr,
  updateRating,
  updateSize,
  updateCartCount,
} = prodInfoSlice.actions;
export default prodInfoSlice.reducer;
