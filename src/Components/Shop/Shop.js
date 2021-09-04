import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import fakeData from '../../Fake data/fakeData.json'
 
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([])
    console.log(products)
    useEffect(() => {
        setProducts(fakeData)

    }, [])
    const handleCart =(product) => {
        console.log('add',product)
        const newCart =[...cart,product];
        setCart(newCart)
    }
    return (
        <div className='shop'>

            <div className="product-container">
                {
                    products.map(product => <Product handleCart={handleCart} key={product.id} product={product}></Product>)
                }
            </div>

            <div className="cart-container">
                  <h1> cart: {cart.length}</h1>
            </div>

        </div>
    );
};

export default Shop; <h1>Product is coming</h1>