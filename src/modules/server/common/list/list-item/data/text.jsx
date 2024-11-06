import React from "react";
import classNames from "@/utils/classNames";
import List from "@/modules/server/common/list";

const ListItemDataText = ({children, className, ...restProps}) => {
    return (
        <List.Item.Data.Container
            className={classNames("text-sm whitespace-no-wrap text-gray-800 tracking-normal leading-4", className)}
            {...restProps}
        >
            {children}
        </List.Item.Data.Container>
    );
};

export default ListItemDataText;