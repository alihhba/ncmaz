import React from "react";
import classNames from "@/utils/classNames";
import ListHeaderDataContainer from "./Container";

const ListHeaderDataStatus = ({children, className, ...restProps}) => {
    return (
        <ListHeaderDataContainer
            className={classNames("", className)}
            {...restProps}
        >
            <div className="opacity-0 w-2 h-2 rounded-full bg-primary-400" />
        </ListHeaderDataContainer>
    );
};

export default ListHeaderDataStatus;