import React from 'react';
import { Error, Success, Warning } from '../components/Alerts';

const Option = ({ type, actionClose }) => {
    if(type === "Error") {
        return <Error actionClose={actionClose} />
    }else if(type === "Success") {
        return <Success actionClose={actionClose} />
    }else if(type === "Warning") {
        return <Warning actionClose={actionClose} />
    }else {
        return false;
    }
};

export default Option;