import React from "react";
import classNames from "@/utils/classNames";
import {FormItemInput} from "@/components/Form/Item/Input";

export const FormItemNationalCode = ({validationSchema: providedRules = {}, forCompany = false, ...restProps}) => {
    const rules = {
        pattern: forCompany ? {
            value: /^\d{11}$/,
            message: "لطفا شناسه ملی یازده رقمی را فقط با استفاده از اعداد انگیسی وارد نمایید."
        } : {
            value: /^\d{10}$/,
            message: "لطفا کد ملی ده رقمی را فقط با استفاده از اعداد انگیسی وارد نمایید."
        },
    };

    const isRequired = !!providedRules['required'];

    return (
        <FormItemInput
            inputmode="numeric"
            type="number"
            validationSchema={{
                ...rules,
                providedRules,
                ...(!!providedRules['required'] && typeof providedRules['required'] === "boolean" ? {required: forCompany ? "لطفا شناسه ملی را وارد نمایید.": "لطفا کد ملی را وارد نمایید."} : {})}}
            {...restProps}
        />
    );
};