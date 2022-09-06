import { useEffect, useState } from "react";
import StarRating from "../StarRating";
import style from "../../styles/RevStats.module.css";

const RatingSnapshot = () => {
  const [totalRatings] = useState(23);
  const [ratingDistribution] = useState([
    { star: 5, count: 18 },
    { star: 4, count: 3 },
    { star: 3, count: 2 },
    { star: 2, count: 0 },
    { star: 1, count: 0 },
  ]);
  const [rating, setRating] = useState(0);

  const findRating = () =>
    setRating(
      ratingDistribution.reduce((prev, current, i) => {
        let prior = i === 1 ? prev.count * prev.star : prev;
        let present = current.count * current.star;
        return i === ratingDistribution.length - 1
          ? Math.round(((prior + present) / totalRatings) * 10) / 10
          : prior + present;
      })
    );

  useEffect(() => {
    findRating();
  }, [totalRatings, ratingDistribution]);
  return (
    <>
      <div>
        <StarRating rating={rating} /> <span>{rating} out of 5</span>
      </div>
      <p className={style.globalRating}>{totalRatings} global ratings</p>
      <div>
        {/* CREATE METER FOR RATINGS */}
        {ratingDistribution.map(({ star, count }) => {
          const percent = `${Math.round((count / totalRatings) * 100)}%`;
          return (
            <span key={star}>
              <a
                href="https://www.amazon.com/product-reviews/B08QV53WTG/ref=acr_dp_hist_5?ie=UTF8&filterByStar=five_star&reviewerType=all_reviews#reviews-filter-bar"
                title={`${star} stars represents ${percent} of rating`}
                className={`${style.meterContainer} ${
                  count > 0 ? style.hoverable : style.zero
                }`}
              >
                <span>{star} star</span>
                <div className={style.meter}>
                  <div
                    className={`${style.meter} ${style.fill}`}
                    style={{ width: percent }}
                  ></div>
                </div>
                <span>{percent}</span>
              </a>
              <br />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default RatingSnapshot;
