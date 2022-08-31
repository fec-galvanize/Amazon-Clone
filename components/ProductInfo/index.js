import React from "react";
import Cart from "./Cart";
import ProdImage from "./ProdImage";
import Middle from "./middle/Middle";

import style from "../../styles/ProdInfo.module.css";
const ProductInfo = () => {
  return (
    <>
    <ProdPath />
      <div className={`${style.container}`}>
        <ProdImage />
        <Middle />
        <Cart />
      </div>
    </>
  );
};

export default ProductInfo;

const ProdPath = () => {
  const paths = [
    {
      text: "Clothing, Shoes & Jewelry",
      url: `https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1?ie=UTF8&node=7141123011`,
    },
    {
      text: "Novelty & More",
      url: "https://www.amazon.com/Novelty-Fashion/b/ref=dp_bc_aui_C_2?ie=UTF8&node=7147445011",
    },
    {
      text: "Clothing",
      url: "https://www.amazon.com/Novelty-Clothing-and-More/b/ref=dp_bc_aui_C_3?ie=UTF8&node=12035955011",
    },
    {
      text: "Novelty",
      url: "https://www.amazon.com/Novelty-Clothing/b/ref=dp_bc_aui_C_4?ie=UTF8&node=9103696011",
    },
    {
      text: "Women",
      url: "https://www.amazon.com/Womens-Novelty-Clothing/b/ref=dp_bc_aui_C_5?ie=UTF8&node=9056921011",
    },
    {
      text: "Tops & Tees",
      url: "https://www.amazon.com/Womens-Novelty-Tops-Tees/b/ref=dp_bc_aui_C_6?ie=UTF8&node=9056922011",
    },
    {
      text: "T-Shirts",
      url: "https://www.amazon.com/Womens-Novelty-T-Shirts/b/ref=dp_bc_aui_C_7?ie=UTF8&node=9056923011",
    },
  ];
  return (
    <div>
      {paths.map(({ text, url }, i) => {
        return (
          <>
            <a href={url}>{text}</a>
            { i !== paths.length - 1 && <span>{'>'}</span>}
          </>
        );
      })}
    </div>
  );
};
