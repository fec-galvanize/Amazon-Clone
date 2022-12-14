import { useState } from "react";
import style from "../../styles/Cart.module.css";
import { useDispatch } from "react-redux";
import { updateCartCount } from "../../redux/features/prodInfo-slice";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Cart = () => {
  const dispatch = useDispatch();

  const { size } = useSelector(({ prodInfo: { size } }) => ({
    size,
  }));

  const [showPop, setShowPop] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSecureAlert, setShowSecureAlert] = useState(false);
  const [showReturnAlert, setShowReturnAlert] = useState(false);
  const [showPrimeAlert, setShowPrimeAlert] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={style.mainCart} aria-label="main cart">
      {!size || size === "false" ? (
        <div className={style.smallContainer}>
          <div className={style.addTo}>
            <span
              className={style.selectSize}
              aria-label="instructions on how to add item to cart"
            >
              To buy, select <b> Size </b>
            </span>
          </div>
          <div
            onMouseEnter={() => setShowAlert(true)}
            onMouseLeave={() => setShowAlert(false)}
          >
            <div>
              <button id={style.btnAddCart} aria-label="add cart button">
                Add to Cart
              </button>
            </div>

            {showAlert && (
              <div
                className={style.grabAgain}
                aria-label="pop up indicating user error"
              >
                <div className={style.selectItemDiv}>
                  <span>
                    <p>Select from the left to add to Shopping Cart</p>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className={style.emptyDiv}></div>
          <div>
            <a
              href="https://www.amazon.com/cart/add-to-cart/ref=dp_start-bbf_1_glance"
              aria-label="add to list link"
            >
              <button
                className={style.btnListAdd}
                aria-label="add to list button"
              >
                Add to List
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className={`${style.container}`}>
          <div>
            <div className={style.pricing}>
              <span id={style.symbol}>$</span>
              <span id={style.dollars}>17</span>
              <span id={style.fraction}>99</span>
            </div>
          </div>
          <br></br>
          <div
            className={style.delivery}
            aria-label="shipping message, data rates may apply"
          >
            <span id="shipping-message">
              Get
              <b> Fast, Free Shipping </b>
              with <br></br>
              <a
                href="https://www.amazon.com/amazonprime?_encoding=UTF8&primeCampaignId=primedp_ventures_desktopBelowThreshold&ref=primedp_ventures_desktopBelowThreshold"
                aria-label="a prime link again"
              >
                {" "}
                Amazon Prime{" "}
              </a>
            </span>
            <br></br>
            <span>
              <a
                className={style.popoverTrigger}
                href="#"
                onClick={() => {
                  setShowPop(!showPop);
                }}
                aria-label="free return info"
              >
                FREE Returns
                <div id={style.icon}></div>
                <div className={style.arrowBox} aria-modal="true"></div>
              </a>
            </span>
            {showPop && (
              <div className={style.grab} aria-label="returns">
                <div className={style.freeReturnsDiv}>
                  <span>
                    <b>Return this item for free</b>
                  </span>
                  <p>
                    You can return this item for any reason: no shipping
                    charges. The item must be returned in a new and unused
                    condition.
                  </p>
                  <a
                    href="https://www.amazon.com/gp/help/customer/display.html/ref=mk_fr_ret_dp_1?ie=UTF8&nodeId=201532130"
                    aria-label="return policy link"
                  >
                    Read the full returns policy
                  </a>
                  <div className={style.returnDiv}>
                    <div id={style.icon}></div>
                    <div className={style.arrowBox} aria-modal="true"></div>
                    <a
                      href="#"
                      onClick={() => {
                        setShowList(!showList);
                      }}
                      aria-label="how to return"
                    >
                      How to return this item:
                    </a>
                  </div>
                  {showList && (
                    <div className={style.returnList}>
                      <ul aria-label="return instructions">
                        <li>1. Go to Your Orders to start the return</li>
                        <li>2. Print the return shipping label</li>
                        <li>3. Ship it!</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <br></br>
          <div className={style.delivery}>
            <a
              className="delivery-link"
              href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GZXW7X6AKTHNUP6H"
              aria-label="amazon delivery link"
            >
              {" "}
              FREE delivery{" "}
            </a>
            <span className="text-bold">
              <span>
                <b>Tuesday, </b>
              </span>{" "}
              <br></br>
              <span>
                <b>September 6 </b>
              </span>
            </span>
            if you spend $25 <br></br> on items shipped by Amazon
          </div>
          <br></br>
          <div className={style.delivery} aria-label="delivery">
            <span className="text-bold">
              <span>
                Or fastest delivery <b>Sunday,</b>
                <br></br>
                <b>September 11. </b> Order within{" "}
              </span>{" "}
              <br></br>
              <span id="countdown" aria-label="count down for delivery">
                <span className={style.time}>13 hrs </span>
                <span className={style.time}>21 mins</span>
              </span>
            </span>
          </div>
          <br></br>
          <div>
            <div className="select-location" aria-label="select location">
              <div id={`${style.pinPoint}`} aria-label="pin icon"></div>
              <a
                href="#"
                id={style.location}
                onClick={handleShow}
                aria-label="select delivery location"
              >
                {" "}
                Select delivery location{" "}
              </a>
            </div>
            <div className={style.modal}>
              <Modal
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleClose}
              >
                <Modal.Header className={style.modalHeader}>
                  <Modal.Title className={style.modalTitle}>
                    Choose your location
                  </Modal.Title>
                </Modal.Header>
                <p className={style.upperText}>
                  Delivery options and delivary speeds may vary for different
                  locations
                </p>
                <button
                  className={style.signInAddress}
                  aria-label="sign in button"
                >
                  Sign in to see your addresses
                </button>
                <Modal.Body>
                  <div
                    className={style.lineBreak}
                    aria-label="enter u.s. zip code"
                  >
                    <span className={style.zip}>or enter a US zip code</span>
                  </div>
                  <br></br>
                  <div className={style.enterZip}>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder=""
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <button variant="outline-secondary" id={style.applyBtn}>
                        Apply
                      </button>
                    </InputGroup>
                  </div>
                  <div className={style.lineOr}>
                    <span className={style.or}>or</span>
                  </div>
                  <br></br>
                  <Form.Select
                    className={style.countryBtn}
                    aria-label="Default select example"
                  >
                    <option>Ship outside the US</option>
                    <option value="1">Australia</option>
                    <option value="2">Canada</option>
                    <option value="3">China</option>
                    <option value="4">Japan</option>
                    <option value="5">Mexico</option>
                    <option value="6">Singapore</option>
                    <option value="7">United Kingdom</option>
                    <option value="8">----------------------------</option>
                    <option value="9">Afghanistan</option>
                    <option value="10">Aland Islands</option>
                    <option value="11">Albania</option>
                    <option value="12">etc....</option>
                    <option value="13">etc....</option>
                    <option value="14">etc....</option>
                  </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                  <button
                    className={style.doneBtn}
                    variant="primary"
                    onClick={handleClose}
                  >
                    Done
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div aria-label="stock and quantity">
            <p className={style.stock}> In Stock. </p>
            <span className={style.boxshadow}>
              <span
                className={`${style.quantity}`}
                aria-label="select quantity"
              >
                <label htmlFor="select-quantity"> Qty: </label>
                <select
                  className={`${style.selectQuantity}`}
                  name="select-quantity"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </span>
            </span>
          </div>
          <br />

          <div>
            <span>
              <a
                href="https://www.amazon.com/cart/smart-wagon?newItems=055f2472-6dfa-4353-95b1-322c69ca7660,2"
                aria-label="link to amazon cart"
              >
                <button
                  className="button"
                  id={`${style.btnCart}`}
                  title="Add to Shopping Cart"
                  onClick={() => {
                    dispatch(updateCartCount());
                  }}
                  aria-label="add to the cart"
                >
                  Add to Cart
                </button>
              </a>
            </span>
          </div>

          <div>
            <a
              href="https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=amazon_checkout_us&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcheckoutportal%2Fenter-checkout.html%3Fie%3DUTF8%26asin%3DB08QV53WTG%26buyNow%3D1%26cartCustomerID%3D0%26custom-name.1.1%3DassemblyVariationId%26custom-value.1.1%3DB07537P4T9%26fromSignIn%3D1%26fulfillmentType%3D%26isBuyBack%3D%26isGift%3D0%26offeringID%3Dn1KmYmiS0ctXBqID55dcJg7JL4lffqwKvD3vxcT0hAIQJNuRHYf%25252B5fGaTiVe7crmo1ok7yDI%25252FQmYiTS2rTa5iR6lpFoxaao5cGNtsp89OQ%25252Bno3RrebFU38%25252F8Vit2M6zs0bCjZLuQrq80VbeuztmyFQ%25253D%25253D%26pickupAddressId%3D%26pickupStoreChainId%3D%26pickupStoreChainOwnerId%3D%26purchaseInputs%3DHASH%25280x7fa7d17947f0%2529%26quantity%3D1%26sessionID%3D143-5970328-0318142&pageId=amazon_checkout_us&showRmrMe=0&siteState=IMBMsgs.&suppressSignInRadioButtons=0"
              aria-label="buy it now link to amazon"
            >
              <button
                className="button"
                id={`${style.btnBuyNow}`}
                aria-label="buy it now"
              >
                {" "}
                Buy Now
              </button>
            </a>
          </div>
          <br></br>

          <div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png"
                height="15px"
              ></img>
              <a
                href="#"
                id={style.secure}
                onClick={() => {
                  setShowSecureAlert(!showSecureAlert);
                }}
                aria-label="click on secure transaction"
              >
                Secure transaction
              </a>
            </div>
            {showSecureAlert && (
              <div
                className={style.grabSecure}
                aria-label="transaction details"
              >
                <div
                  className={style.secureDiv}
                  aria-label="transaction: secure"
                >
                  <span>
                    <b>Your transaction is secure</b>
                  </span>
                  <p>
                    We work hard to protect your security and privacy. Our
                    payment security system encrypts your information during
                    transmission. We don???t share your credit card details with
                    third-party sellers, and we don???t sell your information to
                    others.{" "}
                    <a
                      href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201909010&ref_=buybox-secureTransaction-learnMore-web"
                      aria-label="learn more amazon link"
                    >
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
          <br></br>

          <div className={style.shipsold}>
            <span className={style.shipsby}> Ships from </span>
            <span className={style.amazon}> Amazon.com </span>
            <span className={style.soldby}> Sold by </span>
            <span className={style.amazon}> Amazon.com </span>
          </div>
          <br></br>

          <div
            className={style.returnpolicy}
            onMouseEnter={() => setShowReturnAlert(true)}
            onMouseLeave={() => setShowReturnAlert(false)}
          >
            <span>Return policy: </span>
            <a href="#" role="button" aria-label="refund/return/replace policy">
              Eligible for Return, Refund or Replacement within 30 days of
              receipt
            </a>
            <div id={style.icon}></div>
            {showReturnAlert && (
              <div className={style.grabReturn} aria-label="return options">
                <div
                  className={style.selectReturnDiv}
                  aria-label="return eligibility"
                >
                  <span>
                    <p>
                      This item can be returned in its original condition for a
                      full refund or replacement within 30 days of receipt.
                    </p>
                    <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GKM69DUUYKQWKWX7&ref_=dp_ret_policy">
                      Read full return policy.
                    </a>
                  </span>
                </div>
              </div>
            )}
          </div>
          <br></br>

          <div className={style.primerow}>
            <span className="logo">
              <a
                href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_wlpmember_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2FParty-Dont-Start-Til-Croc%2Fdp%2FB08QV53WTG%2Fref%3Dsr_1_3%3Fcrid%3D1H26Y1PRDYWQS%26keywords%3Dt%252Bshirt%252Bwith%252Bcrocs%26qid%3D1661871366%26sprefix%3Dt%252Bshirt%252Bwith%252Bcrocs%252Caps%252C122%26sr%3D8-3%26customId%3DB07537P4T9%26th%3D1%26psc%3D1%23%26load-pop-up%3D1"
                aria-label="amazon prime link"
              >
                <img
                  src="https://m.media-amazon.com/images/G/01/marketing/prime/Prime_Logo_RGB._CB633150114_.png"
                  alt="Amazon Prime logo"
                  className={style.logo}
                ></img>
              </a>
            </span>
            <span className={style.text}>
              Enjoy fast, FREE delivery, exclusive deals and award-winning
              movies & TV shows with Prime{" "}
            </span>
          </div>

          <div
            className={style.primeTextDiv}
            onMouseEnter={() => setShowPrimeAlert(true)}
            onMouseLeave={() => setShowPrimeAlert(false)}
            aria-label="to show or not to show, that is the question"
          >
            <a
              id={style.primetext}
              href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_wlpmember_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2FParty-Dont-Start-Til-Croc%2Fdp%2FB08QV53WTG%2Fref%3Dsr_1_3%3Fcrid%3D1H26Y1PRDYWQS%26keywords%3Dt%252Bshirt%252Bwith%252Bcrocs%26qid%3D1661871366%26sprefix%3Dt%252Bshirt%252Bwith%252Bcrocs%252Caps%252C122%26sr%3D8-3%26customId%3DB07537P4T9%26th%3D1%26psc%3D1%23%26load-pop-up%3D1"
              aria-label="try prime link"
            >
              Try Prime and start saving today with Fast, FREE Delivery
            </a>
            <div id={style.icon}></div>
            {showPrimeAlert && (
              <div className={style.grabPrime}>
                {/*not sure if i want to add this header or not
                   <header className={style.grabPrimeHeader}></header>*/}
                <div
                  className={style.selectPrimeDiv}
                  aria-label="join prime maybe"
                >
                  <span>
                    <p>
                      <h1 id={style.h1}>Amazon Prime includes:</h1>
                      Fast, FREE Delivery is available to Prime members. To
                      join, select "Try Amazon Prime and start saving today with
                      Fast, FREE Delivery" below the Add to Cart button.
                      <p>
                        <b>Amazon Prime members enjoy:</b>

                        <li>
                          Cardmembers earn 5% Back at Amazon.com with a Prime
                          Credit Card.
                        </li>
                        <li>Unlimited Free Two-Day Delivery</li>
                        <li>
                          Instant streaming of thousands of movies and TV
                          episodes with Prime Video
                        </li>
                        <li>
                          A Kindle book to borrow for free each month - with no
                          due dates
                        </li>
                        <li>
                          Listen to over 2 million songs and hundreds of
                          playlists
                        </li>
                        <li>Unlimited photo storage with anywhere access</li>
                      </p>
                      <p>
                        <b>Important: </b>Your credit card will NOT be charged
                        when you start your free trial or if you cancel during
                        the trial period. If you're happy with Amazon Prime, do
                        nothing. At the end of the free trial, your membership
                        will automatically upgrade to a monthly membership.
                      </p>
                    </p>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div>
            <a
              href="https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Faw%2Fd%2FB08QV53WTG&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&"
              aria-label="add to list link"
            >
              <button className={`${style.btnAdd}`} aria-label="add to list">
                Add to List
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
