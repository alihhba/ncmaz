import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { useNavigation, useResource, useRouterContext } from "@refinedev/core";

export const EditButton = ({children, resourceName, resourceId, className, ...restProps}) => {

    const {editUrl} = useNavigation();
    const {Link} = useRouterContext();

    return (
        <Button
            type="default"
            component={Link}
            to={editUrl(resourceName, resourceId)}
            className={classNames("", className)}
            {...restProps}
        >
            <Icon type="pencil" className="me-1 h-5 w-5" />
            <span>ویرایش</span>
        </Button>
    )
};

export default EditButton;