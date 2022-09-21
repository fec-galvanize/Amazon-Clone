import { Schema, model, models } from "mongoose";

const ReviewsSchema = new Schema(
  {
    picture: String,
    name: String,
    rating: Number,
    subject: String,
    country: String,
    date: String,
    verified_purchase: Boolean,
    review_body: String,
  },
  { collection: "Reviews" }
);

const Reviews = models.Reviews || model("Reviews", ReviewsSchema);

export default Reviews;
