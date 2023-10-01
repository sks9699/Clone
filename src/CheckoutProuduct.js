import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProuduct( props ) {
    const [{basket},dispatch] = useStateValue();
    const removefrombasket = ()=>{
        //remove item from basket...
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:props.id,
        });
    };
    return (
        //proudct to show
        <div className='checkoutproduct'>
            <img className = 'checkoutproductimg' src={props.image}
                alt='image not found'
            />
            <div className='checkoutproduct__info'>
                <p className='checkoutproduct__title'>{props.title}</p>
                <p className='checkoutproduct__price'>
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
                <button onClick={removefrombasket}>Remove From basket</button>
            </div>
        </div>
    );
}

export default CheckoutProuduct
