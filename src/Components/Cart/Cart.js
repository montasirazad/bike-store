import React from 'react';
import '../Cart/Cart.css'

const Cart = (props) => {
    
    const  cart  = props.cart
     
   
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price

    }
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <h3>added items :{cart.length}</h3>
            <h4>Total price: {total}  </h4>
            <ul>
                <li> </li>
            </ul>
        </div>
    );
};

export default Cart;