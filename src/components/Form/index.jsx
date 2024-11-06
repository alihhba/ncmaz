import React from "react";
import classNames from "@/utils/classNames";
import {FormContainer} from "@/components/Form/Container";
import {FormSection} from "@/components/Form/Section";
import FormItem from "@/components/Form/Item";
import FormAction from "@/components/Form/Action";

export const Form = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

Form.Container = FormContainer;
Form.Section = FormSection;
Form.Action = FormAction;
Form.Item = FormItem;


export default Form;