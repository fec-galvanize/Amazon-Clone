import { Schema, model, models } from "mongoose";

const HeaderSchema = new Schema(
  {
    title: String,
    ulink: String,
  },
  { collection: "Header" }
);

const Header = models.Options || model("Options", OptionsSchema);

export default Header;
