import React, { useContext } from 'react';
import { Book } from '../Grandpa/Grandpa';

const Special = () => {
    const [book, tk]=useContext(Book)
    return (
        <div>
            <h1>special</h1>
            <h1>tk-{tk}</h1>
        </div>
    );
};

export default Special;