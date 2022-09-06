import React from "react";
import style from "../../styles/Foot1.module.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaSort } from "react-icons/fa";

const getToKnowUs = [
  {
    id: 1,
    name: "Careers",
    link: "https://www.amazon.jobs/en/",
  },
  {
    id: 2,
    name: "Amazon Newsletter",
    link: "https://email.aboutamazon.com/l/637851/2020-10-29/pd87g?Traffic_Source=Blog&Module=hat",
  },
  {
    id: 3,
    name: "About Amazon",
    link: "https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer&token=about",
  },
  {
    id: 4,
    name: "Sustainability",
    link: "https://sustainability.aboutamazon.com/?utm_source=gateway&utm_medium=footer&ref_=susty_footer",
  },
  {
    id: 5,
    name: "Press Center",
    link: "https://press.aboutamazon.com/",
  },
  {
    id: 6,
    name: "Investor Relations",
    link: "https://ir.aboutamazon.com/overview/default.aspx",
  },
  {
    id: 7,
    name: "Amazon Devices",
    link: "https://www.amazon.com/gp/browse.html?node=2102313011&ref_=footer_devices",
  },
  {
    id: 8,
    name: "Amazon Science",
    link: "https://www.amazon.science/",
  },
];

const makeMoneyWithUs = [
  {
    id: 1,
    name: "Sell products on Amazon",
    link: "https://sell.amazon.com/?ld=AZFSSOA&ref_=footer_soa",
  },
  {
    id: 2,
    name: "Sell apps on Amazon",
    link: "https://developer.amazon.com/",
  },
  {
    id: 3,
    name: "Supply to Amazon",
    link: "https://supply.amazon.com/",
  },
  {
    id: 4,
    name: "Become an Affiliate",
    link: "https://affiliate-program.amazon.com/",
  },
  {
    id: 5,
    name: "Become a Delivery Driver",
    link: "https://amazon-na.fountain.com/jobs/amazon-delivery-service-partner?utm_source=amazon.com&utm_medium=footer&distance=50mi",
  },
  {
    id: 6,
    name: "Start a package delivery business",
    link: "https://logistics.amazon.com/marketing?utm_source=amzn&utm_medium=footer&utm_campaign=home",
  },
  {
    id: 7,
    name: "Advertise Your Products",
    link: "https://advertising.amazon.com/?ref=ext_amzn_ftr",
  },
  {
    id: 8,
    name: "Self-Publish with Us",
    link: "https://kdp.amazon.com/en_US/",
  },
  {
    id: 9,
    name: "Host an Amazon Hub",
    link: "https://www.amazon.com/b/?node=13853235011",
  },
  {
    id: 10,
    name: "› See More Ways to Make Money",
    link: "https://www.amazon.com/b/?node=18190131011&ld=AZUSSOA-seemore&ref_=footer_seemore",
  },
];

const amazonPaymentProducts = [
  {
    id: 1,
    name: "Amazon Rewards Visa Signature Cards",
    link: "https://www.amazon.com/ap/signin?clientContext=132-2587416-0418568&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fcredit%2Frewardscard%2Fmember%3Fref_%3Dfooter_cbcc%26plattr%3DCBFOOT&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_creditwebsite_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=Amazon&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.pape.max_auth_age=3600&siteState=clientContext%3D146-8771130-1202352%2CsourceUrl%3Dhttps%253A%252F%252Fwww.amazon.com%252Fcredit%252Frewardscard%252Fmember%253Fref_%253Dfooter_cbcc%2526plattr%253DCBFOOT%2Csignature%3DVxj2BtiouAbMiUiO6pYj2FmwMGSMHOQj3D",
  },
  {
    id: 2,
    name: "Amazon Store Card",
    link: "https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fcredit%2Fstorecard%2Fmember%3Fplattr%3DPLCCFOOT%26ref_%3Dfooter_plcc&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_creditwebsite_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0",
  },
  {
    id: 3,
    name: "Amazon Secured Card ",
    link: "https://www.amazon.com/gp/product/B084KP3NG6?plattr=SCFOOT&ref_=footer_ACB",
  },
  {
    id: 4,
    name: "Amazon Business Card",
    link: "https://www.amazon.com/dp/B07984JN3L?plattr=ACOMFO&ie=UTF-8https://www.amazon.com/dp/B07984JN3L?plattr=ACOMFO&ie=UTF-8",
  },
  {
    id: 5,
    name: "Shop with Points",
    link: "https://www.amazon.com/gp/browse.html?node=16218619011&ref_=footer_swp",
  },
  {
    id: 6,
    name: "Credit Card Marketplace",
    link: "https://www.amazon.com/gp/browse.html?node=3561432011&ref_=footer_ccmp",
  },
  {
    id: 7,
    name: "Reload Your Balance",
    link: "https://www.amazon.com/gp/browse.html?node=10232440011&ref_=footer_reload_us",
  },
  {
    id: 8,
    name: "Amazon Currency Converter",
    link: "https://www.amazon.com/gp/browse.html?node=388305011&ref_=footer_tfx",
  },
];

