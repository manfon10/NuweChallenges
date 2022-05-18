import React from 'react';

import { Description } from '../components/ui/Card';

export default {
    title: 'Ui/Description',
    component: Description,
};

const Template = args => <Description {...args} />

export const DescriptionCard = Template.bind({});
DescriptionCard.args = {
    description: "Lista de regalos para el grupo Crew 💥"
}