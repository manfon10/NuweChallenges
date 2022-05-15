import React from 'react';
import { ButtonClose } from '../ui';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

const Error = ({ actionClose }) => {
    return (
        <div className={styles.container}>
            <ButtonClose 
                action={actionClose}
            />
            <div className={styles.iconStatusError}>
                <FontAwesomeIcon icon={faXmark} size="3x"/>
            </div>
            <h2>Upss</h2>
            <p>Algo ha pasado...</p>
        </div>
    );
};

export default Error;