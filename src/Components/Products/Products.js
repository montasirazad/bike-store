import React from 'react';
import './Products.css'

const Products = (props) => {
    const {img , model ,price ,overview,} = props.bike;
     
    return (
        <div className='product'>
           
            <img style={{height:'400px'}} src={img} alt="" />
            <h1> {model}  </h1>
            <h2> Price: <small>{price}</small> BDT </h2>
            <button>Buy Now ..!</button>
            <p >{overview}</p>
             
        </div>
    );
};

export default Products;