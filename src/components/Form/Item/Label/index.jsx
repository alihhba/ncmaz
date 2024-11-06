import React from "react";
import classNames from "@/utils/classNames";

export const FormItemLabel = ({htmlFor, children, className, ...restProps}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={classNames("block text-sm font-medium text-gray-700", className)}
            {...restProps}
        >
            {children}
        </label>
    );
};