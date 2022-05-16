import React from 'react';
import { Astronaut } from './';

const Numbers = ({ style }) => {
    return (
        <>
            <h1 className={style.numberOne}>4</h1>
            <Astronaut style={style.astronaut} />
            <h1 className={style.numberTwo}>4</h1>
        </>
    );
};

export default Numbers;