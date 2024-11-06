import React, {Fragment, useState} from 'react';
import FormItemSelect from "@/components/Form/Item/Select";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";
import useFetchList from "@/hooks/useFetchList";
import useResourceAction from "@/hooks/useResourceAction";
import useSelect from "@/hooks/useSelect";
import FormItemServer from "@/components/Form/Item/Server";
import FormItemProject from "@/components/Form/Item/Project";

export default function FormItemService({service, ...restProps}) {

    if (service === "server") {
        return (
            <FormItemServer
                {...restProps}
            />
        )
    }

    if (service === "project") {
        return (
            <FormItemProject
                {...restProps}
            />
        )
    }

    return (
        <FormItemSelect
            {...restProps}
        />
    );
}
