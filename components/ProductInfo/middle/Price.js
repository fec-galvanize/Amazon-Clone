import style from "../../../styles/Middle.module.css";

const Price = () => {
  return (
    <div className={style.price} aria-label="price">
      <div className={style.numbers} aria-label="numbers">
        <span className={style.symbol}>$</span>
        <span className={style.dollars}>17</span>
        <span className={style.cents}>99</span>
      </div>
      <div className={style.primePlug} aria-label="prime plug">
        <span>
          Get
          <b> Fast, Free Shipping </b>
          with
          <a className={style.prime} aria-label="get prime link">
            {" "}
            Amazon Prime{" "}
          </a>
          {/* this anchor tag doesn't have an href btw -IH*/}
        </span>
      </div>
      <div className={style.freeReturns} aria-label="free returns">
        <span>&</span>
        <span className={style.free}> FREE Returns </span>
      </div>
      <div className={style.merchPlug} aria-label="merch plug">
        <div className={style.image} aria-label="hold picture of the merch">
          <img
            className={style.merchpic}
            alt="Amazon merch on demand"
            src="https://images-na.ssl-images-amazon.com/images/G/01/Merch/logo/amazon_merch_on_demand_logo2x._CB650496796_.png"
          ></img>
          <span className={style.learn} aria-label="Learn">
            {" "}
            Learn more
          </span>
        </div>
      </div>
    </div>
  );
};

export default Price;
