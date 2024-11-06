import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { useNavigation, useResource, useRouterContext } from "@refinedev/core";

export const FilterButton = ({children, resourceName, className, ...restProps}) => {

    const {createUrl} = useNavigation();
    const {Link} = useRouterContext();

    return (
        <Button
            type="default"
            component={Link}
            to={createUrl(resourceName)}
            className={classNames("", className)}
            {...restProps}
        >
            <Icon type="filter" className="me-1 h-5 w-5" />
            <span>فیلتر</span>
        </Button>
    )
};

export default FilterButton;