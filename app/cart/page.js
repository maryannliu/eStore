'use client'

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Can use a separate component that has 'use client' when most of the page is not interactive

export default function CartPage() {
  const router = useRouter();
  const { cart, handleIncrementProduct } = useProducts();

  async function createCheckout() {
    try {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
      const lineItems = Object.keys(cart).map((item, itemIndex) => {
        return {
          price: item,
          quantity: cart[item].quantity
        }
      })
      const response = await fetch(baseURL + '/api/checkout', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ lineItems })
      });
      const data = await response.json()
      if (response.ok) {
        router.push(data.url)
      }
    }
    catch (err) {
      console.log('Error creating checkout: ', err.message)
    }
  }

  return (
    <section className="cart-section">
      <h2>Your Cart</h2>
      {Object.keys(cart).length === 0 && (<p>You have no items in your cart</p>)}
      <div className="cart-container">

        {Object.keys(cart).map((item, itemIndex) => {
          const itemData = cart[item];
          const itemQuantity = itemData?.quantity;

          const itemName = itemData?.name === "Medieval Dragon Month Planner" ? "planner" : itemData?.name;
          const imgURL = "low_res/" + itemName + ".jpeg"
          const itemDescription = itemData.description
          const itemPrice = itemData?.prices[0].unit_amount / 100


          return (
            <div key={itemIndex} className="cart-item">
              <img src={imgURL} alt={"image of product: " + itemName} />
              <div className="cart-item-info">

                <h3>{itemName}</h3>
                <p>{itemDescription.slice(0, 100)}{itemDescription.length > 100 ? "..." : ""}</p>
                <h4>${itemPrice}</h4>
                <div className="quantity-container">

                  <p><strong>Quantity</strong></p>
                  <input type="number" value={itemQuantity} placeholder="2" onChange={(e) => {
                    const newValue = e.target.value;

                    handleIncrementProduct(itemData.default_price, newValue, itemData, true)
                   }} />

                </div>

              </div>

            </div>
          )
        })}
      </div>
      <div className="checkout-container">
        <Link href={'/'}>
          <button className="btn--ghost">&larr; Continue shopping</button>
        </Link>
        <button onClick={createCheckout} className="btn--ghost">Checkout &rarr;</button>
      </div>
    </section>
  );
}
