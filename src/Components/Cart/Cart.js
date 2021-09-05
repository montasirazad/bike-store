import React from 'react';
import '../Cart/Cart.css'

const Cart = (props) => {
    const Cart = props.cart
    return (
        <div className='cart'>
            <h2>this is cart</h2>
            <h3>added items :{Cart.length}</h3>
        </div>
    );
};

export default Cart;