import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/caoursel2.module.css";
import tshirts from "./tShirtData";
import StarRating from "../StarRating";

const getRandomStar = (max) => {
  return (Math.random() * max);
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// const Page = () => {

//   const [currentPage, setCurrentPage] = useState(1)

// };

const T_shirt_line = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
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
          <div className={styles.title_and_pageNumber}>
            <h3 className={styles.carousel_header}>Customers who viewed this item also viewed</h3>
            <p className={styles.pageNumber}>Page 1 of 3</p>
          </div>
          {/*use .length to see how many pages, index to what page is being rendered */}
          <div className={styles.slide_container}>
            {/*replace this */}
            <Slider {...settings}>
              {tShirtArray.map((each, index) => (
                <div key={index} className={styles.each_slide}>
                  <div className={styles.card_entire}>
                    <button className={styles.cardAction_area} type="button">
                      <img className={styles.tShirtImage} src={tShirtArray[index].img} alt="sample" />
                      <div>
                        <h5 className={styles.tShirt_description}>{tShirtArray[index].description}</h5>
                        <div className={styles.star_and_rating}>
                          <h6 className={styles.starSpan}>{<StarRating rating={getRandomStar(6)}/>}</h6>
                          <p className={styles.rating}>{getRandomInt(300)}</p>
                        </div>
                        <div className={styles.priceAndPrime}>
                          <h7 className={styles.price}>{tShirtArray[index].price}</h7>
                          <img className={styles.primeImg} src="https://seeklogo.com/images/A/amazon-prime-icon-logo-484A50E84F-seeklogo.com.png"></img>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </footer>
    );
  }

export default T_shirt_line