import React from 'react';
import Myself from './Myself';
import Sister from './Sister';
import Brother from './Brother';

const Father = () => {
    return (
        <div>
            <h1>Father</h1>
            <section className='father'>
            <Myself/>
            <Sister/>
            <Brother/>
            </section>
        </div>
    );
};

export default Father;