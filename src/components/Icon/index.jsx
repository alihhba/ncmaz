import React from "react";
import classNames from "@/utils/classNames";
import icons from './items';

export const Icon = ({children, type, shouldFlipBasedOnDirection, className, ...restProps}) => {
    const selectedIcon = icons[type];

    const IconItem = selectedIcon || 'div';

    return (
        <IconItem
            className={classNames("", className, shouldFlipBasedOnDirection ? "rtl:-scale-x-100 "  : false)}
            {...restProps}
        />
    );
};

export default Icon;