import React from 'react';

import { Card } from '../components/Card/Card';
import { CardPost } from '../components/Card/CardPost';

export default {
    title: 'Card/Card',
    component: Card
};

const Template = (args) => <Card {...args} />;

export const CardItem = Template.bind({});
CardItem.args = {
    infoCards: [
        {
            id: 1,
            title: "Crew 💥",
            description: "Lista de regalos para el grupo Crew 💥",
            categories: [ 
                {
                    id: 1,
                    name: "Deportes de riesgo"
                }, 
                {
                    id: 2,
                    name: "Libros"
                }
            ]
        },
        {
            id: 2,
            title: "Family 👪",
            description: "Lista de regalos para el grupo Family 👪",
            categories: [ 
                {
                    id: 1,
                    name: "Family"
                }, 
                {
                    id: 2,
                    name: "Sport"
                }
            ]
        },
        {
            id: 3,
            title: "Friends 🙍‍♂️",
            description: "Lista de regalos para el grupo Friends 🙍‍♂️",
            categories: [ 
                { 
                    id: 1,
                    name: "Family"
                }, 
                {
                    id: 2,
                    name: "Humanos"
                }
            ]
        },
        {
            id: 4,
            title: "Work 🧑‍💼",
            description: "Lista de regalos para el grupo Work 🙍‍♂️",
            categories: [ 
                { 
                    id: 1,
                    name: "Work"
                }, 
                {
                    id: 2,
                    name: "Friends"
                }
            ]
        }
    ]
}