import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) =>{

    const {product,handleAddToCart} = props; // evabeo lekha jay

    const {id,name,img,category,seller,price,stock,ratings,ratingsCount,shipping,quantity} = props.product

    return (
        <div className='product'>
            
            <img src={img} alt="" />

            <div className='product-info'>
                <p className='product-name'>{name}</p>
             <p>Price : ${price}</p>
            <p><small>seller: {seller}</small></p>
            <p><small>Ratings : {ratings} starts</small></p>
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
            

        </div>
    );
};

export default Product;