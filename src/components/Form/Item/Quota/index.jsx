import React, {Fragment, useState} from 'react';
import FormItemSelect from "@/components/Form/Item/Select";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";
import useFetchList from "@/hooks/useFetchList";
import useResourceAction from "@/hooks/useResourceAction";
import useSelect from "@/hooks/useSelect";

export default function FormItemQuota({resource="quotas", withPrice, className, filters = [], ...restProps}) {

    const {items} = useSelect({
        resource,
        filters: [
            ...filters,
            {field: 'status', operator: 'eq', value: 'active'},
            {field: 'per_page', operator: 'eq', value: -1},
        ],
        optionMap: ({name = '', id, price = '', ...restItemProps}) => ({
            id,
            name,
            price,
            ...restItemProps,
            label: withPrice ? `${name} - ماهانه ${PersianNumber({children: price, withSeparator: true})} تومان` : name,
            value: id,
        })
    });

    return (
        <FormItemSelect
            options={items}
            // className={classNames(className, "w-1/2")}
            {...restProps}
        />
    )
}
