import { useState } from "react";
import StarRating from "../StarRating";
import style from "../../styles/RevStats.module.css";
const Stats = () => {
  const [rating] = useState(4.7);
  const [totalRatings] = useState(23);
  const [ratingDistribution] = useState([
    { star: 5, count: 18 },
    { star: 4, count: 3 },
    { star: 3, count: 2 },
    { star: 2, count: 0 },
    { star: 1, count: 0 },
  ]);
  return (
    <div>
      <h2>Customer Reviews</h2>
      <div>
        <StarRating rating={rating} /> <span>{rating} out of 5</span>
      </div>
      <p>{totalRatings} global ratings</p>
      <div>
        {ratingDistribution.map(({ star, count }) => {
          const percent = `${Math.round((count / totalRatings) * 100)}%`;
          return (
            <>
              <a
                href="#"
                key={star}
                title={`${star} stars represents ${percent} of rating`}
                className={`${style.meterContainer} ${count > 0 ? style.hoverable : style.zero}`}
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
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
