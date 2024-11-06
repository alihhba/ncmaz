import React from "react";
import classNames from "@/utils/classNames";

export const PageContent = ({children, className, ...restProps}) => {
    return (
        <main
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </main>
    );
};

export default PageContent;