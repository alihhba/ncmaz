import React from "react";

const items = [
    {
        id: 1,
        name: 'test'
    }
];

export const fetchList = () => {
    return items;
};

export const fetchCurrent = ({id}) => {
    return items.find(({id: itemId}) => itemId === parseInt(id) )
};