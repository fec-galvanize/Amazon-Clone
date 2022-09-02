import { useState, useEffect } from "react";
import StarRating from "../StarRating";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import style from "../../styles/RevStats.module.css";
const Stats = () => {
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
    <div className={`${style.container}`}>
      <h2>Customer Reviews</h2>
      <div>
        <StarRating rating={rating} /> <span>{rating} out of 5</span>
      </div>
      <p>{totalRatings} global ratings</p>
      <div>
        {/* CREATE METER FOR RATINGS */}
        {ratingDistribution.map(({ star, count }) => {
          const percent = `${Math.round((count / totalRatings) * 100)}%`;
          return (
            <span key={star}>
              <a
                href="#"
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
      <Description />
      <div className={style.createReview}>
        <h3>Review this Product</h3>
        <p>Share your thoughts with other customers</p>
        <a href="#"><button className={style.button}>Write a customer review</button></a>
      </div>
    </div>
  );
};

export default Stats;

const Description = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div
    className={style.description}
    >
      <button
        className={style.showDropDown}
        onClick={() =>
          !showDropDown ? setShowDropDown(true) : setShowDropDown(false)
        }
      >
        {" "}
        {showDropDown ? (
          <IoIosArrowUp style={{ color: "#565959" }} />
        ) : (
          <IoIosArrowDown style={{ color: "#565959" }} />
        )}{" "}
        How customer reviews and ratings work
      </button>
      {showDropDown && (
        <div className={style.dropDown}>
          <p>
            Customer Reviews, including Product Star Ratings help customers to
            learn more about the product and decide whether it is the right
            product for them.
            <br />
            <br />
            To calculate the overall star rating and percentage breakdown by
            star, we don’t use a simple average. Instead, our system considers
            things like how recent a review is and if the reviewer bought the
            item on Amazon. It also analyzed reviews to verify trustworthiness.
          </p>
          <a href="#">Learn more how customers reviews work on Amazon</a>
        </div>
      )}
    </div>
  );
};
