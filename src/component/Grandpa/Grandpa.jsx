import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import './Grandpa.css'

export const Ashik = createContext(0);
export const Book = createContext(0);




const Grandpa = () => {
    const [tk, setTk] = useState(0)
    const bookName='bangla' 
    const ami = 'Ashik tomi Amar Ar karona '
    return (
        <div className='grand'>
            <Book.Provider value={[bookName, tk, setTk]}>
                <Ashik.Provider value={ami}>
                    <div className='granfpa'>
                        <Father />
                    </div>

                </Ashik.Provider>
            </Book.Provider>
        </div>
    );
};

export default Grandpa;