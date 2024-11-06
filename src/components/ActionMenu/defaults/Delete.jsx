import React from "react";
import PersianNumber from "@/utils/persianNumber.jsx";
import ActionMenu from '../index.jsx';
import {ModalConfirmDelete} from "@/components/Modal/Confirm/Delete.jsx";

export const ActionMenuItemDelete = ({action, actionProps, title, ...restProps}) => {

    return (
        <ActionMenu.Item
            label="حذف"
            icon="trash"
            className="text-red-600"
            slug="delete"
            extra={(
                <ModalConfirmDelete
                    action={action}
                    actionProps={actionProps}
                    title={<PersianNumber>{title || `حذف آیتم شماره ${id}`}</PersianNumber>}
                />
            )}
            {...restProps}
        />
    );
};