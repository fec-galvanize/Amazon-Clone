import { useState } from "react";
import style from "../styles/ProdImage.module.css";
import {IoShareOutline} from 'react-icons/io5'
const ProdImage = ({ img }) => {
  const [displayImg, setDisplayImg] = useState(img);
  const [imgArray] = useState([
    "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
    "https://m.media-amazon.com/images/I/71deJMlACUL._AC_UX466_.jpg",
  ]);

  return (
    <div className={`${style.container}`}>
      <div className={`${style.btnDisplay}`}>
        {imgArray.map((image, i) => {
          return (
            <button
              key={i}
              className={`${style.btn} ${displayImg === image && style.active}`}
              onMouseEnter={() => setDisplayImg(image)}
            >
              <img src={image} className={`${style.img}`} />
            </button>
          );
        })}
      </div>
      <div className={`${style.display}`}>
        <button className={`${style.share}`}><IoShareOutline/></button>
        <img
          className={`${style.img}`}
          src={displayImg}
          alt="the party dont start til i croc in"
        />
      </div>
    </div>
  );
};
ProdImage.defaultProps = {
  img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
};
export default ProdImage;
