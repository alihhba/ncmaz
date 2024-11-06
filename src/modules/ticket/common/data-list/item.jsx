import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";

const DataListItem = ({label = '', value = '', icon, meta, className, ...restProps}) => {
    return (
        <div className={classNames("flex items-center justify-between py-5", className)} {...restProps}>
            <div>
                <div className="text-slate-500 text-sm">{label}</div>
                <div className="mt-1 text-sm">{value}</div>
            </div>

            {icon ? (
                <Icon type={icon} data-lucide="clock" className="w-5 h-5 text-slate-500 ms-auto" />
            ) : null}

            {meta ? (
                <div>{meta}</div>
            ) : null}
        </div>
    );
};

export default DataListItem;