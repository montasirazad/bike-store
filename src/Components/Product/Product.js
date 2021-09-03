import React from 'react';
import '../Product/Product.css'

const Product = (props) => {
    const {   model, overview, price, img } = props.product
    return (
        <div className='product'>
            <img title={model} src={img} alt="" />
            
            <h1>{model}</h1>
            <h3>Price : <small className='small'>{price}</small>  BDT</h3>
            <button>Buy this bike</button>
            <p>{overview}</p>





        </div>
    );
};

export default Product;