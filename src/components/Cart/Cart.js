import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 10/100 ).toFixed(2)); // toFixed(2) dui decimal porjonto value dekhabe

    //grand total

    const grandTotal = total + shipping + tax ;

    return (
        <div className='cart'>
            <h2>Order Summary </h2>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price : ${total} </p>
            <p>Total Shipping : ${shipping} </p>
            <p>Tax : {tax} </p>
            <h4>Grand Total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;