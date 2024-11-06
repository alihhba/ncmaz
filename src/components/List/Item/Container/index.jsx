import React from "react";
import classNames from "@/utils/classNames";

const ListItemContainer = ({hasCheckbox = false, isSelected = false, children, className, ...restProps}) => {
    return (
        <tr
            className={classNames("group h-24", isSelected ? 'bg-primary-50' : '', className)}
            {...restProps}
        >
            {children}
        </tr>
    );
};

export default ListItemContainer;