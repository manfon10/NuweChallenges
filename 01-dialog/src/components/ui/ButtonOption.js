import React from 'react';

const ButtonOption = ({ setType }) => {
    return (
        <>
            <button onClick={ () => setType("Error")}>Error</button>
            <button onClick={ () => setType("Success")}>Success</button>
            <button onClick={ () => setType("Warning")}>Warning</button>
        </>
    );
};

export default ButtonOption;