import { useState } from "react";
import { IoShareOutline } from "react-icons/io5";

import { useSelector, useDispatch } from "react-redux";
import { changeImage } from "../redux/features/image-slice";

import style from "../styles/ProdImage.module.css";
const ProdImage = () => {
  const displayImg = useSelector(({ img }) => img.image);
  const imgArray = [
    "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
    "https://m.media-amazon.com/images/I/71deJMlACUL._AC_UX466_.jpg",
  ];

  return (
    <div className={`${style.container}`}>
      <div className={`${style.btnDisplay}`}>
        {imgArray.map((image, i) => {
          return <ImgBtn key={i} image={image} />;
        })}
      </div>
      <div className={`${style.display}`}>
        <ShareBtn />
        <img
          className={`${style.img}`}
          src={displayImg}
          alt="the party dont start til i croc in"
        />
      </div>
    </div>
  );
};

export default ProdImage;

const ImgBtn = ({ image }) => {
  const dispatch = useDispatch();
  const displayImg = useSelector(({ img }) => img.image);

  return (
    <button
      className={`${style.btn} ${displayImg === image && style.active}`}
      onMouseEnter={() => dispatch(changeImage(image))}
    >
      <img src={image} className={`${style.img}`} />
    </button>
  );
};

const ShareBtn = () => {
  const [position, setPosition] = useState({ display: "none" });

  let trackL = [];
  let trackT = [];
  const displayTooltip = (e) => {
    trackL.push(e.pageX);
    trackT.push(e.pageY);
    const left = e.pageX + 10;
    const top = e.pageY + 12;
    setTimeout(() => {
      if(
        trackL[trackL.length - 2] ===
        left - 10 &&
        trackT[trackT.length - 2] ==
        top - 12
      ){
        setPosition({display:'block',left,top})
      }
    }, 1000);

    if (window.pageX === left - 10 && window.pageY === top) {
      setPosition({ display: "block", left, top });
    }
  };
  const hideTooltip = (e) => {
    position.display !== "none" && setPosition({ display: "none" });
    trackL = []
    trackT = []
  };
  return (
    <>
      <button
        className={`${style.share}`}
        onMouseMove={displayTooltip}
        onMouseLeave={hideTooltip}
      >
        <IoShareOutline />
      </button>
      <span className={`${style.tooltip}`} style={position}>
        Share
      </span>
    </>
  );
};
