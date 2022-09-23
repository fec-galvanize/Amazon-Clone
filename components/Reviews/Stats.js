import { useState } from "react";
import RatingSnapshot from "./RatingSnapshot";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import style from "../../styles/RevStats.module.css";
const Stats = () => {
  return (
    <div className={`${style.container}`}>
      <h2>Customer Reviews</h2>
      <RatingSnapshot />
      <Description />
      <div className={style.createReview}>
        <h3>Review this Product</h3>
        <p>Share your thoughts with other customers</p>
        <a href="#">
          <button className={style.button} aria-label="share thoughts">
            Write a customer review
          </button>
        </a>
      </div>
    </div>
  );
};

export default Stats;

const Description = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className={style.description}>
      <button
        className={style.showDropDown}
        onClick={() =>
          !showDropDown ? setShowDropDown(true) : setShowDropDown(false)
        }
        aria-label="drop down"
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
          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=cm_cr_dp_d_omni_lm_btn?nodeId=G8UYX7LALQC8V9KA"
            aria-lavel="amazon link"
          >
            Learn more how customers reviews work on Amazon
          </a>
        </div>
      )}
    </div>
  );
};
