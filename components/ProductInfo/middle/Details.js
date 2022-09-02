import style from "../../../styles/Middle.module.css";

const Details = () => {
  return (
    <div className={style.details}>
      <div className={style.productContainers}>
        <h2 className={style.h2}>Product Details</h2>
        <div className={style.fabric}>
          <h3 className={style.h3}>Fabric Type</h3>
          <span className={style.data}>
            Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester;
            All Other Heathers: 50% Cotton, 50% Polyester
          </span>
        </div>
        <div className={style.care}>
          <h3 className={style.h3}>Care Instructions</h3>
          <span className={style.data}>Machine Wash</span>
        </div>
        <div className={style.origin}>
          <h3 className={style.h3}>Origin</h3>
          <span className={style.data}>Imported</span>
        </div>
        <div className={style.closure}>
          <h3 className={style.h3}>Closure Type</h3>
          <span className={style.data}>Pull On</span>
        </div>
      </div>

      <div className={style.about}>
        <h2 className={style.h2}>About this Item</h2>
        <ul className={style.aboutBullets}>
          <li className={style.aboutdata}>
            Our funny joke If You Ain't Crocin' You Ain't Rockin' Gift is a
            perfect gift for men women on birthday, Christmas or any holiday.
          </li>
          <li className={style.aboutdata}>Funny Shirt.</li>
          <li className={style.aboutdata}>
            Lightweight, Classic fit, Double-needle sleeve and bottom hem
          </li>
        </ul>
      </div>

      <div className={style.description}>
        <h2 className={style.h2}>Description</h2>
        <p className={style.descriptiondata}>
          Our funny joke If You Ain't Crocin' You Ain't Rockin' Gift is a
          perfect gift for men women on birthday, Christmas or any holiday.
          Funny Shirt. This The Party Don't Start Til l Croc In item is designed
          by The Party Don't Start Til l Croc In Shirts & Gifts.
        </p>
      </div>
      <div className={style.bottomAdd}></div>
    </div>
  );
};

export default Details;
