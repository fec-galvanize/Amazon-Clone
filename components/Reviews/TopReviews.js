import StarRating from "../StarRating";
import style from "../../styles/RevTopRevs.module.css";
import { useEffect, useState } from "react";

const TopReviews = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const res = await fetch("/api/reviews");
    const { data } = await res.json();

    await setReviews(data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className={style.container}>
      <select name="reviewType" className={style.reviewType}>
        <option value="top_reviews">Top Reviews</option>
        <option value="most_recent">Most Recent</option>
      </select>
      <h3>Top Reviews from the United States</h3>
      <div className={style.reviewContainer}>
        {reviews.map(
          ({
            picture,
            name,
            rating,
            subject,
            country,
            date,
            verified_purchase,
            review_body,
          }) => {
            return (
              <Review
                key={subject}
                profilePicture={picture}
                customerName={name}
                rating={rating}
                subject={subject}
                country={country}
                date={date}
                verifiedPurchase={verified_purchase}
                reviewBody={review_body}
              />
            );
          }
        )}
        <Review />
      </div>
      <a className={style.seeAll}>See all reviews {">"}</a>
    </div>
  );
};

export default TopReviews;

const Review = ({
  profilePicture,
  customerName,
  rating,
  subject,
  country,
  date,
  verifiedPurchase,
  reviewBody,
}) => {
  return (
    <div className={style.review}>
      <div className={style.profilePic}>
        <img src={profilePicture} alt="Profile Picture" />
        <span>{customerName}</span>
      </div>
      <a href="">
        <StarRating rating={rating} size={"1rem"} />
        <span className={style.subject}>{subject}</span>
      </a>
      <p className={style.date}>
        Reviewed in the {country} on {date}
      </p>
      {verifiedPurchase && (
        <a className={style.verified}> Verified Purchase </a>
      )}
      <p>{reviewBody}</p>
      <div className={style.buttonWrap}>
        <a href="https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB08QV53WTG%2Fref%3Dcm_cr_othr_d_vote_lft%3Fie%3DUTF8%26csrfT%3DhO3ROsF2hBy%252BqC8KsYfML2HRmHwr0sdFIc3Eg3pD22AlAAAAAGMXsKgAAAAB%26reviewId%3DR21DQLDQC9LD3H%23R21DQLDQC9LD3H&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&language=en&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
          <button className={style.helpful}>Helpful</button>
        </a>
        <span className={style.pipe}>|</span>
        <a className={style.abuse}>Report Abuse</a>
      </div>
    </div>
  );
};
Review.defaultProps = {
  profilePicture:
    "https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png",
  customerName: "Amazon Customer",
  rating: 4,
  subject: "Nice smell",
  country: "United States",
  date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)).toLocaleDateString(
    undefined,
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  ),
  verifiedPurchase: true,
  reviewBody:
    "adklfladhfdjkghsduasdjlhgasdukghfuiaegfjknaeufhkasdbgfksbgksbgksbgjkl;shnbgmnsbnsbklnsrlnggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
};
