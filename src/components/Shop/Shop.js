
import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    

    const [products, setProducts] = useState([]);

    // cart use 
    const [cart , setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])


    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart,product] // copy array
        setCart(newCart)
        addToDb(product.id) // local Storage a id ta add hobe
    }

    return (
        <div className='shop-container'>
           
            <div className="products-container">

             {
                 products.map(
                     product=><Product 
                    key={product.id}
                    product ={product}

                    handleAddToCart = {handleAddToCart}
                 ></Product>)
             }

            </div>

            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
            
        </div>
    );
};

export default Shop;