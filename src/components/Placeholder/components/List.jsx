import React from "react";
import classNames from "@/utils/classNames";

const List = ({children, className, restProps}) => {
    return (
        <ul
            role="list"
            className={classNames("mt-5 divide-y divide-gray-200 sm:mt-0", className)}
            {...restProps}
        >
            {children}
        </ul>
    );
}
export default List;