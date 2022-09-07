import Stats from "./Stats";
import TopReviews from "./TopReviews";
import style from "../../styles/Reviews.module.css";

const Reviews = () => {
  return (
    <div className={style.container}>
      <Stats />
      <TopReviews />
    </div>
  );
};

export default Reviews;
