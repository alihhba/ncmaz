import React from "react";
import classNames from "@/utils/classNames";

export const DescriptionListItem = ({title, children, className}) => {

    return (
        <div className="py-4 grid grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-start text-sm font-medium text-gray-500 leading-7">{title}</dt>
            <dd
                className={classNames(
                    "text-start text-sm text-gray-900 col-span-2 leading-7",
                    className
                )}
            >
                {children}
            </dd>
        </div>
    );
};