import amazonlogo from "../../public/images/amazon-logo-top.jpg";
import React from "react";

import style from "../../styles/Header.module.css";

export default function Top() {
  return (
    <div className={`${style.search}`}>
      <img className={`${style.logo}`} src={amazonlogo} alt="amazon logo" />
      <form className={`${style.form}`}>
        <input className={`${style.input}`} type="text" />
        <button className={`${style.sbtn}`} type="submit">
          <i className={`${style.sbm}`}></i>
        </button>
      </form>
    </div>
  );
}
//comment
