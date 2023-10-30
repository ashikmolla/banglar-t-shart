import React, { useContext } from 'react';
import { Ashik } from '../Grandpa/Grandpa';

const Sister = () => {
    const usePropider=useContext(Ashik)
    return (
        <div>
            <h2>Sister</h2>
            <p>Ami boltesi{usePropider}</p>
        </div>
    );
};

export default Sister;