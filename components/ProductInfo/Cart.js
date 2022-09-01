// import style from "../../styles/Cart.module.css";

// const Cart = () => {
//   const addToCart = () => {};

//   const qtyDropdown = () => {};

//   const buyNow = () => {};
//   const addToList = () => {};

//   return (
//     <div className={`${style.container}`}>
//       <div>
//         <div className="pricing">
//           <div className="numbers">
//             <span id="symbol">$</span>
//             <span id="dollars">17</span>
//             <span id="decimal">.</span>
//             <span id="fraction">99</span>
//           </div>
//         </div>
//         <br></br>
//         <div>
//           <span id="shipping-message">
//             Get
//             <b> Fast, Free Shipping </b>
//             with <br></br>
//             <a
//               href="https://www.amazon.com/amazonprime?_encoding=UTF8&primeCampaignId=primedp_ventures_desktopBelowThreshold&ref=primedp_ventures_desktopBelowThreshold"
//               target="_blank"
//             >
//               {" "}
//               Amazon Prime{" "}
//             </a>
//           </span>
//           <br></br>
//           <span>
//             <a className="popover-trigger" href="javascript:void(0)">
//               FREE Returns
//             </a>
//           </span>
//         </div>
//         <br></br>
//         <div className="delivery-block">
//           <a
//             className="delivery-link"
//             href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GZXW7X6AKTHNUP6H"
//           >
//             {" "}
//             FREE delivery{" "}
//           </a>
//           <span className="text-bold">
//             <span>
//               <b>Tuesday, </b>
//             </span>{" "}
//             <br></br>
//             <span>
//               <b>September 6 </b>
//             </span>
//           </span>
//           if you spend $25 <br></br> on items shipped by Amazon
//         </div>
//         <br></br>
//         <div className="fastest-delivery-block">
//           <span className="text-bold">
//             <span>
//               Or fastest delivary <b>Saturday,</b>
//               <br></br>
//               <b>September 3. </b> Order within{" "}
//             </span>{" "}
//             <br></br>
//             <span id="countdown">
//               <span className="hours" style={{ color: "green" }}>
//                 13 hrs{" "}
//               </span>
//               <span className="minutes" style={{ color: "green" }}>
//                 21 mins
//               </span>
//             </span>
//           </span>
//         </div>
//         <br></br>
//         <div className="select-location">
//           <a href="javascript:void(0)"> Select delivary location </a>
//         </div>

//         <div>
//           <p style={{ color: "green" }}> In Stock. </p>
//           <button className="btn-quantity" onClick={qtyDropdown}>
//             Qty:
//           </button>
//         </div>
//         <br></br>
//         <div>
//           <button
//             className={`${style.btnCart}`}
//             style={{ backgroundColor: "yellow", color: "black" }}
//             onClick={addToCart}
//           >
//             Add to Cart
//           </button>
//         </div>
//         <div>
//           <button
//             className={`${style.btnBuyNow}`}
//             style={{ backgroundColor: "orange", color: "black" }}
//             onClick={buyNow}
//           >
//             {" "}
//             Buy Now
//           </button>
//         </div>
//         <br></br>
//         <div id="secure-transaction"></div>
//         <div>
//           <button className={`${style.btnAdd}`} onClick={addToList}>
//             Add to List
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import style from "../../styles/Cart.module.css";

const Cart = () => {

const addToCart = () => {
 
}


const buyNow = () => {

}
const addToList = () => {

}

    return (
    <div className={`${style.container}`}> 
        <div>
            <div className="pricing">
                    <span id={style.symbol}>$</span>
                    <span id={style.dollars}>17</span>
                    <span id={style.fraction}>99</span>
            </div>
            <br></br>
            <div className={style.delivery}>
                <span id="shipping-message">
                Get
                <b> Fast, Free Shipping </b>
                with <br></br>
                <a href="https://www.amazon.com/amazonprime?_encoding=UTF8&primeCampaignId=primedp_ventures_desktopBelowThreshold&ref=primedp_ventures_desktopBelowThreshold"> Amazon Prime </a>
                </span>
                <br></br>
                <span>
                    <a className="popover-trigger" href="javascript:void(0)">
                    FREE Returns 
                    </a>
                </span>
            </div>
            <br></br>
            <div className={style.delivery}>
                <a className="delivery-link" href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GZXW7X6AKTHNUP6H"> FREE delivery </a>
                <span className="text-bold">
                    <span><b>Tuesday, </b></span> <br></br>
                    <span><b>September 6 </b></span>
                </span>
                if you spend $25 <br></br> on items shipped by Amazon
            </div><br></br>
            <div className={style.delivery}>
                <span className="text-bold">
                    <span>Or fastest delivary <b>Saturday,</b><br></br><b>September 3. </b> Order within </span> <br></br>
                    <span id="countdown">
                        <span className={style.time}>13 hrs </span>
                        <span className={style.time}>21 mins</span>
                    </span>
                </span>
            </div><br></br>
            <div className="select-location">
                <div id={`${style.pinPoint}`}></div>
                <a href="javascript:void(0)" id={style.location}> Select delivary location </a>
            </div>
        
        <div>
            <p className={style.stock}> In Stock. </p>
            <span className={style.boxshadow}>
             <span className={`${style.quantity}`}>
             <label for="select-quantity"> Qty: </label>
             <select className={`${style.selectQuantity}`} name="select-quantity">
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
        </div><br></br>

             <div>
              <span>
                 <button className={`${style.btnCart}`} title="Add to Shopping Cart" onClick={addToCart}>Add to Cart</button> 
              </span>
             </div>

             <div>
                 <button className={`${style.btnBuyNow}`} onClick={buyNow}> Buy Now</button> 
            </div><br></br>
            
            <div id={style.secure}>
             <div> 
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png" height="15px"></img>
                <a href="javascript:void(0)"> Secure transaction</a>
            </div>
            </div><br></br>

            <div className={style.shipsold}>
                <span className={style.shipsby}> Ships from </span> 
                <span className={style.amazon}> Amazon.com </span>
                <span className={style.soldby}> Sold by </span> 
                <span className={style.amazon}> Amazon.com </span>
            </div><br></br>

            <div className={style.returnpolicy}>
              <span>Return policy: </span>
              <a href="javascript:void(0)" role="button">Eligible for Return, 
              Refund or Replacement within 30 days of receipt</a><span id={style.icon}></span> 
            </div><br></br>

            <div className={style.primerow}>
              <span className="logo">
                <a href='#'>
                  <img src="https://m.media-amazon.com/images/G/01/marketing/prime/Prime_Logo_RGB._CB633150114_.png"
                  alt="Amazon Prime logo" className={style.logo}></img>
                </a>
              </span>
              <span className={style.text}>Enjoy fast, FREE delivary, 
              exclusive deals and award-winning movies & TV shows with Prime </span>
            </div><br></br>
            <a id={style.primetext} href="#">Try Prime and start saving today with Fast, FREE Delivery</a>

        



             <div>
                <button className={`${style.btnAdd}`} onClick={addToList}>Add to List</button>
             </div>
             
            
        </div>
        
    </div>

    )
  };
  
  export default Cart;