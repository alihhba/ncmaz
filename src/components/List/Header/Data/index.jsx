import React from "react";
import classNames from "@/utils/classNames";
import ListHeaderDataContainer from "./Container";
import ListHeaderDataEmpty from "./Text";
import ListHeaderDataCheckbox from "./Checkbox";
import ListHeaderDataText from "./Empty";
import ListHeaderDataStatus from "./Status";

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