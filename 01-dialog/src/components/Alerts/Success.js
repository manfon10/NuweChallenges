import React from 'react';
import { ButtonClose } from '../ui';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

const Success = ({ actionClose }) => {
    return (
        <div className={styles.container}>
            <ButtonClose 
                action={actionClose}
            />
            <div className={styles.iconStatusSuccess}>
                <FontAwesomeIcon icon={faCheck} size="3x"/>
            </div>
            <h2>¡Vamos!</h2>
            <p>Todo ha salido bien :)</p>
            <button onClick={ () => actionClose("") } className={styles.buttonUi}>Cerrar Pestaña</button>
        </div>
    );
};

export default Success;