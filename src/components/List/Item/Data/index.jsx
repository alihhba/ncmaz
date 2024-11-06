import React from "react";
import classNames from "@/utils/classNames";
import ListItemDataContainer from "./Container";
import ListItemDataCheckbox from "./Checkbox";
import ListItemDataActions from "./Actions";
import ListItemDataStatus from "./Status";
import ListItemDataText from "./Text";
import ListItemDataLink from "./Link";

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