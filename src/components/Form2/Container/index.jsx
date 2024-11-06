import React from "react";
import classNames from "@/utils/classNames";

export const FormContainer = ({children, className, ...restProps}) => {
    return (
        <form
            className={classNames("space-y-8 divide-y divide-gray-200 px-4 sm:px-0", className)}
            {...restProps}
        >
            {children}
        </form>
    );
};