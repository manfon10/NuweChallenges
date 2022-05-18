import React from 'react';
import CardPost from "./CardPost";
import styles from '../Card/Card.module.css';

const Card = ({ infoCards }) => {

    return (
        <div className={styles.container}>
            {
                infoCards.map( infoCard => (
                    <CardPost infoCard={infoCard} key={infoCard.id} />
                ))
            }
        </div>
    );
};

export default Card;