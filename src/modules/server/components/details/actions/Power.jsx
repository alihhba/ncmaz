import React from "react";
import Icon from "@/components/Icon";
import {useModal, useUpdate} from "@refinedev/core";
import {ModalConfirmDelete} from "@/components/Modal/Confirm/Delete";
import useResourceAction from "@/hooks/useResourceAction";
import {useNavigate} from "react-router-dom";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/Tooltip";
import {ModalConfirmDefault} from "@/components/Modal/Confirm/Default";
import findItemBy from "@/utils/findItemBy";
import statuses from "@/modules/server/components/statuses";
import {ModalBase} from "@/components/Modal/Base";

export const PowerAction = ({resource="servers", id, data = {}}) => {

    const {is_suspended: isSuspended, is_abused: isAbused} = data || {};
    const {visible, show, close} = useModal();

    const {power_status: powerStatusSlug} = data || {};
    const nextStatusSlug = powerStatusSlug === "on" ? "off" : "on";
    const status = findItemBy({source: statuses, key: 'slug', value: nextStatusSlug})

    const {mutate: update} = useUpdate();

    const performAction = () => {
        update({
            resource: "servers",
            id,
            values: {
                power_status: nextStatusSlug,
            },
            successNotification: ()=>({
                type: 'success',
                message: `سرور با موفقیت ${status.label} شد.`
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
                        <Icon type="power" className="h-4 w-4"/>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <div className="bg-gray-600 rounded-lg py-1 px-2 text-xs text-white">{status.label}</div>
                </TooltipContent>
            </Tooltip>

            <ModalConfirmDefault
                onClose={close}
                open={visible}
                icon="power"
                title={`${status.label} کردن سرویس`}
                description={!isSuspended && !isAbused ? (`آیا از ${status.label} کردن سرویس اطمینان دارید؟`) : (isAbused ? "با توجه به Abuse شدن سرویس، لطفا جهت رفع تعلیق با پشتیبانی ارتباط برقرار کنید." : "لطفا ابتدا سرور را از حالت تعلیق خارج نمایید.")}
                onConfirm={performAction}
                confirmProps={isSuspended || isAbused ? {className: 'hidden', disabled: true} : {}}
                cancelText={isSuspended || isAbused ? "بازگشت" : "لغو"}
            />
        </div>
    );
};