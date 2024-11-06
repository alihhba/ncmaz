import React from "react";
import classNames from "@/utils/classNames";
import {FormItemInput} from "@/components/Form/Item/Input";
import {FormItemLabel} from "@/components/Form/Item/Label";
import {FormItemContainer} from "@/components/Form/Item/Container";
import FormItemSelect from "@/components/Form/Item/Select";

export const FormItem = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

FormItem.Container = FormItemContainer;
FormItem.Label = FormItemLabel;
FormItem.Input = FormItemInput;
FormItem.Select = FormItemSelect;

export default FormItem;