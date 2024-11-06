import React from "react";
import classNames from "@/utils/classNames";
import ListHeaderDataContainer from "./container";
import ListHeaderDataEmpty from "./text";
import ListHeaderDataCheckbox from "./checkbox";
import ListHeaderDataText from "./empty";
import ListHeaderDataStatus from "./status";

const ListHeaderData = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

ListHeaderData.Container = ListHeaderDataContainer;
ListHeaderData.Empty = ListHeaderDataEmpty;
ListHeaderData.Checkbox = ListHeaderDataCheckbox;
ListHeaderData.Text = ListHeaderDataText;
ListHeaderData.Status = ListHeaderDataStatus;

export default ListHeaderData;