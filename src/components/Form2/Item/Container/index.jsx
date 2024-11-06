import React from "react";
import classNames from "@/utils/classNames";
import Form from "@/components/Form";

export const FormItemContainer = ({children, label, htmlFor, className, ...restProps}) => {
    return (
        <div className={classNames("sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 py-5", className)} {...restProps}>
            {htmlFor ? (
                <Form.Item.Label htmlFor={htmlFor}>{label}</Form.Item.Label>
            ) : label}
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                {children}
            </div>
        </div>
    );
};