import React from "react";
import classNames from "@/utils/classNames";
import ListBodyContainer from "./container";

const ListBody = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

ListBody.Container = ListBodyContainer;

export default ListBody;