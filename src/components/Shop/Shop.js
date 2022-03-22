
import React, { useEffect, useState } from 'react';
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
        console.log(product);
        const newCart = [...cart,product] // copy array
        setCart(newCart)
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
                <h2>Order Summary </h2>
                <p>Selected Item : {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;