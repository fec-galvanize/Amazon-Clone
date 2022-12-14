import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/caoursel2.module.css";
import tshirts from "./tShirtData";
import StarRating from "../StarRating";

const Alsoviewed = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      ,
      {
        breakpoint: 220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
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
      <div className={styles.App} aria-label="Also Viewed">
        <div className={styles.title_and_pageNumber}>
          <h3 className={styles.carousel_header}>
            Customers who viewed this item also viewed
          </h3>
          <p className={styles.pageNumber}>Page 1 of 3</p>
        </div>
        {/*use .length to see how many pages, index to what page is being rendered */}
        <div className={styles.slide_container} aria-label="slide of products">
          {/*replace this */}
          <Slider {...settings}>
            {tShirtArray.map((product, index) => {
              const rating = Math.random() * 6;
              const totalReviews = Math.floor(Math.random() * 300);
              return (
                <div
                  key={index}
                  className={styles.product_slide}
                  aria-label="product slide"
                >
                  <div className={styles.card_entire}>
                    <button
                      className={styles.cardAction_area}
                      type="button"
                      aria-label="tshirt card"
                    >
                      <img
                        className={styles.tShirtImage}
                        aria-label="tshirt image"
                        src={product.img}
                        alt="sample"
                      />
                      <div>
                        <h5 className={styles.tShirt_description}>
                          {product.description}
                        </h5>
                        <div
                          className={styles.star_and_rating}
                          aria-label="star rating"
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
                          aria-label="price and prime"
                        >
                          <h7 className={styles.price}>{product.price}</h7>
                          <img
                            className={styles.primeImg}
                            src="https://seeklogo.com/images/A/amazon-prime-icon-logo-484A50E84F-seeklogo.com.png"
                            alt="prime image"
                          ></img>
                        </div>
                      </div>
                    </button>
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

export default Alsoviewed;
