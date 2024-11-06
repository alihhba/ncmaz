import React from "react";
import classNames from "@/utils/classNames";

const ListItemDataContainer = ({children, className, ...restProps}) => {
    return (
        <td
            className={classNames("pe-12 sm:pe-6", className)}
            {...restProps}
        >
            {children}
        </td>
    );
};

export default ListItemDataContainer;