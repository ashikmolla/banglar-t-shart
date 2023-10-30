import React, { useContext } from 'react';
import { Book } from '../Grandpa/Grandpa';

const Brother = () => {
    const [bookName, tk, setTk]=useContext(Book)
    return (
        <div>
            <h2>Brother</h2>
            <h5>Book :- {bookName}</h5>
            <p>amount{tk}</p>
            <button onClick={()=>setTk(tk + 100)}>Order</button>
        </div>
    );
};

export default Brother;