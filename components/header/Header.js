import Top from "./Top.js";
import Mid from "./Mid.js";
import AFash from "./AFash.js";

import style from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div className={`${style.allHead}`}>
      <Top />
      <Mid />
      <AFash />
    </div>
  );
}
//Top=> amazon logo and search bar
//Mid=> category list drop down and then spread select
//AFash=> Amazon fashion specific categories and drop down
