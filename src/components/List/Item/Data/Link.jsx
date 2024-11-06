import React from "react";
import classNames from "@/utils/classNames";
import List from "@/modules/server/common/list";
import Link from "@/components/Link";

const ListItemDataLink = ({to="/", children, className, ...restProps}) => {
    return (
        <List.Item.Data.Container
            className={classNames("text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4", className)}
            {...restProps}
        >
            <Link to={to} className="text-primary-600 hover:text-primary-900">
                {children}
            </Link>
        </List.Item.Data.Container>
    );
};

export default ListItemDataLink;