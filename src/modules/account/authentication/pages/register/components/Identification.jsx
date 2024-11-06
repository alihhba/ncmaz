import React, {useEffect, useState} from 'react';
import Link from "@/components/Link";
import FormItemSelect from "@/components/Form/Item/Select";
import Actions from "./Actions";
import {useForm} from "@refinedev/react-hook-form";
import Company from "./Company";
import Person from "@/modules/account/authentication/pages/register/components/Person";

export default ({slug, data = {}, ...restProps}) => {

    const {type} = data['type_selection'] || {};

    if (type === "company") {
        return <Company slug={slug} data={data} {...restProps} />
    }

    return (
        <Person slug={slug} data={data} {...restProps} />
    );
};