import React from "react";
import classNames from "@/utils/classNames";

export default ({children, className, ...restProps}) => {

    return (
        <button
            type="submit"
            className={classNames("flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2", className)}
            {...restProps}
        >
            {children}
        </button>
    );
};