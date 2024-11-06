import React from "react";
import classNames from "@/utils/classNames";
import ListItemDataContainer from "./container";
import ListItemDataCheckbox from "./checkbox";
import ListItemDataActions from "./actions";
import ListItemDataStatus from "./status";
import ListItemDataText from "./text";
import ListItemDataLink from "./link";

const ListItemData = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

ListItemData.Container = ListItemDataContainer;
ListItemData.Checkbox = ListItemDataCheckbox;
ListItemData.Text = ListItemDataText;
ListItemData.Link = ListItemDataLink;
ListItemData.Status = ListItemDataStatus;
ListItemData.Actions = ListItemDataActions;

export default ListItemData;