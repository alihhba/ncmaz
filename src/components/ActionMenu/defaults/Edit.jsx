import React from "react";
import ActionMenuItem from '../components/Item.jsx';

export const ActionMenuItemEdit = (restProps) => {

    return (
        <ActionMenuItem
            label="ویرایش"
            icon="pencil"
            slug="edit"
            {...restProps}
        />
    );
};