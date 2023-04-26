import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tsharts = useLoaderData();
    console.log(tsharts);
    return (
        <div>
          
            <h1>hello home: {tsharts.length} </h1>
            
            
        </div>
    );
};

export default Home;