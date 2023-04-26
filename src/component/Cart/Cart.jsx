import React from 'react';

const Cart = ({cart, hansleRemoveFromCrat}) => {
    let messeg;
    if(cart.length === 0){
        messeg=<p>Please add some Products</p>
    }
  
    return (
        <div>
            <h1> Order Summaary:- {cart.length} </h1>
            {messeg}
            {
                cart.map(tshart=>
                    <p key={tshart._id}>{tshart.name} <button onClick={()=>hansleRemoveFromCrat(tshart._id)}>X</button></p>
                    )
            }
        </div>
    );
};

export default Cart;