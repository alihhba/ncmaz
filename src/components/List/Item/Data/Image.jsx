import React from "react";
import classNames from "@/utils/classNames";

const ListItemDataImage = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

export default ListItemDataImage;