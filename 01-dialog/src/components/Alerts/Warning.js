import React from 'react';
import { ButtonClose } from '../ui';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

const Warning = ({ actionClose }) => {
    return (
        <div className={styles.container}>
            <ButtonClose 
                action={actionClose}
            />
            <div className={styles.iconStatusWarning}>
                <FontAwesomeIcon icon={faExclamation} size="3x"/>
            </div>
            <h2>¡Cuidado!</h2>
            <p>No podrás volver atras</p>
            <div>
                <button onClick={ () => actionClose("") } className={styles.buttonUi}>Borrar</button>
                <button onClick={ () => actionClose("") } className={styles.buttonUiTwo}>Cancelar</button>
            </div>
        </div>
    );
};

export default Warning;