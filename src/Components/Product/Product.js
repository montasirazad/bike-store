import React from 'react';
import '../Product/Product.css'

const Product = (props) => {
    const {   model, overview, price, img } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <button>Buy this bike</button>
            <h1>{model}</h1>
            <h3>Price : <small>{price}</small>  BDT</h3>
            <p>{overview}</p>





        </div>
    );
};

export default Product;