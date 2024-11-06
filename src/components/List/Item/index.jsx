import React from "react";
import classNames from "@/utils/classNames";
import ListItemContainer from "./Container";
import ListItemData from "./Data";

const ListItem = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

ListItem.Container = ListItemContainer;
ListItem.Data = ListItemData;

export default ListItem;