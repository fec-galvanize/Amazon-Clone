import React from "react";
import style from "../../styles/Header.module.css";
import { BsList } from "react-icons/bs";

export default function Mid() {
  return (
    <div className={`${style.midhead}`}>
      <div className={`${style.allcat}`}>
        <BsList className={`${style.iconlist}`} />
      </div>
      <ul className={`${style.cats}`}>
        <li className={`${style.li}`}>Primo Video</li>
        <li className={`${style.li}`}>Health and Household</li>
        <li className={`${style.li}`}>Shopper Toolkit</li>
        <li className={`${style.li}`}>Pet Supplies</li>
        <li className={`${style.li}`}>Amazon Home</li>
        <li className={`${style.li}`}>Pharmacy</li>
        <li className={`${style.li}`}>Amazon Launchpad</li>
      </ul>
    </div>
  );
}
