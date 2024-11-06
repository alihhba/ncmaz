import React from "react";
import classNames from "@/utils/classNames";

const ListBodyContainer = ({children, className, ...restProps}) => {
    return (
        <tbody
            className={classNames("divide-y", className)}
            {...restProps}
        >
            {children}
        </tbody>
    );
};

export default ListBodyContainer;