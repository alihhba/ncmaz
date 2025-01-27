import React from "react";
import classNames from "@/utils/classNames";
import List from '@/modules/server/common/list';

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