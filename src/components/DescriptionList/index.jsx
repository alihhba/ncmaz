import React from "react";
import {DescriptionListItem} from "@/components/DescriptionList/Item";
import classNames from "@/utils/classNames";

const DescriptionList = ({children, className, style={}, ...restProps}) => {

    return (
        <div className={classNames("p-0", className)} style={{direction: 'rtl', ...style}} {...restProps}>
            <dl className="divide-y divide-gray-200">
                {children}
            </dl>
        </div>
    );
};

DescriptionList.Item = DescriptionListItem;

export default DescriptionList;