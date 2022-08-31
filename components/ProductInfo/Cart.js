import style from "../../styles/Cart.module.css";

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
            <div className="pricing">
                <div className="numbers">
                    <span id="symbol">$</span>
                    <span id="dollars">17</span>
                    <span id="decimal">.</span>
                    <span id="fraction">99</span>
                </div>
            </div>
            <br></br>
            <div>
                <span id="shipping-message">
                Get
                <b> Fast, Free Shipping </b>
                with <br></br>
                <a href="https://www.amazon.com/amazonprime?_encoding=UTF8&primeCampaignId=primedp_ventures_desktopBelowThreshold&ref=primedp_ventures_desktopBelowThreshold" target="_blank"> Amazon Prime </a>
                </span>
                <br></br>
                <span>
                    <a class="popover-trigger" href="javascript:void(0)">
                    FREE Returns 
                    </a>
                </span>
            </div>
            <br></br>
            <div className="delivery-block">
                <a class="delivery-link" href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GZXW7X6AKTHNUP6H"> FREE delivery </a>
                <span class="text-bold">
                    <span><b>Tuesday, </b></span> <br></br>
                    <span><b>September 6 </b></span>
                </span>
                if you spend $25 <br></br> on items shipped by Amazon
            </div><br></br>
            <div className="fastest-delivery-block">
                <span class="text-bold">
                    <span>Or fastest delivary <b>Saturday,</b><br></br><b>September 3. </b> Order within </span> <br></br>
                    <span id="countdown">
                        <span class="hours" style={{color: 'green'}}>13 hrs </span>
                        <span class="minutes" style={{color: 'green'}}>21 mins</span>
                    </span>
                </span>
            </div><br></br>
            <div class="select-location">
                <a href="javascript:void(0)"> Select delivary location </a>
            </div>
        
        <div>
            <p style={{color: 'green'}}> In Stock. </p>
            <button className="btn-quantity" onClick={qtyDropdown}>Qty:</button>
        </div><br></br>
             <div>
            <button class={`${style.btnCart}`} style={{backgroundColor: 'yellow', color: 'black', }} onClick={addToCart}>Add to Cart</button> 
            </div>
        <div>
             <button class={`${style.btnBuyNow}`} style={{backgroundColor: 'orange', color: 'black'}} onClick={buyNow}> Buy Now</button> 
        </div><br></br>
        <div id="secure-transaction">

        </div>
        <div>
                <button className={`${style.btnAdd}`} onClick={addToList}>Add to List</button>
        </div>
        </div>
    
    </div>

    )
  };
  
  export default Cart;