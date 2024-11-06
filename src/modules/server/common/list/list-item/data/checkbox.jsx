import React from "react";
import classNames from "@/utils/classNames";
import List from "@/modules/server/common/list";

const ListItemDataCheckbox = ({id, isSelected, onToggle, children, containerClassName, className, ...restProps}) => {
    return (
        <List.Item.Data.Container
            className={classNames("text-sm whitespace-no-wrap text-gray-800 tracking-normal leading-4 ps-8 text-start", containerClassName)}
        >
            <input
                type="checkbox"
                className={classNames("cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none text-primary-600 focus:ring-primary-500", className)}
                id={id}
                name={id}
                checked={isSelected}
                onChange={onToggle}
                {...restProps}
            />
        </List.Item.Data.Container>
    );
};

export default ListItemDataCheckbox;