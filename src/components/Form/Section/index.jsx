import React from "react";
import classNames from "@/utils/classNames";

export const FormSection = ({title, description, children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {title || description ? (
                <div className="pb-6">
                    {title ? (
                        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
                    ) : null}

                    {description ? (
                        <p className="mt-1 text-sm text-gray-500">{description}</p>
                    ) : null}
                </div>
            ) : null}
            {/*<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">*/}
            <div className="sm:divide-y">
            {children}
            </div>
        </div>
    );
};