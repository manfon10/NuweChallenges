import React from 'react';

import { Category } from '../components/ui/Card';

export default {
    title: 'Ui/Category',
    component: Category,
};

const Template = args => <Category {...args} />

export const CategoryCard = Template.bind({});
CategoryCard.args = {
    categorys: [{ id: 1, name: "Deportes de riesgo" }, { id: 2, name: "Libros" }]
}