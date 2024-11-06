import React from "react";
import classNames from "@/utils/classNames";

export const FormItemTextarea = ({slug, validationSchema = {}, register = () => ({}), rows = 5, className, ...restProps}) => {
    return (
        <textarea
            id={slug}
            rows={rows}
            className={classNames("block w-full rounded-md border-gray-300 shadow-sm text-justify sm:leading-6 focus:border-primary-500 focus:ring-primary-500 sm:text-sm", className)}
            {...register(slug, validationSchema)}
            {...restProps}
        />
    );
};