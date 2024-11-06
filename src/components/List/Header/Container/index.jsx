import React from "react";
import classNames from "@/utils/classNames";

const ListHeaderContainer = ({children, className, ...restProps}) => {
    return (
        <thead>
        <tr
            className={classNames("w-full h-16 border-gray-300 border-b py-8", className)}
            {...restProps}
        >
            {children}
        </tr>
        </thead>
    );
};

export default ListHeaderContainer;