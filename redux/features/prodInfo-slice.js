import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image:
    "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
  pageUrl: "https://www.amazon.com/Party-Dont-Start-Til-Croc/dp/B08QV53WTG/ref=d_pd_sbs_sccl_1_4/136-0670463-5853540?pd_rd_w=3t6bF&content-id=amzn1.sym.e8ae2edd-d546-4619-bda8-82a9f33e83eb&pf_rd_p=e8ae2edd-d546-4619-bda8-82a9f33e83eb&pf_rd_r=NE79YG84YXA8A55AY6JC&pd_rd_wg=Bg8fM&pd_rd_r=26f9f66c-0e02-4089-9c85-ed5885bda6e4&pd_rd_i=B08QV53WTG&customId=B0752XJYNL&th=1"
};

export const prodInfoSlice = createSlice({
  name: "prodInfo-slice",
  initialState,
  reducers: {
    changeImage: (state, { payload }) => {
      state.image = payload;
    },
  },
});

export const {changeImage} = prodInfoSlice.actions
export default prodInfoSlice.reducer