import React from "react";
import classNames from "@/utils/classNames";
import ListContainer from "./Container";
import ListHeader from "./Header";
import ListBody from "./Body";
import ListItem from "./Item";

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