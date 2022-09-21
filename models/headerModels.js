import mongoose, { Schema, model, models } from "mongoose";

const InfoSchema = new Schema({
  title: String,
  ulink: String,
});

const HeaderSchema = new Schema(
  {
    name: String,
    info: [InfoSchema],
  },
  { collection: "Header" }
);

const Header = models.Header || model("Header", HeaderSchema);

export default Header;
