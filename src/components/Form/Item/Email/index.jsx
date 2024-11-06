import React from "react";
import classNames from "@/utils/classNames";
import {FormItemInput} from "@/components/Form/Item/Input";

export const FormItemEmail = ({validationSchema: providedRules = {}, ...restProps}) => {
    const rules = {
        pattern: {
            // value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
            message: "لطفا ایمیل را مشابه example@gmail.com وارد نمایید."
        },
    };

    const isRequired = !!providedRules['required'];

    return (
        <FormItemInput
            inputmode="email"
            validationSchema={{
                ...rules,
                providedRules,
                ...(!!providedRules['required'] && typeof providedRules['required'] === "boolean" ? {required: "لطفا ایمیل را وارد نمایید."} : {})}}
            {...restProps}
        />
    );
};