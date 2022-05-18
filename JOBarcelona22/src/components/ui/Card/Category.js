import React from 'react';

const Category = ({ categorys, category }) => {
    return (
        <>
            {
                categorys.map( ({id, name}) => (
                    <span key={id} className={category}>{name}</span>
                ))
            }
        </>
    );
};

export default Category;