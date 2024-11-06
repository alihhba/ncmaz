import React from "react";

const items = [
    {id: 1, amount: '546,104', status: 'decrease', description: 'کاهش اعتبار - پرداخت فاکتور', time: '2023-04-20 20:10', timePersian: '1402/01/30 - 20:10'},
    {id: 2, amount: '100,000', status: 'increase', description: 'افزایش اعتبار - پرداخت آنلاین', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
    {id: 3, amount: '100,000', status: 'increase', description: 'افزایش اعتبار - پرداخت آنلاین', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
    {id: 4, amount: '100,000', status: 'increase', description: 'افزایش اعتبار - پرداخت آنلاین', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
    {id: 5, amount: '20,000', status: 'decrease', description: 'کاهش اعتبار - پرداخت فاکتور', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
    {id: 6, amount: '100,000', status: 'increase', description: 'افزایش اعتبار - پرداخت آنلاین', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
];

export const fetchList = () => {
    return items;
};

export const fetchCurrent = ({id}) => {
    return items.find(({id: itemId}) => itemId === parseInt(id) )
};