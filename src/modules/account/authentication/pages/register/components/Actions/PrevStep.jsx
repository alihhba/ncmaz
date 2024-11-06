import React from "react";
import classNames from "@/utils/classNames";

export default ({children, className, ...restProps}) => {

    return (
        <button
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </button>
    );
};