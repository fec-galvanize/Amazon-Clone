import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import style from "../../styles/Header.module.css";
import { useSelector } from "react-redux";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { BsList } from "react-icons/bs";

export default function Header() {
  //useState to loggedin true, loggedin false

  const cartCount = useSelector(({ prodInfo: { cartCount } }) => cartCount);
  const [categories, setCategories] = useState([]);
  const [fashCat, setFashCat] = useState([]);

  function getCat() {
    fetch("/api/mheader")
      .then((data) => {
        return data.json();
      })
      .then((cats) => {
        setCategories(cats);
      });
  }

  function getFashCats() {
    fetch("/api/fheader")
      .then((data) => {
        return data.json();
      })
      .then((fcats) => {
        setFashCat(fcats);
      });
  }

  useEffect(() => {
    getCat();
    getFashCats();
  }, []);
  return (
    <div className={`${style.allHead}`} aria-label="website header">
      <>
        <div className={`${style.search}`}>
          <div className={`${style.logo}`} aria-label="webhead logo">
            <a
              href="https://www.amazon.com/ref=nav_logo"
              aria-label="amazon link"
            ></a>
          </div>
          <div className={`${style.location}`} aria-label="location option">
            <IoLocationOutline className={`${style.locpin}`} />
            city, state
          </div>
          <form className={`${style.form}`}>
            <input className={`${style.input}`} type="text" />
            <button
              className={`${style.sbtn}`}
              type="submit"
              aria-label="search button"
            >
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
            <div className={`${style.login}`} aria-label="login here">
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
                  <button className={style.btnAddCart} aria-label="add to cart">
                    {" "}
                    Add to cart{" "}
                  </button>
                </Popover.Body>
              </Popover>
            }
          >
            <div
              className={`${style.shoppingCart}`}
              aria-label="shopping cart and total"
            >
              <BiCart className={`${style.SCI}`} />
              {`Cart ${cartCount}`}
            </div>
          </OverlayTrigger>
        </div>
        <div
          className={`${style.midhead}`}
          aria-label="Amazon product categories"
        >
          <div className={`${style.allcat}`}>
            <BsList className={`${style.iconlist}`} />
          </div>
          <ul className={`${style.cats}`} aria-label="category">
            {categories.map((e) => {
              return (
                <li
                  key={e.title}
                  className={`${style.li}`}
                  aria-label={e.title}
                >
                  <a
                    className={`${style.li}`}
                    href={e.ulink}
                    aria-label={e.title}
                  >
                    {e.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`${style.afash}`} aria-label="fashion categories">
          <div className="fashcats">
            <ul className={`${style.catsf}`}>
              <strong>AMAZON FASHION</strong>
              {fashCat.map((e) => {
                return (
                  <li
                    key={e.title}
                    className={`${style.lif}`}
                    aria-label={e.title}
                  >
                    <a
                      className={`${style.lif}`}
                      href={e.ulink}
                      aria-label={e.title}
                    >
                      {e.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    </div>
  );
}
