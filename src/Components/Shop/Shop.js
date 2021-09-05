import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import fakeData from '../../Fake data/fakeData.json'
import Cart from '../Cart/Cart';
 
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([])
    
    
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
                   <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop; <h1>Product is coming</h1>