import React, {Fragment, useState} from 'react';
import FormItemSelect from "@/components/Form/Item/Select";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";
import useFetchList from "@/hooks/useFetchList";
import useResourceAction from "@/hooks/useResourceAction";
import useSelect from "@/hooks/useSelect";

export default function FormItemCustomer({resource="customers", className, withMobile, filters = [], ...restProps}) {

    const {items} = useSelect({
        resource,
        filters: [
            ...filters,
            {field: 'per_page', operator: 'eq', value: -1},
        ],
        // optionsMapping: {
        //     label: 'name',
        //     value: 'id',
        // },
        optionMap: ({name = '', id, mobile = '', ...restItemProps}) => ({
            id,
            name,
            mobile,
            ...restItemProps,
            label: withMobile ? `${name} - ${mobile}` : name,
            value: id,
        })
    });

    return (
        <FormItemSelect
            options={items}
            {...restProps}
        />
    )
}
