import React from "react";

const items = [
    {
        id: 1,
        type: 'payment',
        title: 'موجودی کیف پول شما رو به اتمام است.',
        time: '2023-04-20 20:10',
        timePersian: '1402/01/30 - 20:10'
    },
    {
        id: 2,
        type: 'server',
        title: 'از دسترس خارج شدن سرورهای دیتاسنتر آسیاتک',
        time: '2023-03-20 13:24',
        timePersian: '1401/12/29 - 13:24'
    },
];

export const fetchList = () => {
    return items;
};

export const fetchCurrent = ({id}) => {
    return items.find(({id: itemId}) => itemId === parseInt(id) )
};