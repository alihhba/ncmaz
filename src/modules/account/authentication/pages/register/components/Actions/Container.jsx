import React from "react";
import classNames from "@/utils/classNames";

export default ({children, className}) => {

    return (
        <div
            className={classNames("col-span-12 flex items-center justify-between mt-5 pt-5 w-full", className)}
        >
            {children}
        </div>
    )
};