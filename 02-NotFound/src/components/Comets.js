import React from 'react';
import { Cometa } from '../assets';

const Comets = ({ style }) => {
    return (
        <>
            <img src={Cometa} alt="Cometa" className={style} />
        </>
    );
};

export default Comets;