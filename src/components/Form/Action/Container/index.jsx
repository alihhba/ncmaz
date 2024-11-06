import React from "react";
import classNames from "@/utils/classNames";

const FormActionContainer = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("py-4 flex justify-end gap-3", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

export default FormActionContainer;