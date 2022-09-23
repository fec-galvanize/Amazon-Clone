import React from "react";
import style from "../styles/Prefooter.module.css";

const Prefooter = () => {
  return (
    <div className={style.mainContainer} aria-label="prefoot">
      <div className={style.container} aria-label="recommendations">
        <div
          className={style.recommendation}
          aria-label="personalized recommendations"
        >
          <span className="recommendations">
            See personalized recommendations
          </span>
        </div>
      </div>
      <div className={style.btnSignIn} aria-label="click to sign in">
        <div className={style.signIn} aria-label="sign in">
          <a
            href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fcreatorhub%2Fvideo%2Fupload%3FproductASIN%3DB08QV53WTG%26ref%3DRVSW%26referringURL%3DZHAvQjA4UVY1M1dURw%253D%253D&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_creatorportal_mobile_us&openid.mode=checkid_setup&language=EN_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
            className={style.linkText}
            aria-label="amazon sign in link"
          >
            <span className={style.textbttn} aria-label="sign in">
              {" "}
              Sign in{" "}
            </span>
          </a>
        </div>
      </div>
      <div className={style.newCustomer} aria-label="Are you a new customer?">
        <span aria-label="you new?">
          New customer?{" "}
          <a
            href="https://www.amazon.com/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Drhf_sign_in&openid.assoc_handle=usflex"
            aria-label="new customer link"
          >
            Start here.
          </a>
        </span>
      </div>
    </div>
  );
};

export default Prefooter;
