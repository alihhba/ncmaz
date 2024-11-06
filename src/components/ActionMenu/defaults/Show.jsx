import React from "react";
import ActionMenuItem from '../components/Item.jsx';

export const ActionMenuItemShow = (restProps) => {

    return (
        <ActionMenuItem
            label="نمایش"
            icon="eye"
            slug="view"
            {...restProps}
        />
    );
};