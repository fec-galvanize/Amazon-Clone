import React from "react";
import style from "../styles/Video.module.css";

const Video = () => {



    return (
    <div className={style.mainContainer}>
        <div className={style.container}>
            <div className="video">
                <span className={style.video}>Videos</span>
            </div><br></br>
            <div>
                <span className={style.helpOthers}>Help others learn about this product by uploading a video!</span>
            </div><br></br>
            <div className={style.uploadbttn}>
                <span className={style.bttnUploadIinner}>
                    <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fcreatorhub%2Fvideo%2Fupload%3FproductASIN%3DB08QV53WTG%26ref%3DRVSW%26referringURL%3DZHAvQjA4UVY1M1dURw%253D%253D&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_creatorportal_mobile_us&openid.mode=checkid_setup&language=EN_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
                    className={style.linkText}> 
                        <span className={style.textbttn}> Upload Video </span>
                    </a>
                </span>
            </div>
        </div>  

    </div>

    );
}

export default Video;