const letUsHelpYou = [
  {
    id: 1,
    name: "Amazon and COVID-19",
    link: "https://www.amazon.com/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid",
  },
  {
    id: 2,
    name: "Your Account",
    link: "https://www.amazon.com/gp/css/homepage.html?ref_=footer_ya",
  },
  {
    id: 3,
    name: "Your Orders",
    link: "https://www.amazon.com/ap/signin?_encoding=UTF8&accountStatusPolicy=P1&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Forder-history%3Fie%3DUTF8%26ref_%3Dfooter_yo&pageId=webcs-yourorder&showRmrMe=1",
  },
  {
    id: 4,
    name: "Shipping Rates & Policies",
    link: "https://www.amazon.com/gp/help/customer/display.html?nodeId=468520&ref_=footer_shiprates",
  },
  {
    id: 5,
    name: "Amazon Prime",
    link: "https://www.amazon.com/amazonprime?_encoding=UTF8&ref_=footer_prime",
  },
  {
    id: 6,
    name: "Returns & Replacements",
    link: "https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fspr%2Freturns%2Fhomepage%2Fhomepage.html%3Fref_%3Dfooter_hy_f_4&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0",
  },
  {
    id: 7,
    name: "Manage Your Content and Devices",
    link: "https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fhz%2Fmycd%2Fmyx&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&",
  },
  {
    id: 8,
    name: "Your Recalls and Product Safety Alerts",
    link: "https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-product-safety-alerts%3Fref_%3Dfooter_bsx_ypsa&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_yourrecalls_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0",
  },
  {
    id: 9,
    name: "Amazon Assistant",
    link: "https://www.amazon.com/gp/BIT/ref=footer_bit_v2_us_A0029?bitCampaignCode=A0029",
  },
  {
    id: 10,
    name: "Help",
    link: "https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=footer_gw_m_b_he",
  },
];

const Foot1 = () => {
  return (
    <div className={style.container1}>
      {/* Button to go back to the top */}
      <div className={style.btnDiv}>
        <span className={style.topBtn} onClick={() => window.scrollTo(0, 0)}>
          Back to top
        </span>
      </div>
      {/* Each Set of Links */}
      <div className={style.allLinks}>
        {/* 1st set of links */}
        <div className={style.setOfLinks}>
          <h4 className={style.title}>Get to Know Us</h4>
          <ul className={style.links1}>
            {getToKnowUs.map((link) => {
              return (
                <a key={link.id} className={style.link} href={link.link}>
                  {link.name}
                </a>
              );
            })}
          </ul>
        </div>
        {/* 2nd set of links */}
        <div className={style.setOfLinks}>
          <h4 className={style.title}>Make Money with Us</h4>
          <ul className={style.links2}>
            {makeMoneyWithUs.map((link) => {
              return (
                <a key={link.id} className={style.link} href={link.link}>
                  {link.name}
                </a>
              );
            })}
          </ul>
        </div>
        {/* 3rd set of links */}
        <div className={style.setOfLinks}>
          <h4 className={style.title}>Amazon Payment Products</h4>
          <ul className={style.links3}>
            {amazonPaymentProducts.map((link) => {
              return (
                <a key={link.id} className={style.link} href={link.link}>
                  {link.name}
                </a>
              );
            })}
          </ul>
        </div>
        {/* 4th set of links */}
        <div className={style.setOfLinks}>
          <h4 className={style.title}>Let Us Help You</h4>
          <ul className={style.links4}>
            {letUsHelpYou.map((link) => {
              return (
                <a key={link.id} className={style.link} href={link.link}>
                  {link.name}
                </a>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={style.bottom}>
        <a
          className={style.img}
          href="https://www.amazon.com/?ref_=footer_logo"
        >
          <img
            className={style.logo}
            src="https://ljhitide.net/wp-content/uploads/2019/10/Screen-Shot-2019-10-14-at-1.41.07-PM.png"
            alt="Logo"
          ></img>
        </a>
        <div className={style.cont}>
          <div className={style.wrap}>
            <a className={style.language}>
              <div>
                <AiOutlineGlobal className={style.globe} />
              </div>
              <span className={style.lan}>English</span>
              <span>
                <FaSort className={style.arrows} />
              </span>
            </a>
          </div>
          <div className={style.wrap}>
            <a className={style.country}>
              <img
                className={style.flag}
                src="https://media.istockphoto.com/vectors/the-united-states-of-america-flag-vector-illustration-vector-id961747352?k=20&m=961747352&s=612x612&w=0&h=Hje8pMjiIxNZZX0lTZFvUfoZyPmCGcQANK3k0Y3XvZs="
                alt="Flag"
              ></img>
              <span className={style.us}>United States</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot1;
