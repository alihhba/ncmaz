import React from "react";
import classNames from "@/utils/classNames";

const Section = ({children, className, restProps}) => {
    return (
        <li
            className={classNames("flex items-center py-5 px-4 sm:py-6 sm:px-0", className)}
            {...restProps}
        >
            {children}
        </li>
    );
}
export default Section;