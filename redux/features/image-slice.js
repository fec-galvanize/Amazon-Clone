import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image:
    "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
};

export const imageSlice = createSlice({
  name: "image-slice",
  initialState,
  reducers: {
    changeImage: (state, { payload }) => {
      state.image = payload;
    },
  },
});

export const { changeImage } = imageSlice.actions;
export default imageSlice.reducer;
