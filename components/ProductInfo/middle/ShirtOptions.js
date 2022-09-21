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

  const getOptions = async () => {
    const res = fetch("../../../pages/api/options");
    const { data } = (await res).json;

    await console.log(data);
  };

  useEffect(() => {
    getOptions();
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
    <div className={style.options}>
      <form className={style.optionsForm}>
        <div className={style.genderContainer}>
          <div className={style.fit}>
            <label className={style.type}>Fit Type: </label>
            <span>{gender}</span>
          </div>
          <ul className={style.genderSelect}>
            <li className={style.genderli}>
              <button
                className={
                  gender === "Men" ? style.selectedgenderBtn : style.genderBtn
                }
                onClick={(e) => {
                  e.preventDefault();
                  setGender("Men");
                }}
              >
                Men
              </button>
            </li>
            <li className={style.genderli}>
              <button
                className={
                  gender === "Women" ? style.selectedgenderBtn : style.genderBtn
                }
                onClick={(e) => {
                  e.preventDefault();
                  setGender("Women");
                }}
              >
                Women
              </button>
            </li>
          </ul>
        </div>

        <div className={style.colorContainer}>
          <div className={style.color}>
            <label className={style.colorLabel}>Color: </label>
            <span className={style.selectedColor}>{color}</span>
          </div>
          <ul className={style.colorOptions}>
            {shirts.map(({ color, img, display_img }, i) => {
              return (
                <li className={style.option} key={i}>
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
