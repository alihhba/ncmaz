import React from "react";
import classNames from "@/utils/classNames";
import ListHeaderDataContainer from "./Container";

const ListHeaderDataText = ({children, className, ...restProps}) => {
    return (
        <ListHeaderDataContainer
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </ListHeaderDataContainer>
    );
};

export default ListHeaderDataText;