import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProuduct from './CheckoutProuduct';
function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
     <img className = 'checkout__ad' src='
     https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-craze-sale-facebook-ad-design-template-b1d1738fd5e9e0f6e3152ec502a1c2e1_screen.jpg?ts=1567579016'
      alt='No Image found'
     />
     {basket?.length===0?(
      <div>
        <h2>Your Shopping basket is empty</h2>
        <p>you have no items in your basket</p>
      </div>
     ):(
      <div>
        <h2 className='checkout__title'>Your SHopping Basket</h2>
        {/*Checkout prouduct */}
            {basket?.map((item) => {
              return(
          <CheckoutProuduct
          id = {item.id}
          title = {item.title}
          image = {item.image}
          price = {item.price}
          rating = {item.rating}
          />
        );
            })}

      </div>
     )}
    </div>
  )
}

export default Checkout
