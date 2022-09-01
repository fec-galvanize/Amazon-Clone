import { useState } from "react";

import { FaFacebook, FaPinterest } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { AiOutlineMail, AiFillTwitterCircle } from "react-icons/ai";
import { ImLink } from "react-icons/im";

import { useSelector, useDispatch } from "react-redux";
import {
  changeCurrentImage,
  changeVisibleImage,
} from "../../redux/features/prodInfo-slice";

import style from "../../styles/ProdImage.module.css";
const ProdImage = () => {
  const displayImg = useSelector(({ prodInfo }) => prodInfo.visibleImage);
  const imgArray = [
    "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81t54H7ZpXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
    "https://m.media-amazon.com/images/I/71deJMlACUL._AC_UX466_.jpg",
  ];

  return (
    <div className={`${style.container}`}>
      <div className={`${style.btnDisplay}`}>
        {imgArray.map((image, i) => {
          return <ImgBtn key={i} image={image} />;
        })}
      </div>
      <div className={`${style.display}`}>
        <ShareBtn />
        <img
          className={`${style.img}`}
          src={displayImg}
          alt="the party dont start til i croc in"
        />
      </div>
    </div>
  );
};

export default ProdImage;

const ImgBtn = ({ image }) => {
  const dispatch = useDispatch();
  const displayImg = useSelector(({ prodInfo }) => prodInfo.visibleImage);

  return (
    <button
      className={`${style.btn} ${displayImg === image && style.active}`}
      onMouseEnter={() => dispatch(changeVisibleImage(image))}
    >
      <img src={image} className={`${style.img}`} />
    </button>
  );
};

const ShareBtn = () => {
  const [copyText, setCopyText] = useState("Copy Link");
  const [linksDisplay, setLinksDisplay] = useState({ display: "none" });
  const copyUrl = useSelector(({ prodInfo }) => prodInfo.pageUrl);
  const copyLink = () => {
    navigator.clipboard
      .writeText(copyUrl)
      .then(() => setCopyText("Link Copied!"))
      .then(() => setTimeout(() => setCopyText("Copy Link"), 1000));
  };
  const href = {
    email:
      "mailto:?body=I%20want%20to%20recommend%20this%20product%20at%20Amazon%0A%0AThe%20Party%20Don%27t%20Start%20Til%20l%20Croc%20In%20T-Shirt%0Aby%20Amazon.com%0ALearn%20more%3A%20https%3A%2F%2Fwww.amazon.com%2Fdp%2FB08QV53WTG%2Fref%3Dcm_sw_em_r_mt_dp_15W5YPJXG8ZK0V2WN22S%3F_encoding%3DUTF8%26psc%3D1&subject=Check%20this%20out%20on%20Amazon",
    fb: "https://www.amazon.com/gp/redirect.html/ref=cm_sw_cl_fa_dp_15W5YPJXG8ZK0V2WN22S?_encoding=UTF8&location=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fshare%3F_encoding%3DUTF8%26app_id%3D465632727431967%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.amazon.com%252Fdp%252FB08QV53WTG%252Fref%253Dcm_sw_r_fa_dp_15W5YPJXG8ZK0V2WN22S%253F_encoding%253DUTF8%2526psc%253D1%26redirect_uri%3Dhttps%253A%252F%252Fwww.amazon.com%252Fdp%252FB08QV53WTG%252Fref%253Dcm_sw_s_fa_dp_15W5YPJXG8ZK0V2WN22S%253F_encoding%253DUTF8%2526psc%253D1%26hashtag%3D%2523Amazon&token=67D11DB399BDA8132A72B28E94E2517289A3A9EE",
    pin: "https://www.amazon.com/gp/redirect.html/ref=cm_sw_cl_pi_dp_15W5YPJXG8ZK0V2WN22S?_encoding=UTF8&location=https%3A%2F%2Fpinterest.com%2Fpin%2Fcreate%2Fbutton%3Furl%3Dhttps%253A%252F%252Fwww.amazon.com%252Fdp%252FB08QV53WTG%252Fref%253Dcm_sw_r_pi_dp_15W5YPJXG8ZK0V2WN22S%253F_encoding%253DUTF8%2526psc%253D1%26description%3DThe%2520Party%2520Don%27t%2520Start%2520Til%2520l%2520Croc%2520In%2520T-Shirt%2520The%2520Party%2520Don%27t%2520Start%2520Til%2520l%2520Croc%2520In%2520Shirts%2520%2526%2520Gifts%26media%3Dhttps%253A%252F%252Fm.media-amazon.com%252Fimages%252FI%252FA13usaonutL._CLa%25257C500%25252C468%25257C81t54H7ZpXL.png%25257C0%25252C0%25252C500%25252C468%25252B0.0%25252C0.0%25252C500.0%25252C468.0_.png&token=9AA8EFF7C6C3909D3170D41A53ABF9D79A8EF3CE",
    tw: "https://www.amazon.com/gp/redirect.html/ref=cm_sw_cl_tw_dp_15W5YPJXG8ZK0V2WN22S?_encoding=UTF8&location=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Foriginal_referer%3Dhttps%25253A%25252F%25252Fwww.amazon.com%25252Fgp%25252Fproduct%25252FB08QV53WTG%25252Fref%25253Dcm_sw_r_tw_dp_15W5YPJXG8ZK0V2WN22S%25253Fie%25253DUTF8%252526psc%25253D1%26text%3DThe%2520Party%2520Don%27t%2520Start%2520Til%2520l%2520Croc%2520In%2520T-Shirt%2520The%2520Party%2520Don%27t%2520Start%2520Til%2520l%2520Croc%2520...%26related%3Damazondeals%252Camazonmp3%26url%3Dhttps%253A%252F%252Fwww.amazon.com%252Fdp%252FB08QV53WTG%252Fref%253Dcm_sw_r_tw_dp_15W5YPJXG8ZK0V2WN22S%253F_encoding%253DUTF8%2526psc%253D1%26via%3Damazon&token=E5FB53EC80CFED24755EDD959D627E22B8F921F5",
  };

  return (
    <>
      <div className={`${style.linksDisplay}`} style={linksDisplay}>
        <a href={href.email} target="_" title="Share via Email">
          <AiOutlineMail className={style.pin} style={{ color: "black" }} />{" "}
          <span>Email</span>
        </a>
        <a href={href.pin} target="_" title="Pin it on Pinterest">
          <FaPinterest className={style.pin} style={{ color: "darkred" }} />
          <span>Pinterest</span>
        </a>
        <a href={href.fb} target="_" title="Share on Facebook">
          <FaFacebook className={style.pin} style={{ color: "blue" }} />
          <span>Facebook</span>
        </a>
        <a href={href.tw} target="_" title="Share on Twitter">
          <AiFillTwitterCircle
            className={style.pin}
            style={{ color: "skyblue" }}
          />
          <span>Twitter</span>
        </a>
        <a href="#" title="Copy Links" onClick={() => copyLink()}>
          <ImLink className={style.pin} style={{ color: "black" }} />{" "}
          <span>{copyText}</span>
        </a>
      </div>
      <button
        aria-label="share"
        title="Share"
        className={`${style.share}`}
        onClick={() =>
          linksDisplay.display === "none"
            ? setLinksDisplay({ display: "flex" })
            : setLinksDisplay({ display: "none" })
        }
      >
        <IoShareOutline />
      </button>
    </>
  );
};
