import React from "react";
import Icon from "@/components/Icon";
import {useModal, useUpdate} from "@refinedev/core";
import {ModalConfirmDelete} from "@/components/Modal/Confirm/Delete";
import useResourceAction from "@/hooks/useResourceAction";
import {useNavigate} from "react-router-dom";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/Tooltip";

export const DeleteAction = ({resource="servers", id, data = {}}) => {

    const {visible, show, close} = useModal();

    const {name} = data || {};

    const {deleteAction} = useResourceAction(resource);

    const navigate = useNavigate();

    return (
        <div>
            <Tooltip placement="bottom">
                <TooltipTrigger asChild>
                    <div className="text-red-500 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                         onClick={show}
                    >
                        <Icon type="trash" className="h-4 w-4"/>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <div className="bg-red-500 rounded-lg py-1 px-2 text-xs text-white">حذف</div>
                </TooltipContent>
            </Tooltip>

            <ModalConfirmDelete
                onClose={close}
                open={visible}
                title={`حذف ${name}`}
                description="آیا از حذف سرور اطمینان دارید؟"
                // action={deleteAction}
                // actionProps={{id}}
                onConfirm={() => {deleteAction({id, onSuccess: ()=>{navigate('/servers')}})}}
            />
        </div>
    );
};