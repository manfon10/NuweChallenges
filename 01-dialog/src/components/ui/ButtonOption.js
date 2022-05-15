import React from 'react';
import styles from './styles.module.css';

const ButtonOption = ({ setType }) => {
    return (
        <>
            <button onClick={ () => setType("Error")} className={styles.buttonOption}>Error</button>
            <button onClick={ () => setType("Success")} className={styles.buttonOption}>Success</button>
            <button onClick={ () => setType("Warning")} className={styles.buttonOption}>Warning</button>
        </>
    );
};

export default ButtonOption;