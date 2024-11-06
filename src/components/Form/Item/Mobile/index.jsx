import React from "react";
import classNames from "@/utils/classNames";
import {FormItemInput} from "@/components/Form/Item/Input";

export const FormItemMobile = ({validationSchema: providedRules = {}, ...restProps}) => {
    const rules = {
        pattern: {
            value: /^09\d{9}$/,
            message: "لطفا شماره همراه را مشابه 09000000000 وارد نمایید."
        },
    };

    const isRequired = !!providedRules['required'];

    return (
        <FormItemInput
            inputmode="tel"
            validationSchema={{
                ...rules,
                providedRules,
                ...(!!providedRules['required'] && typeof providedRules['required'] === "boolean" ? {required: "لطفا شماره همراه را وارد نمایید."} : {})}}
            {...restProps}
        />
    );
};