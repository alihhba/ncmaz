import React from "react";
import classNames from "@/utils/classNames";
import List from '@/components/List';

const ListHeaderDataText = ({children, className, ...restProps}) => {
    return (
        <List.Header.Data.Container
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </List.Header.Data.Container>
    );
};

export default ListHeaderDataText;