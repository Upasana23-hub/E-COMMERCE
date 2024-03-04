import React from 'react'
import './Shipping.css'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Shipping = () => {
  const location = useLocation();
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);
  return (
    <div className='shipp-outer'>
      <div className='shipp-inner'>
        <h3 className='ship-tex'>Shipping</h3>
        <div className='ship-inner-text'>
        <p>
          <br/>
          <b>What are the delivery charges?</b>
          <br/> <br/>
          Delivery charge varies with each Seller.
          <br/>  <br/>
          Sellers incur relatively higher shipping costs on low value items. In such cases, charging a nominal delivery charge helps them offset logistics costs.
          Please check your order summary to understand the delivery charges for individual products.
          <br/>  <br/>
          For Products listed as Flipkart Plus, a Rs 40 charge for delivery per item may be applied if the order value is less than Rs 500. While, orders of Rs 500 or above are delivered free.
          <br/> <br/>
          <b>Why does the delivery date not correspond to the delivery timeline of X-Y business days?</b>
          <br/> <br/>
          It is possible that the Seller or our courier partners have a holiday between the day your placed your order and the date of delivery, which is based on the timelines shown on the product page. In this case, we add a day to the estimated date. Some courier partners and Sellers do not work on Sundays and this is factored in to the delivery dates.
          <br/> <br/>
          <b>What is the estimated delivery time?</b>
          <br/> <br/>
          Sellers generally procure and ship the items within the time specified on the product page. Business days exclude public holidays and Sundays.
          <br/> <br/>
          Estimated delivery time depends on the following factors:
          <br/>
          <b>&diams;</b> &nbsp;&nbsp;&nbsp;The Seller offering the product
          <br/>
          <b>&diams;</b> &nbsp;&nbsp;&nbsp;Product's availability with the Seller<br/>
          <b>&diams;</b> &nbsp;&nbsp;&nbsp;The destination to which you want the order shipped to and location of the Seller.<br/> <br/>
          <b>Are there any hidden costs (sales tax, octroi etc) on items sold by Sellers on Flipkart?</b> <br/> <br/>
          There are NO hidden charges when you make a purchase on Flipkart. List prices are final and all-inclusive. The price you see on the product page is exactly what you would pay.<br/><br/>
          Delivery charges are not hidden charges and are charged (if at all) extra depending on the Seller's shipping policy.<br/><br/>
          <b>Why does the estimated delivery time vary for each seller?</b><br/><br/>
          You have probably noticed varying estimated delivery times for sellers of the product you are interested in. Delivery times are influenced by product availability, geographic location of the Seller, your shipping destination and the courier partner's time-to-deliver in your location.<br/><br/>
          Please enter your default pin code on the product page (you don't have to enter it every single time) to know more accurate delivery times on the product page itself.<br/><br/>
          <b>Seller does not/cannot ship to my area. Why?</b><br/><br/>
          Please enter your pincode on the product page (you don't have to enter it every single time) to know whether the product can be delivered to your location.<br/><br/>
          If you haven't provided your pincode until the checkout stage, the pincode in your shipping address will be used to check for serviceability.<br/><br/>
          Whether your location can be serviced or not depends on
          <br/> <br/>
          <b>&diams;</b> &nbsp;&nbsp;&nbsp;Whether the Seller ships to your location <br/> 
          <b>&diams;</b> &nbsp;&nbsp;&nbsp;Legal restrictions, if any, in shipping particular products to your location <br/> 
          <b>&diams;</b> &nbsp;&nbsp;&nbsp;The availability of reliable courier partners in your location <br/> 
          At times Sellers prefer not to ship to certain locations. This is entirely at their discretion. <br/> <br/>
          <b>Why is the CoD option not offered in my location?</b> <br/> <br/>
          Availability of CoD depends on the ability of our courier partner servicing your location to accept cash as payment at the time of delivery.<br/> <br/>
          Our courier partners have limits on the cash amount payable on delivery depending on the destination and your order value might have exceeded this limit. Please enter your pin code on the product page to check if CoD is available in your location.<br/> <br/>
          <b>I need to return an item, how do I arrange for a pick-up?</b><br/><br/>
          Returns are easy. Contact Us to initiate a return. You will receive a call explaining the process, once you have initiated a return.<br/><br/>
          Wherever possible Ekart Logistics will facilitate the pick-up of the item. In case, the pick-up cannot be arranged through Ekart, you can return the item through a third-party courier service. Return fees are borne by the Seller.<br/><br/>
          <b>I did not receive my order but got a delivery confirmation SMS/Email.</b><br/><br/>
          In case the product was not delivered and you received a delivery confirmation email/SMS, report the issue within 7 days from the date of delivery confirmation for the seller to investigate.<br/><br/>
          <b>What do the different tags like "In Stock", "Available" mean?</b><br/><br/>
          <b>'In Stock'</b><br/><br/>
          For items listed as "In Stock", Sellers will mention the delivery time based on your location pincode (usually 2-3 business days, 4-5 business days or 4-6 business days in areas where standard courier service is available). For other areas, orders will be sent by Registered Post through the Indian Postal Service which may take 1-2 weeks depending on the location.<br/><br/>
          <b>'Available'</b><br/><br/>
          The Seller might not have the item in stock but can procure it when an order is placed for the item. The delivery time will depend on the estimated procurement time and the estimated shipping time to your location.<br/><br/>
          <b>'Preorder' or 'Forthcoming'</b><br/><br/>
          Such items are expected to be released soon and can be pre-booked for you. The item will be shipped to you on the day of it's official release launch and will reach you in 2 to 6 business days. The Preorder duration varies from item to item. Once known, release time and date is mentioned. (Eg. 5th May, August 3rd week)<br/><br/>
          <b>'Out of Stock'</b><br/><br/>
          Currently, the item is not available for sale. Use the 'Notify Me' feature to know once it is available for purchase.<br/><br/>
          <b>'Imported'</b><br/><br/>
          Sometimes, items have to be sourced by Sellers from outside India. These items are mentioned as 'Imported' on the product page and can take at least 10 days or more to be delivered to you.<br/><br/>
          <b>'Back In Stock Soon'</b><br/><br/>
          The item is popular and is sold out. You can however 'book' an order for the product and it will be shipped according to the timelines mentioned by the Seller.<br/><br/>
          <b>'Temporarily Unavailable'</b><br/><br/>
          The product is currently out of stock and is not available for purchase. The product could to be in stock soon. Use the 'Notify Me' feature to know when it is available for purchase.<br/><br/>
          <b>'Permanently Discontinued'</b><br/><br/>
          This product is no longer available because it is obsolete and/or its production has been discontinued.<br/><br/>
          <b>'Out of Print'</b><br/><br/>
          This product is not available because it is no longer being published and has been permanently discontinued.<br/><br/>
          <b>Does Shopee deliver internationally?</b><br/><br/>
          As of now, Shopee doesn't deliver items internationally.<br/><br/>
          You will be able to make your purchases on our site from anywhere in the world with credit/debit cards issued in India and 21 other countries, but please ensure the delivery address is in India.<br/><br/>
        </p>

        </div>
        
      </div> 
    </div>
  )
}

export default Shipping
