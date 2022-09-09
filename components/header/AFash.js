import { useState, useEffect } from "react";
import style from "../../styles/Header.module.css";

export default function AFash() {
  const [fashCat, setFashCat] = useState([]);

  function getFashCats() {
    fetch("/api/fheader")
      .then((data) => {
        return data.json();
      })
      .then((fcats) => {
        setFashCat(fcats);
      });
  }

  useEffect(() => {
    getFashCats();
  }, []);

  return (
    <div className={`${style.afash}`}>
      <div className="fashcats">
        <ul className={`${style.catsf}`}>
          <strong>AMAZON FASHION</strong>
          {fashCat.map((e) => {
            return (
              <li key={e.title} className={`${style.lif}`}>
                <a className={`${style.lif}`} href={e.ulink}>
                  {e.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
