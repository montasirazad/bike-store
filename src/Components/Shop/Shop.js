import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import fakeData from '../../Fake data/fakeData.json'
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(() => {
        setProducts(fakeData)

    }, [])
    return (
        <div  >
             
             {
                 products.map( product=> <Product key={product.id} product={product}></Product>)
             }

        </div>
    );
};

export default Shop; <h1>Product is coming</h1>