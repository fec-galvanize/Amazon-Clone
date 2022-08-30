import { IoShareOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { changeImage } from "../redux/features/image-slice";
import style from "../styles/ProdImage.module.css";
const ProdImage = () => {
  const displayImg = useSelector(({ image }) => image.image);
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
  const displayImg = useSelector(({ image }) => image.image);

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
  return (
    <button className={`${style.share}`}>
      <IoShareOutline />
    </button>
  );
};
