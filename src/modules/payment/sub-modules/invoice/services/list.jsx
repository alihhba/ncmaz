import React from "react";

const items = [
    {
        id: '502361',
        subTotal: '501,012',
        tax: '45,092',
        total: '546,104',
        status: 'pending',
        customer: 'مشتری شماره یک',
        from: '2023-04-20',
        fromPersian: '1402/02/01',
        to: null,
        toPersian: null
    },
    {
        id: '502361',
        subTotal: '501,012',
        tax: '45,092',
        total: '546,104',
        status: 'closed',
        customer: 'مشتری شماره یک',
        from: '2023-03-20',
        fromPersian: '1402/01/01',
        to: '2023-04-19',
        toPersian: '1402/01/30'
    },
    {
        id: '502361',
        subTotal: '501,012',
        tax: '45,092',
        total: '546,104',
        status: 'closed',
        customer: 'مشتری شماره یک',
        from: '2023-03-20',
        fromPersian: '1402/01/01',
        to: '2023-04-19',
        toPersian: '1402/01/30'
    },
    {
        id: '502361',
        subTotal: '501,012',
        tax: '45,092',
        total: '546,104',
        status: 'closed',
        customer: 'مشتری شماره یک',
        from: '2023-03-20',
        fromPersian: '1402/01/01',
        to: '2023-04-19',
        toPersian: '1402/01/30'
    },
    {
        id: '502361',
        subTotal: '501,012',
        tax: '45,092',
        total: '546,104',
        status: 'closed',
        customer: 'مشتری شماره یک',
        from: '2023-03-20',
        fromPersian: '1402/01/01',
        to: '2023-04-19',
        toPersian: '1402/01/30'
    },
    {
        id: '502361',
        subTotal: '501,012',
        tax: '45,092',
        total: '546,104',
        status: 'closed',
        customer: 'مشتری شماره یک',
        from: '2023-03-20',
        fromPersian: '1402/01/01',
        to: '2023-04-19',
        toPersian: '1402/01/30'
    },
];

export const fetchList = () => {
    return items;
};

export const fetchCurrent = ({id}) => {
    return items.find(({id: itemId}) => itemId === parseInt(id) )
};