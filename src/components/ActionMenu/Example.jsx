import React from "react";
import ActionMenu from './index.jsx';
import useResourceAction from "@/hooks/useResourceAction.jsx";
import Link from '@/components/Link';

const ActionMenuExample = ({id}) => {

    const {show, showUrl, editUrl, deleteAction} = useResourceAction();

    return (
        <ActionMenu.Container id={id}>

            <ActionMenu.Item.Show
                action={show}
                actionProps={{id}}
            />

            <ActionMenu.Item.Edit
                component={Link}
                to={editUrl(id)}
            />

            <ActionMenu.Item.Delete
                action={deleteAction}
                actionProps={{id}}
                title={`حذف سرور شماره ${id}`}
            />

        </ActionMenu.Container>
    );
};

export default ActionMenuExample;