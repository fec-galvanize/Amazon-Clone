import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/shoppingTrends.module.css";
import tshirts from "./shoppingTrendsData";
import StarRating from "../StarRating";

const Trends = () => {
  const settings = {
    className: "center",
    centerModer: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    rows: 2,
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
          aria-label="recommended based on shopping trends"
        >
          <h3 className={styles.carousel_header}>
            Recommended based on your shopping trends
          </h3>
          <p className={styles.pageNumber}>Page 1 of 3</p>
        </div>
        <div
          className={styles.slide_container}
          aria-label="recommended product slides"
        >
          <Slider {...settings}>
            {tShirtArray.map((product, index) => {
              const rating = Math.random() * 6;
              const totalReviews = Math.floor(Math.random() * 300);
              return (
                <div
                  key={index}
                  className={styles.product_slide}
                  aria-label="trend product slide"
                >
                  <div className={styles.card_entire}>
                    <a
                      href={product.route}
                      aria-label="amazon link to recommended product"
                    >
                      <button
                        onClick={() => console.log(product.route)}
                        className={styles.cardAction_area}
                        type="button"
                        aria-label="trend product slide button"
                      >
                        <img
                          className={styles.tShirtImage}
                          src={product.img}
                          alt="sample"
                        />
                        <div
                          className={styles.spacer}
                          aria-label="just for space"
                        >
                          <h5 className={styles.tShirt_description}>
                            {product.description}
                          </h5>
                          <div
                            className={styles.star_and_rating}
                            aria-label="trend star and reviews"
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
                            aria-label="price and prime eligibility"
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

export default Trends;
