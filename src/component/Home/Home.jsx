import React, { useState } from 'react';
import './Home.css';
// import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Tsharts from '../Tsharts/Tsharts';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {


    const tsharts = useLoaderData();
    // console.log(tsharts);


    const [cart, setCart] = useState([]);
    const handleAddToCart= tshart =>{

        const exists=cart.find(ts=>ts._id ===tshart._id);
        if(exists){
            toast('You Have alrady added this Item')

        }else{
            const newCart =[...cart, tshart];
        setCart(newCart)
        }
        
    }

    const hansleRemoveFromCrat=id=>{
        const remaining =cart.filter(ts=>ts._id !== id)
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className="t-shart-container">
                {
                    tsharts.map(tshart => <Tsharts
                        key={tshart._id}
                        tshart={tshart}
                        handleAddToCart={handleAddToCart}
                    ></Tsharts>)
                }

            </div>
            <div className="cart-container">
                <Cart
                 cart={cart}
                 hansleRemoveFromCrat={hansleRemoveFromCrat}
                ></Cart>
            </div>


        </div>
    );
};

export default Home;