import { useState } from "react";
import style from "../../../styles/Middle.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCurrentImage,
  changeVisibleImage,
  updImageBtnArr,
  updateSize,
} from "../../../redux/features/prodInfo-slice";

const ShirtOptions = () => {
  const [gender, setGender] = useState("male");
  const [color, setColor] = useState("");
  const [see, setSee] = useState(true);

  const dispatch = useDispatch();
  const { currentImage, imageDisplayBtnArr } = useSelector(({ prodInfo:{currentImage, imageBtnArr} }) => ({
    currentImage,
    imageDisplayBtnArr:imageBtnArr,
  }));

  const mouseEnter = (newImage) => {
    currentImage.isProd && dispatch(changeVisibleImage(newImage));
  };

  const mouseLeave = () => {
    dispatch(changeVisibleImage(currentImage.url));
  };




  const mouseClick = (newImage) => {
    currentImage.isProd && dispatch(changeVisibleImage(newImage));
    currentImage.isProd && dispatch(changeCurrentImage({ url: newImage }));
    dispatch(updImageBtnArr({ index: 0, url: newImage }));
  };

  const shirtColors = [
    {
      color: "Black",
      img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
      displayImg:
        "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
    },
    {
      color: "Navy",
      img: "https://m.media-amazon.com/images/I/A1vJUKBjc2L._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
      displayImg:
        "https://m.media-amazon.com/images/I/A1vJUKBjc2L._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
    },
    {
      color: "Ashphalt",
      img: "https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
      displayImg:
        "https://m.media-amazon.com/images/I/B1OGJ8t+8ZS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
    },
    {
      color: "Cranberry",
      img: "https://m.media-amazon.com/images/I/B1fs3pzGnVS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
      displayImg:
        "https://m.media-amazon.com/images/I/B1DnWZEQ8ES._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
    },
    {
      color: "Kelly Green",
      img: "https://m.media-amazon.com/images/I/B1VMTBKtipS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
      displayImg:
        "https://m.media-amazon.com/images/I/B1SqOvJ6PXS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
    },
    {
      color: "Dark Heather",
      img: "https://m.media-amazon.com/images/I/B1MuEgxHlwS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
      displayImg:
        "https://m.media-amazon.com/images/I/B17H79+I8tS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
    },
    {
      color: "Heather Grey",
      img: "https://m.media-amazon.com/images/I/C1ce8y0uOwS._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
      displayImg:
        "https://m.media-amazon.com/images/I/C1ce8y0uOwS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
    },
    {
      color: "Heather Blue",
      img: "https://m.media-amazon.com/images/I/B1Rv34VM9pS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
      displayImg:
        "https://m.media-amazon.com/images/I/B1DBWbloIpS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
    },
    {
      color: "Purple",
      img: "https://m.media-amazon.com/images/I/B1el7IZypsS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
      displayImg:
        "https://m.media-amazon.com/images/I/B14oNsg5tJS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
    },
    {
      color: "Royal Blue",
      img: "https://m.media-amazon.com/images/I/B1EryObaEWS._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
      displayImg:
        "https://m.media-amazon.com/images/I/B1EryObaEWS._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png",
    },
  ];

  return (
    <div className={style.options}>
      <form className={style.optionsForm}>
        <div className={style.genderContainer}>
          <div className={style.fit}>
            <label className={style.type}>Fit Type: </label>
            <span>Men- needs to be dynamic</span>
          </div>
          <ul className={style.genderSelect}>
            <li className={style.genderli}>
              <button className={style.genderBtn}>Men</button>
            </li>
            <li className={style.genderli}>
              <button className={style.genderBtn}>Women</button>
            </li>
          </ul>
        </div>

        <div className={style.colorContainer}>
          <div className={style.color}>
            <label className={style.colorLabel}>Color: </label>
            <span className={style.selectedColor}>
              Black- needs to be dynamic
            </span>
          </div>
          <ul className={style.colorOptions}>
            {shirtColors.map(({ color, img, displayImg }, i) => {
              return (
                <li className={style.option} key={i}>
                  <div className={style.optionBox}>
                    <button
                      type="submit"
                      className={`${
                        imageDisplayBtnArr[0] === displayImg && style.active
                      } ${style.optionBtn}`}
                      onMouseEnter={() => mouseEnter(displayImg)}
                      onMouseLeave={() => mouseLeave()}
                      onClick={(e) => {
                        e.preventDefault();
                        mouseClick(displayImg);
                      }}
                    >
                      <img
                        className={style.optionIMG}
                        alt={color}
                        src={img}
                      ></img>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={style.sizeContainer}>
          <div className={style.size}>
            <label className={style.sizeLabel}>Size:</label>
          </div>
          <span className={style.dropdownContainer}>
            <select className={style.sizeDropDown} onChange={(e) => dispatch(updateSize(e.target.value))}>
              <option className={style.sizeOption}  value={false}>
                Select
              </option>
              <option className={style.sizeOption} value={true}>Small</option>
              <option className={style.sizeOption} value={true}>Medium</option>
              <option className={style.sizeOption} value={true}>Large</option>
              <option className={style.sizeOption} value={true}>X-Large</option>
              <option className={style.sizeOption} value={true}>XX-Large</option>
              <option className={style.sizeOption} value={true}>3X-Large</option>
            </select>
          </span>
        </div>
      </form>
    </div>
  );
};

export default ShirtOptions;

