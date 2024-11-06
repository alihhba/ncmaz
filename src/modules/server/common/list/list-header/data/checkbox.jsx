import React from "react";
import classNames from "@/utils/classNames";
import List from '@/modules/server/common/list';

const ListHeaderDataCheckbox = ({onToggle, children, containerClassName, className, ...restProps}) => {
    return (
        <List.Header.Data.Container
            className={classNames("ps-8", containerClassName)}
            {...restProps}
        >
            <input
                type="checkbox"
                className={classNames("cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none text-primary-600 focus:ring-primary-500", className)}
                onClick={onToggle}
            />
        </List.Header.Data.Container>
    );
};

export default ListHeaderDataCheckbox;