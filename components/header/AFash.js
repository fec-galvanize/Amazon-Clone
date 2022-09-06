import React from "react";
import style from "../../styles/Header.module.css";

export default function AFash() {
  const fashCat = [
    "Women",
    "Men",
    "Kids",
    "Luggage",
    "Sales and Deals",
    "New Arrivals",
    "Our Brands",
    "Primo try before you buy",
  ];
  return (
    <div className={`${style.afash}`}>
      <div className="fashcats">
        <ul className={`${style.catsf}`}>
          <strong>AMAZON FASHION</strong>
          {fashCat.map((e) => {
            return <li className={`${style.lif}`}>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
