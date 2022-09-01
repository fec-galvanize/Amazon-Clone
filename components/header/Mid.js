import React from "react";
import style from "../../styles/Header.module.css";

export default function Mid() {
  // function getCategories() {
  //   fetch("/categories")
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .then((data) => {
  //       //if given an array of categories i will do a for of loop and make a li element for each category
  //       //no more than 7 number of categories on the bar
  //     });
  //}
  return (
    <div className={`${style.midhead}`}>
      <div className={`${style.allcat}`}>ALL</div>
      <ul className={`${style.cats}`}>
        <li className={`${style.li}`}>Primo Video</li>
        <li>Health and Household</li>
        <li>Shopper Toolkit</li>
        <li>Pet Supplies</li>
        <li>Amazon Home</li>
        <li>Pharmacy</li>
        <li>Amazon Launchpad</li>
      </ul>
    </div>
  );
}
