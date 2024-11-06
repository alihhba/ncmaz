import React from "react";
import classNames from "@/utils/classNames";
import Form from "@/components/Form";

export const FormItemContainer = ({
                                      stacked = false,
                                      children,
                                      label,
                                      htmlFor,
                                      errors = {},
                                      className,
                                      ...restProps
                                  }) => {
    return (
        <div
            className={classNames("", !stacked ? "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 py-5" : null, className)} {...restProps}>
            {htmlFor ? (
                <Form.Item.Label htmlFor={htmlFor}>{label}</Form.Item.Label>
            ) : label}
            <div className={classNames("mt-2", !stacked ? "sm:col-span-2 sm:mt-0" : null)}>
                {children}
                {errors ? (
                    <div className="text-xs text-red-400 mt-1">
                        {errors.type === "required" ? (
                            errors.message || (label ? `لطفا ${label} را وارد نمایید.` :  'لطفا اطلاعات را درج نمایید.')
                        ) : errors.message}
                    </div>
                ) : null}
            </div>
        </div>
    );
};