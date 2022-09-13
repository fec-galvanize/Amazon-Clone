import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import style from "../../styles/Header.module.css";
import { useSelector } from "react-redux";
import { Popover, OverlayTrigger } from "react-bootstrap";

export default function Top() {
  //useState to loggedin true, loggedin false

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
        <p>English</p>
        <div className={`${style.galf}`}></div>
      </div>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Body>
              <h5>Accounts and Lists</h5>
              <p>Webhead Account</p>
              <p>Make It Primo</p>
              <p>Primo List</p>
            </Popover.Body>
          </Popover>
        }
      >
        <div className={`${style.login}`}>
          <div>
            <h5>Hello, Webhead</h5>
            <h4>Account</h4>
          </div>
        </div>
      </OverlayTrigger>
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={
          <Popover id={`popover-positioned-right`}>
            <Popover.Header as="h3">{`subtotal`}</Popover.Header>
            <Popover.Body>
              {cartCount !== 0 ? <p>$17.99</p> : <p>$0</p>}
              <button className={style.btnAddCart}> Add to cart </button>
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
