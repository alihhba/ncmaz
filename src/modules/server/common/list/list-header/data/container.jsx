import React from "react";
import classNames from "@/utils/classNames";

const ListHeaderDataContainer = ({children, className, ...restProps}) => {
    return (
        <th
            className={classNames("text-gray-600 font-bold pe-6 text-start text-sm tracking-normal leading-4", className)}
            {...restProps}
        >
            {children}
        </th>
    );
};

export default ListHeaderDataContainer;