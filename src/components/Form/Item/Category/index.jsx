import React, {Fragment, useState} from 'react';
import FormItemSelect from "@/components/Form/Item/Select";
import {useSelect} from "@refinedev/core";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";

export default function FormItemCategory({section, className, ...restProps}) {
    const {queryResult} = useSelect({
        resource: 'categories', filters: [{
            field: 'section',
            value: section,
        }]
    });
    const {data: fDAta} = queryResult || {};
    const {data: upData} = fDAta || {}
    const {data: pData = []} = upData || {};

    const data = (pData || []).map(({id, title}) => ({label: title, value: id}));

    const finalData = [];

    const addItem = ({id, title, children, level = 1}) => {
        finalData.push({
            label: <PersianNumber>{title}</PersianNumber>,
            value: id,
            key: `category-${id}`,
            level,
        });

        if (children) {
            children.forEach(item => {
                addItem({...item, level: level+1})
            });
        }
    }

    pData.forEach(addItem);

    return (
        <FormItemSelect
            options={finalData}
            className={classNames(className, "w-1/2")}
            {...restProps}
        />
    )
}
