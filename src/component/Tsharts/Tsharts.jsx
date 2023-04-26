import React from 'react';
import './Tsharts.css'

const Tsharts = ({tshart, handleAddToCart}) => {
    const{price, name, picture} = tshart;
    return (
        <div className='t-shart'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>Price:- <spen className="orengeColor"> ${price}</spen></p>
            <button onClick={() => handleAddToCart(tshart)}>By Now</button>
        </div>
    );
};

export default Tsharts;