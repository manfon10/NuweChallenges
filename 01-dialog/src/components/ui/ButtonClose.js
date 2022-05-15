import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

const ButtonClose = ({ action }) => {
    return (
        <>
            <button  className={styles.buttonClose} onClick={ () => action("") }>
                <FontAwesomeIcon 
                    icon={faXmark} 
                />
            </button>
        </>
    );
};

export default ButtonClose;