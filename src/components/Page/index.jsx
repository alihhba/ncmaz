import React from "react";
import classNames from "@/utils/classNames";
import PageHeading from "@/components/Page/Heading";
import PageContent from "@/components/Page/Content";

export const Page = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

Page.Heading = PageHeading;
Page.Content = PageContent;

export default Page;