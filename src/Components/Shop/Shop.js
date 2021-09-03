import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import fakeData from '../../Fake data/fakeData.json'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(() => {
        setProducts(fakeData)

    }, [])
    return (
        <div className='shop'>

            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Shop; <h1>Product is coming</h1>