import React from "react";
import { useState, useEffect } from "react";
import style from "../../styles/Header.module.css";
import { BsList } from "react-icons/bs";

export default function Mid() {
  const categories = [
    "Primo Video",
    "Health and Household",
    "Shopper Toolkit",
    "Pet Supplies",
    "Amazon Home",
    "Pharmacy",
    "Amazon Launchpad",
  ];

  return (
    <div className={`${style.midhead}`}>
      <div className={`${style.allcat}`}>
        <BsList className={`${style.iconlist}`} />
      </div>
      <ul className={`${style.cats}`}>
        {categories.map((e) => {
          return <li className={`${style.li}`}>{e}</li>;
        })}
      </ul>
    </div>
  );
}
