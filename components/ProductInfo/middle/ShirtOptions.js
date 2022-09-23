import { useState, useEffect } from "react";
import style from "../../../styles/Middle.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCurrentImage,
  changeVisibleImage,
  updImageBtnArr,
  updateSize,
} from "../../../redux/features/prodInfo-slice";

const ShirtOptions = () => {
  const [color, setColor] = useState("Black");
  const [gender, setGender] = useState("Men");
  const [shirts, setShirts] = useState([]);

  function getShirts() {
    fetch("/api/shirts")
      .then((data) => {
        return data.json();
      })
      .then((shirts) => {
        setShirts(shirts);
      });
  }

  useEffect(() => {
    getShirts();
  }, []);

  const dispatch = useDispatch();
  const { currentImage, imageDisplayBtnArr } = useSelector(({ prodInfo }) => ({
    currentImage: prodInfo.currentImage,
    imageDisplayBtnArr: prodInfo.imageBtnArr,
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

  return (
    <div className={style.options} aria-label="shirt options">
      <form
        className={style.optionsForm}
        aria-label="shirt options select form"
      >
        <div className={style.genderContainer}>
          <div className={style.fit}>
            <label className={style.type} aria-label="fit type">
              Fit Type:{" "}
            </label>
            <span aria-label={`fit type:${gender}`}>{gender}</span>
          </div>
          <ul className={style.genderSelect} aria-label="fit type options">
            <li className={style.genderli} aria-label="mens type">
              <button
                className={
                  gender === "Men" ? style.selectedgenderBtn : style.genderBtn
                }
                onClick={(e) => {
                  e.preventDefault();
                  setGender("Men");
                }}
                aria-label="mens type"
              >
                Men
              </button>
            </li>
            <li className={style.genderli} aria-label="womens type">
              <button
                className={
                  gender === "Women" ? style.selectedgenderBtn : style.genderBtn
                }
                onClick={(e) => {
                  e.preventDefault();
                  setGender("Women");
                }}
                aria-label="womens type"
              >
                Women
              </button>
            </li>
          </ul>
        </div>

        <div className={style.colorContainer} aria-label="color options">
          <div className={style.color} aria-label="color">
            <label className={style.colorLabel}>Color: </label>
            <span
              className={style.selectedColor}
              aria-label={`color: ${color}`}
            >
              {color}
            </span>
          </div>
          <ul className={style.colorOptions}>
            {shirts.map(({ color, img, display_img }, i) => {
              return (
                <li className={style.option} key={i} aria-label="option">
                  <div className={style.optionBox}>
                    <button
                      type="submit"
                      className={`${
                        imageDisplayBtnArr[0] === display_img && style.active
                      } ${style.optionBtn}`}
                      onMouseEnter={() => mouseEnter(display_img)}
                      onMouseLeave={() => mouseLeave()}
                      onClick={(e) => {
                        e.preventDefault();
                        mouseClick(display_img);
                        setColor(color);
                      }}
                      aria-label="submit selections button"
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

        <div className={style.sizeContainer} aria-label="size selection">
          <div className={style.size} aria-label="sizes">
            <label className={style.sizeLabel}>Size:</label>
          </div>
          <span className={style.dropdownContainer}>
            <select
              className={style.sizeDropDown}
              onChange={(e) => dispatch(updateSize(e.target.value))}
            >
              <option className={style.sizeOption} value={false}>
                Select
              </option>
              <option className={style.sizeOption} value={true}>
                Small
              </option>
              <option className={style.sizeOption} value={true}>
                Medium
              </option>
              <option className={style.sizeOption} value={true}>
                Large
              </option>
              <option className={style.sizeOption} value={true}>
                X-Large
              </option>
              <option className={style.sizeOption} value={true}>
                XX-Large
              </option>
              <option className={style.sizeOption} value={true}>
                3X-Large
              </option>
            </select>
          </span>
        </div>
      </form>
    </div>
  );
};

export default ShirtOptions;
