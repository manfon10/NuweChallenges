import React from 'react';
import { VenusImg } from '../assets';

const Venus = ({ style }) => {
    return (
        <>
            <img src={VenusImg} alt="Venus" className={style} />
        </>
    );
};

export default Venus;