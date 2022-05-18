import React from 'react';

import { Title } from '../components/ui/Card';

export default {
    title: 'Ui/Title',
    component: Title,
};

const Template = args => <Title {...args} />

export const TitleCard = Template.bind({});
TitleCard.args = {
    title: "Crew 💥"
}