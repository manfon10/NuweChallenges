import React from 'react';
import { Title, Description, Category } from '../ui/Card';
import styles from './Card.module.css';

const CardPost = ({ infoCard }) => {

    const actionCard = () => {
        alert("accion :)");
    }

    return (
        <div className={styles.container_card} onClick={ () => actionCard() }>
            <Title 
                title={infoCard.title}
            />
            <Description 
                description={infoCard.description}
            />
            <Category 
                categorys={infoCard.categories}
                category={styles.category}
            />
        </div>
    );
};

export default CardPost;