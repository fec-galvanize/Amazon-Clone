import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/caoursel2.module.css";
import tshirts from "./relatedData";
import StarRating from "../StarRating";

const T_shirt_line = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  const tShirtArray = tshirts.data.tshirt;
  // console.log(tShirtArray);

  return (
    <footer>
      <div className={styles.App}>
        <div
          className={styles.title_and_pageNumber}
          aria-label="related products"
        >
          <h3 className={styles.carousel_header}>
            Related products with free delivery on eligible orders
          </h3>
          <p className={styles.pageNumber}>Page 1 of 3</p>
        </div>
        <div className={styles.slide_container} aria-label="related products">
          <Slider {...settings}>
            {tShirtArray.map((product, index) => {
              const rating = Math.random() * 6;
              const totalReviews = Math.floor(Math.random() * 300);
              return (
                <div
                  key={index}
                  className={styles.product_slide}
                  aria-label="related product slides"
                >
                  <div
                    className={styles.card_entire}
                    aria-label="related product slides"
                  >
                    <a href={product.route} aria-label="amazon link to product">
                      <button
                        onClick={() => console.log(product.route)}
                        className={styles.cardAction_area}
                        type="button"
                        aria-label="related product slide button"
                      >
                        <img
                          className={styles.tShirtImage}
                          src={product.img}
                          alt="sample"
                        />
                        <div className={styles.spacer} aria-label="spacer">
                          <h5 className={styles.tShirt_description}>
                            {product.description}
                          </h5>
                          <div
                            className={styles.star_and_rating}
                            aria-label="star rating and reviews"
                          >
                            <h6 className={styles.starSpan}>
                              {
                                <StarRating
                                  rating={rating}
                                  suppressHydrationWarning
                                />
                              }
                            </h6>
                            <p
                              className={styles.reviews}
                              suppressHydrationWarning
                            >
                              {totalReviews}
                            </p>
                          </div>
                          <div
                            className={styles.priceAndPrime}
                            aria-label="price of product and prime eligibility"
                          >
                            <h7 className={styles.price}>{product.price}</h7>
                            <img
                              className={styles.primeImg}
                              src="https://seeklogo.com/images/A/amazon-prime-icon-logo-484A50E84F-seeklogo.com.png"
                              alt="prime logo"
                            ></img>
                          </div>
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </footer>
  );
};

export default T_shirt_line;
