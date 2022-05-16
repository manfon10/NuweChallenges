import React from 'react';
import { Astronauta } from '../assets';

const Astronaut = ({ style }) => {
    return (
        <>
            <img src={Astronauta} alt="Astronauta" className={style} />
        </>
    );
};

export default Astronaut;