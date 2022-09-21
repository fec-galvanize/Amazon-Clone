import { Schema, model, models } from "mongoose";

const OptionsSchema = new Schema(
  {
    color: {
      type: String,
      unique: [true, "Color is already an Option"],
      maxlength: [40, "Color cannot be more than 40 characters"],
    },
    img: String,
    display_img: String,
  },
  { collection: "Options" }
);

const Options = models.Options || model("Options", OptionsSchema);

export default Options;
