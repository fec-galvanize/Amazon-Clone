import React from "react";
import style from "../styles/Cart.module.css";

const Cart = () => {

const addToCart = () => {
 
}

const qtyDropdown = () => {

}

const buyNow = () => {

}
const addToList = () => {

}

    return (
    <div className={`${style.container}`}> 
        <div>
            <div className={`${style.pricing}`}>
                <div className="numbers">
                    <span id="symbol">$</span>
                    <span id="dollars">17</span>
                    <span id={`${style.fraction}`}>99</span>
                </div>
            </div>
            <br></br>
            <div>
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
            <div className="delivery-block">
                <a className="delivery-link" href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GZXW7X6AKTHNUP6H"> FREE delivery </a>
                <span className="text-bold">
                    <span><b>Tuesday, </b></span> <br></br>
                    <span><b>September 6 </b></span>
                </span>
                if you spend $25 <br></br> on items shipped by Amazon
            </div><br></br>
            <div className="fastest-delivery-block">
                <span className="text-bold">
                    <span>Or fastest delivary <b>Saturday,</b><br></br><b>September 3. </b> Order within </span> <br></br>
                    <span id="countdown">
                        <span className="hours" style={{color: 'rgb(0, 118, 0)'}}>13 hrs </span>
                        <span className="minutes" style={{color: 'green'}}>21 mins</span>
                    </span>
                </span>
            </div><br></br>
            <div className="select-location">
                <div id={`${style.pinPoint}`}></div>
                <a href="javascript:void(0)"> Select delivary location </a>
            </div>
        
        <div>
            <p style={{color: 'green'}}> In Stock. </p>
            <select className="select-quantity" onClick={qtyDropdown}>Qty:</select>      
        </div><br></br>

             <div>
                 <button className={`${style.btnCart}`} title="Add to Shopping Cart" style={{backgroundColor: 'FFD814', color: 'black', }}  onClick={addToCart}>Add to Cart</button> 
             </div>
             <div>
                 <button className={`${style.btnBuyNow}`} style={{backgroundColor: 'orange', color: 'black'}} onClick={buyNow}> Buy Now</button> 
            </div><br></br>
            
            <div id="secure-transaction">
             <div> 
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png" height="15px"></img>
                <a href="javascript:void(0)"> Secure transaction</a>
            </div>
            </div><br></br>
            <div>
                <span> Ships from         Amazon.com</span>
                <span> Sold By         Amazon.poop</span>
            </div>



             <div>
                <button className={`${style.btnAdd}`} onClick={addToList}>Add to List</button>
             </div>
             
            
        </div>
        
    </div>

    )
  };
  
  export default Cart;