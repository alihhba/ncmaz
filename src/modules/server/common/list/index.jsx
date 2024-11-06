import React from "react";
import classNames from "@/utils/classNames";
import ListItem from "./list-item";
import ListHeader from "./list-header";
import ListBody from "./list-body";
import ListContainer from "@/modules/server/common/list/container";

const List = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

List.Container = ListContainer;
List.Header = ListHeader;
List.Body = ListBody;
List.Item = ListItem;

export default List;