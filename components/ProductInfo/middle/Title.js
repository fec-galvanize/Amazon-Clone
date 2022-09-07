import style from "../../../styles/Middle.module.css";
import StarRating from "../../StarRating";
import { useSelector } from "react-redux";
import RatingSnapshot from "../../Reviews/RatingSnapshot";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Title = () => {
  const { rating, totalRatings } = useSelector(({ prodInfo }) => {
    return { rating: prodInfo.rating, totalRatings: prodInfo.totalRatings };
  });

  const [showPop, setShowPop] = useState(false);

  return (
    <div className={style.title}>
      <div className={style.brand}>
        Brand: The Party Don't Start Til I Croc in Shirts & Gifts
      </div>
      <div className={style.productTitle}>
        The Party Don't Start Til I Croc In T-Shirt
      </div>
      <div className={style.ratings}>
        <div
          className={style.stars}
          onMouseEnter={() => setShowPop(true)}
          onMouseLeave={() => setShowPop(false)}
        >
          <StarRating rating={rating} size={"15px"} spacing={".2px"} />
          {showPop && (
            <div className={style.grab}>
              <div className={style.popupDiv}>
                <RatingSnapshot popup={true} />
                <div>
                  <a
                    className={style.reviews}
                    onClick={() =>
                      window.scrollTo({
                        left: 0,
                        top: 2300,
                        behavior: "smooth",
                      })
                    }
                  >
                    See All Customer Reviews {">"}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={style.chevy}>
          <BsChevronDown />
        </div>
        <div className={style.numRatings}>{totalRatings} Ratings</div>
      </div>
    </div>
  );
};

export default Title;
