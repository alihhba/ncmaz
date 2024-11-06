import React from "react";
import classNames from "@/utils/classNames";
import ListHeaderContainer from "./Container";
import ListHeaderData from "./Data";

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