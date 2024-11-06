import React from "react";

const items = [
    {id: 1, department: 'فنی', priority: 'متوسط', status: 'just-created', title: 'عنوان تیکت شماره 1', created: '2023-03-20 10:32', createdPersian: '1402/01/01 - 10:32', updated: '2023-03-20 10:32', updatedPersian: '1402/01/01 - 10:32',},
    {id: 2, department: 'فروش', priority: 'کم', status: 'customer-answer', title: 'عنوان تیکت شماره 2', created: '2023-03-20 10:32', createdPersian: '1402/01/01 - 10:32', updated: '2023-04-19 - 20:14', updatedPersian: '1402/01/30 - 20:14'},
    {id: 3, department: 'فنی', priority: 'متوسط', status: 'support-answer', title: 'عنوان تیکت شماره 3', created: '2023-03-20 10:32', createdPersian: '1402/01/01 - 10:32', updated: '2023-04-19 - 20:14', updatedPersian: '1402/01/30 - 20:14'},
    {id: 4, department: 'فنی', priority: 'زیاد', status: 'on-hold', title: 'عنوان تیکت شماره 4', created: '2023-03-20 10:32', createdPersian: '1402/01/01 - 10:32', updated: '2023-04-19 - 20:14', updatedPersian: '1402/01/30 - 20:14'},
    {id: 5, department: 'فروش', priority: 'متوسط', status: 'closed', title: 'عنوان تیکت شماره 5', created: '2023-03-20 10:32', createdPersian: '1402/01/01 - 10:32', updated: '2023-04-19 - 20:14', updatedPersian: '1402/01/30 - 20:14'},
    {id: 6, department: 'فنی', priority: 'متوسط', status: 'closed', title: 'از دسترس خارج شدن سرور', created: '2023-03-20 10:32', createdPersian: '1402/01/01 - 10:32', updated: '2023-04-19 - 20:14', updatedPersian: '1402/01/30 - 20:14'},
];

export const fetchList = () => {
    return items;
};

export const fetchCurrent = ({id}) => {
    return items.find(({id: itemId}) => itemId === parseInt(id) )
};