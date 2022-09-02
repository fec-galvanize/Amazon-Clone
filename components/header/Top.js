
import React from "react";

import style from "../../styles/Header.module.css";

export default function Top() {
  return (
    <div className={`${style.search}`}>
      <div className={`${style.logo}`}></div>
      <form className={`${style.form}`}>
        <input className={`${style.input}`} type="text" />
        <button className={`${style.sbtn}`} type="submit">
          <i className={`${style.sbm}`}></i>
        </button>
      </form>
    </div>
  );
}

//sbtn=> submit button
//sbm=>submit button magnifying glass
