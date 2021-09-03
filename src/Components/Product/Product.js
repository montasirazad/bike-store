import React from 'react';
import '../Product/Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMotorcycle  } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {   model, overview, price, img } = props.product
    return (
        <div className='product'>
            <img title={model} src={img} alt="" />
            
            <h1>{model}</h1>
            <h3>Price : <small className='small'>{price}</small>  BDT</h3>
            <button> <FontAwesomeIcon icon={faMotorcycle } /> Buy this bike</button>
            <p>{overview}</p>





        </div>
    );
};

export default Product;