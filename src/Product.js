import React, { useState } from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
function Product(props) {
  const [{basket},dispatch] = useStateValue();

  const addToBasket = ()=>{
   dispatch({
    type:'ADD_TO_BASKET',
    item:{
      id:props.id,
      title:props.title,
      image:props.image,
      rating:props.rating

    }
   })
  }
  return (
    <div className='product'>
    <div className='proudct__info'>
     <p>{props.title}</p>
     <p className='product__'>
      <small>$</small>
      <strong>{props.price}</strong>
     </p>
     <div className='product__rating'>

        {
          Array(props.rating)
            .fill(null)
            .map((_) => (
              <p>⭐</p>
            ))}
     </div>
      </div>
     <img  src={props.image} alt='image not found error'/>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>

  )
}

export default Product
