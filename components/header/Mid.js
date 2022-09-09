import { useState, useEffect } from "react";
import style from "../../styles/Header.module.css";
import { BsList } from "react-icons/bs";

//I think i may have to add the mode:cors into the fetch
export default function Mid() {
  const [categories, setCategories] = useState([]);

  function getCat() {
    fetch("/api/mheader")
      .then((data) => {
        return data.json();
      })
      .then((cats) => {
        setCategories(cats);
      });
  }

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className={`${style.midhead}`}>
      <div className={`${style.allcat}`}>
        <BsList className={`${style.iconlist}`} />
      </div>
      <ul className={`${style.cats}`}>
        {categories.map((e) => {
          return (
            <li key={e.title} className={`${style.li}`}>
              <a className={`${style.li}`} href={e.ulink}>
                {e.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
