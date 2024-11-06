import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Button from '@/components/Button';

export const PageHeading = ({children, meta, className, ...restProps}) => {

    return (
        <header className={classNames("border-b border-gray-200 py-5 px-4 sm:px-0 sm:flex sm:items-center sm:justify-between", className)}>
            <h1 className="text-lg font-medium leading-6 text-gray-900 font-bold">{children}</h1>
            {meta ? (
                <div className="mt-3 flex sm:mt-0 sm:ms-4 space-s-3">
                    {meta}
                </div>
            ) : null}
        </header>
    );
};

export default PageHeading;