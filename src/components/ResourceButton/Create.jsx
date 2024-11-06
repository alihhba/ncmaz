import React, {useEffect, useState} from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Link from "@/components/Link";
import useResourceAction from "@/hooks/useResourceAction";
import {useGo} from "@refinedev/core";

export const ResourceButtonCreate = ({onClick, resource, label = "افزودن", children, withLabel = true, className, filters = [], ...restProps}) => {

    const {createUrl} = useResourceAction(resource);

    const go = useGo();

    const [preparedFilters, setPreparedFilters] = useState({});

    useEffect(() => {
        const f = {};
        filters.forEach(({field, value})=>{
            f[field] = value;
        })
        setPreparedFilters(f);
    }, filters);

    const goToCreateUrl = () => {
        go({
            to: createUrl,
            query: preparedFilters,
        })
    }

    return (
        <Button
            type="primary"
            // component={Link}
            // to={createUrl}
            component="button"
            onClick={onClick || goToCreateUrl}
            className={classNames("", withLabel ? '' : 'w-8 h-8 !p-0', className)}
            {...restProps}
        >
            {children || (
                <>
                    <Icon type="plus" className="h-5 w-5" />
                    {withLabel ? (<span className="ms-1">{label}</span>) : null}
                </>
            )}
        </Button>
    );
};

export default ResourceButtonCreate;