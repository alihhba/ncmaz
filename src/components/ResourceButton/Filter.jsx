import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Link from "@/components/Link";
import PopoverExample from "@/components/Popover";
import Form from "@/components/Form";

export const ResourceButtonFilter = ({label = "فیلتر", children, filters = [], setFilters, className, ...restProps}) => {

    return (
        <PopoverExample filters={filters} setFilters={setFilters}>
            {children}
        </PopoverExample>
    );
    return (
        <Button
            type="default"
            // component={Link}
            // to="/"
            className={classNames("", className)}
            {...restProps}
        >
            {children || (
                <>
                    <Icon type="filter" className="me-2 h-4 w-4" />
                    <span>{label}</span>
                </>
            )}
        </Button>
    );
};

export default ResourceButtonFilter;