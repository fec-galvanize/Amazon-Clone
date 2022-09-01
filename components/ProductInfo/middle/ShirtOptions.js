import { useState } from "react";
import style from "../../../styles/Middle.module.css";

const ShirtOptions = () => {
  const [gender, setGender] = useState("male");
  const [color, setColor] = useState("");
  const [see, setSee] = useState(false);

  const shirtColors = [
    {
      color: "Black",
      img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    },
    {
      color: "Navy",
      img: "https://m.media-amazon.com/images/I/A1vJUKBjc2L._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    },
    {
      color: "Ashphalt",
      img: "https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    },
    {
      color: "Cranberry",
      img: "https://m.media-amazon.com/images/I/B1fs3pzGnVS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    },
    {
      color: "Kelly Green",
      img: "https://m.media-amazon.com/images/I/B1VMTBKtipS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    },
    {
      color: "Dark Heather",
      img: "https://m.media-amazon.com/images/I/B1MuEgxHlwS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    },
    {
      color: "Heather Grey",
      img: "https://m.media-amazon.com/images/I/C1ce8y0uOwS._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    },
    {
      color: "Heather Blue",
      img: "https://m.media-amazon.com/images/I/B1Rv34VM9pS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    },
    {
      color: "Purple",
      img: "https://m.media-amazon.com/images/I/B1el7IZypsS._CLa%7C500%2C468%7C819u1EpKTtL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
    },
    {
      color: "Royal Blue",
      img: "https://m.media-amazon.com/images/I/B1EryObaEWS._CLa%7C500%2C468%7C81t54H7ZpXL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0._SX38_SY50_CR,0,0,38,50_.png",
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
            {shirtColors.map((shirt, i) => {
              return (
                <li className={style.option} key={i}>
                  <div className={style.optionBox}>
                    <button className={style.optionBtn}>
                      <img
                        className={style.optionIMG}
                        alt={shirt.color}
                        src={shirt.img}
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
            <select className={style.sizeDropDown}>
              <option className={style.sizeOption} value="-1">
                Select
              </option>
              <option className={style.sizeOption}>Small</option>
              <option className={style.sizeOption}>Medium</option>
              <option className={style.sizeOption}>Large</option>
              <option className={style.sizeOption}>X-Large</option>
              <option className={style.sizeOption}>XX-Large</option>
              <option className={style.sizeOption}>3X-Large</option>
            </select>
          </span>
        </div>
      </form>
    </div>
  );
};

export default ShirtOptions;
