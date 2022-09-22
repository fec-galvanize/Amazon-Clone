import { useState, useEffect } from "react";
import style from "../../styles/Header.module.css";

export default function AFash() {
  const [fashCat, setFashCat] = useState([]);

  const getFashCats = async () => {
    const res = await fetch("/api/header/fashCat");
    const { data } = await res.json();

    await setFashCat(data[0].info);
  };

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
