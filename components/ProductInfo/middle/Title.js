import style from "../../../styles/Middle.module.css";
import StarRating from "../../StarRating";
import { useState, useEffect } from "react";

const Title = () => {
  const [totalRatings] = useState(23);

  return (
    <div className={style.title}>
      <div className={style.brand}>
        Brand: The Party Don't Start Til I Croc in Shirts & Gifts
      </div>
      <div className={style.productTitle}>
        The Party Don't Start Til I Croc In T-Shirt
      </div>
      <div className={style.ratings}>
        <div className={style.stars}>
          <StarRating />
        </div>
        <div className={style.numRatings}>{totalRatings} Ratings</div>
      </div>
    </div>
  );
};

export default Title;
