import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import style from "../../styles/Header.module.css";

export default function Top() {
  //useState to loggedin true, loggedin false
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={`${style.search}`}>
      <div className={`${style.logo}`}></div>
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
      <div className={`${style.login}`}>
        {loggedIn ? (
          <div>Welcome, User</div>
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
      <div className={`${style.shoppingCart}`}>
        <BiCart className={`${style.SCI}`} />
      </div>
    </div>
  );
}

//sbtn=> submit button
//SCI=> shopping cart icon
//I think i will want to set a recoil state so that if they click the add to cart
//it will increment the number by the cart accordingly
//make user table for backend that will have First, Last, email, password, location, userID
