import { useState } from "react";

import { FaFacebook, FaPinterest } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { AiOutlineMail, AiFillTwitterCircle } from "react-icons/ai";
import { ImLink } from "react-icons/im";

import { useSelector, useDispatch } from "react-redux";
import { changeImage } from "../../redux/features/image-slice";

import style from "../../styles/ProdImage.module.css";
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

  return (
    <>
      <div className={`${style.linksDisplay}`}>
        <a href="#">
          <AiOutlineMail className={style.pin} /> <span>Email</span>
        </a>
        <a href="#">
          <FaPinterest className={style.pin} style={{ color: "darkred" }} />{" "}
          <span>Pinterest</span>
        </a>
        <a href="#">
          <FaFacebook className={style.pin} style={{ color: "blue" }} />{" "}
          <span>Facebook</span>
        </a>
        <a href="#">
          <AiFillTwitterCircle
            className={style.pin}
            style={{ color: "skyblue" }}
          />{" "}
          <span>Twitter</span>
        </a>
        <a href="#">
          <ImLink className={style.pin} /> <span>Copy Link</span>
        </a>
      </div>
      <button aria-label="share" title="Share" className={`${style.share}`}>
        <IoShareOutline />
      </button>
      <span className={`${style.tooltip}`} style={position}>
        Share
      </span>
    </>
  );
};
