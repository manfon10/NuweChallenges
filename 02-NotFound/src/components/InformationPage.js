import React from 'react';
import styles from '../App.module.css';

const InformationPage = () => {
    return (
        <>
            <h2>OOPS!</h2>
            <h3>PAGE NOT FOUND</h3>
            <div>
                <button className={styles.buttonsOne}>GO HOME</button>
                <button className={styles.buttonsTwo}>GO BACK</button>
            </div>
        </>
    );
};

export default InformationPage;