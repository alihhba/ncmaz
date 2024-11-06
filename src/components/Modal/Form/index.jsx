import React from "react";
import classNames from "@/utils/classNames";

export const ModalForm = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};