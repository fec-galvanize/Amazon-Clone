import style from "../../../styles/Middle.module.css";

const Price = () => {
  return (
    <div className={style.price}>
      <div className={style.numbers}>
        <span className={style.symbol}>$</span>
        <span className={style.dollars}>17</span>
        <span className={style.cents}>99</span>
      </div>
      <div className={style.primePlug}>
        <span>
          Get
          <b> Fast, Free Shipping </b>
          with
          <a className={style.prime}> Amazon Prime </a>
        </span>
      </div>
      <div className={style.freeReturns}>
        <span>&</span>
        <span className={style.free}> FREE Returns </span>
      </div>
      <div className={style.merchPlug}>
        <div className={style.image}>
          <img
            className={style.merchpic}
            alt="Amazon merch on demand"
            src="https://images-na.ssl-images-amazon.com/images/G/01/Merch/logo/amazon_merch_on_demand_logo2x._CB650496796_.png"
          ></img>
          <span className={style.learn}> Learn more</span>
        </div>
      </div>
    </div>
  );
};

export default Price;
