import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";

const Card = ({children, title, icon, meta, className, bodyProps: {className: bodyClassName, ...bodyProps} = {}, ...restProps}) => {
    return (
        <div className={classNames("rounded-lg bg-white border rounded-xs", className)} {...restProps}>
            {title ? (
                <div className={"rounded-t-lg border-b border-gray-200 bg-white px-4 py-4 sm:px-5"}>
                    <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
                        <div className="flex gap-3 items-center">
                            {icon ? (
                                <div className="p-3 flex items-center justify-center bg-primary-50 rounded-full text-primary-600">
                                    <Icon type={icon} className="h-5 w-5"/>
                                </div>
                            ) : null}
                            <h3 className="text-sm font-bold leading-6 text-gray-900">{title}</h3>
                        </div>
                        <div className="flex-shrink-0">
                            {meta}
                        </div>
                    </div>
                </div>
            ) : null}
            <div className={classNames("px-4 py-5 sm:p-6", bodyClassName)} {...bodyProps}>
                {children}
            </div>
        </div>
    );
}
export default Card;