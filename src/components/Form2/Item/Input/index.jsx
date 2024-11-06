import React from "react";
import classNames from "@/utils/classNames";

export const FormItemInput = ({children, className, ...restProps}) => {
    return (
        <input
            type="text"
            className={classNames("block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm", className)}
            {...restProps}
        />
    );
};