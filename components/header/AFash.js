import react from "react";
import style from "../../styles/Header.module.css";

export default function AFash() {
  return (
    <div className={`${style.afash}`}>
      <div className="fashcats">
        <ul className={`${style.catsf}`}>
          AMAZON FASHION
          <li className={`${style.lif}`}>Women</li>
          <li className={`${style.lif}`}>Men</li>
          <li className={`${style.lif}`}>Kids</li>
          <li className={`${style.lif}`}>Luggage</li>
          <li className={`${style.lif}`}>Sales and Deals</li>
          <li className={`${style.lif}`}>New Arrivals</li>
          <li className={`${style.lif}`}>Our Brands</li>
        </ul>
      </div>
    </div>
  );
}
