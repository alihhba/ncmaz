import React, {Fragment, useState} from 'react';
import FormItemSelect from "@/components/Form/Item/Select";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";
import useFetchList from "@/hooks/useFetchList";
import useResourceAction from "@/hooks/useResourceAction";
import useSelect from "@/hooks/useSelect";

export default function FormItemProject({resource="projects", className, filters = [], ...restProps}) {

    const {items} = useSelect({
        resource,
        filters: [
            ...filters,
            {field: 'per_page', operator: 'eq', value: -1},
        ],
        optionsMapping: {
            label: 'name',
            value: 'id',
        }
    });

    return (
        <FormItemSelect
            options={items}
            // className={classNames(className, "w-1/2")}
            {...restProps}
        />
    )
}
