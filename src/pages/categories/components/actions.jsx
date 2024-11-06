import React, {useState} from "react";
import { useRouterContext } from "@refinedev/core";
import ActionMenu from "@/components/ActionMenu";
import useResourceAction from '@/hooks/useResourceAction';
import {ModalConfirmDelete} from "@/components/Modal/Confirm/Delete";

export const ActionsListBox = ({id, children, className, selected: selectedOption, items: publishingOptions=[], ...restProps}) => {

    const {Link} = useRouterContext();
    const {showUrl, editUrl, deleteAction} = useResourceAction();

    const [visibleDeleteModal, setVisible] = useState(false);
    const showDeleteModal = () => {setVisible(true);};
    const closeDeleteModal = () => {setVisible(false);};

    return (
        <>
            <ActionMenu>
                <ActionMenu.Item
                    component={Link}
                    to={showUrl(id)}
                >
                    نمایش
                </ActionMenu.Item>
                <ActionMenu.Item
                    component={Link}
                    to={editUrl(id)}
                >
                    ویرایش
                </ActionMenu.Item>
                <ActionMenu.Item
                    onClick={showDeleteModal}
                >
                    حذف
                </ActionMenu.Item>
            </ActionMenu>
            <ModalConfirmDelete
                open={visibleDeleteModal}
                onCancel={closeDeleteModal}
                onConfirm={()=>{deleteAction(id); closeDeleteModal();}}
                title={`حذف آیتم شماره ${id}`}
            />
        </>
    );
};

export default ActionsListBox;