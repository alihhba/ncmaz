import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";

const StepComplete = ({title, icon, selectable, onSelect, isLast = false, children, className, ...restProps}) => {
    return (
        <>
            {!isLast ? (
                <div className="absolute top-9 start-5 -ms-px mt-1 h-full w-0.5 bg-primary-600" aria-hidden="true" />
            ) : null}
            <div onClick={selectable ? onSelect : null} className={classNames("group relative flex items-start", selectable && onSelect ? 'cursor-pointer' : null)}>
                  <span className="flex h-10 items-center">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 group-hover:bg-primary-800">
                      <Icon type={icon} className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                  </span>
                <span className="ms-4 flex min-w-0 flex-col">
                    <span className="text-md font-medium mt-2.5">{title}</span>
                    <span className="text-md text-gray-500 hidden">{children}</span>
                  </span>
            </div>
        </>
    );
};

export default StepComplete;