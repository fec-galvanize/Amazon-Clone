import React from "react";
import style from "../../styles/Middle.module.css";

const Title = () => {
  return (
    <div className={style.title}>
      <div className={style.brand}>
        Brand: The Party Don't Start Til I Croc in Shirts & Gifts
      </div>
      <div className={style.productTitle}>
        The Party Don't Start Til I Croc In T-Shirt
      </div>
      <div className={style.ratings}>
        <div className={style.stars}>Put Stars and down arrow here!</div>
        <div className={style.numRatings}>23 ratings</div>
      </div>
    </div>
  );
};

export default Title;
