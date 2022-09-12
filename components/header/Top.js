import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import style from "../../styles/Header.module.css";
import { useSelector } from "react-redux";
import { Popover, OverlayTrigger, Image } from "react-bootstrap";
import flag from "../../public/images/flag.jpg";

export default function Top() {
  //useState to loggedin true, loggedin false
  const [loggedIn, setLoggedIn] = useState(false);

  const cartCount = useSelector(({ prodInfo: { cartCount } }) => cartCount);

  return (
    <div className={`${style.search}`}>
      <div className={`${style.logo}`}>
        <a href="https://www.amazon.com/ref=nav_logo"></a>
      </div>
      <div className={`${style.location}`}>
        <IoLocationOutline className={`${style.locpin}`} />
        city, state
      </div>
      <form className={`${style.form}`}>
        <input className={`${style.input}`} type="text" />
        <button className={`${style.sbtn}`} type="submit">
          <FaSearch />
        </button>
      </form>
      <div className={`${style.flag}`}>
        <Image src={flag} fluid thumbnail />
      </div>
      <div className={`${style.login}`}>
        {loggedIn ? (
          <div>
            <h5>Hello, Webhead</h5>
          </div>
        ) : (
          <div>
            Log In
            <form className={`${style.userLogin}`}>
              <input type="text" placeholder="user name" />
              <input type="text" placeholder="password" />
              <button
                className={`${style.logbutton}`}
                type="submit"
                onClick={setLoggedIn(true)}
              ></button>
            </form>
          </div>
        )}
      </div>
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={
          <Popover id={`popover-positioned-right`}>
            <Popover.Header as="h3">{`subtotal`}</Popover.Header>
            <Popover.Body>
              {cartCount !== 0 ? <p>$17.99</p> : <p>$0</p>}
              <button> add to cart </button>
            </Popover.Body>
          </Popover>
        }
      >
        <div className={`${style.shoppingCart}`}>
          <BiCart className={`${style.SCI}`} />
          {`Cart ${cartCount}`}
        </div>
      </OverlayTrigger>
    </div>
  );
}

//sbtn=> submit button
//SCI=> shopping cart icon
//I think i will want to set a recoil state so that if they click the add to cart
//it will increment the number by the cart accordingly
//make user table for backend that will have First, Last, email, password, location, userID
//tried to make anchor tag in logo work, it does not
