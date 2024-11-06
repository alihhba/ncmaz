import React from "react";
import classNames from "@/utils/classNames";
import ListHeaderContainer from "./container";
import ListHeaderData from "./data";

const ListHeader = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

ListHeader.Container = ListHeaderContainer;
ListHeader.Data = ListHeaderData;

export default ListHeader;