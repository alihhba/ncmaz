import React from "react";
import Icon from "@/components/Icon";
import {useModal, useUpdate} from "@refinedev/core";
import {ModalConfirmDelete} from "@/components/Modal/Confirm/Delete";
import useResourceAction from "@/hooks/useResourceAction";
import {useNavigate} from "react-router-dom";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/Tooltip";
import {ModalConfirmDefault} from "@/components/Modal/Confirm/Default";

export const SuspendAction = ({resource="servers", id, data = {}}) => {

    const {visible, show, close} = useModal();

    const {name} = data || {};

    const {mutate: update} = useUpdate();

    const performAction = () => {
        update({
            resource: "servers",
            id,
            values: {
                is_suspended: true,
                power_status: "off",
            },
            successNotification: ()=>({
                type: 'success',
                message: 'سرور با موفقیت تعلیق شد.'
            })
        }, {
            onSuccess: close,
        })
    };

    const navigate = useNavigate();

    return (
        <div>
            <Tooltip placement="bottom">
                <TooltipTrigger asChild>
                    <div className="text-gray-600 me-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                         onClick={show}
                    >
                        <Icon type="pause" className="h-4 w-4"/>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <div className="bg-gray-600 rounded-lg py-1 px-2 text-xs text-white">تعلیق</div>
                </TooltipContent>
            </Tooltip>

            <ModalConfirmDefault
                onClose={close}
                open={visible}
                icon="pause"
                title="تعلیق سرویس"
                description="آیا از تعلیق سرویس اطمینان دارید؟"
                onConfirm={performAction}
            />
        </div>
    );
};