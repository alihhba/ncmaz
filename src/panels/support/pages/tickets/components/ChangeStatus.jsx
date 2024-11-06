import React from "react";
import {useModal, useUpdate} from "@refinedev/core";
import {Menu} from '@headlessui/react';
import {ModalConfirmDefault} from "@/components/Modal/Confirm/Default";
import ActionMenu from "@/components/ActionMenu";

const ChangeStatus = ({ticketId}) => {

    const {visible, show, close} = useModal();

    const {mutate: updateTicket} = useUpdate();

    const changeStatus = (status, onClose) => {
        updateTicket({
            resource: "tickets",
            id: ticketId,
            values: {
                status,
            }
        }, {
            onSuccess: onClose,
        })
    }

    return (
        <ActionMenu.Container
            button={(
                <Menu.Button
                    className="border border-slate-300 hover:border-slate-400 text-sm text-slate-600 hover:text-slate-700 rounded-lg px-3 py-2"
                >
                    تغییر وضعیت
                </Menu.Button>
            )}
        >
            <ActionMenu.Item
                label="در حال بررسی"
                slug="on-hold"
                extra={(
                    <ModalConfirmDefault
                        open={true}
                        title="تغییر وضعیت تیکت به در حال بررسی"
                        description="آیا از قرار دادن تیکت در حالت در حال بررسی اطمینان دارید؟"
                        onClose={close}
                        onConfirm={({onClose})=>{changeStatus('on-hold', onClose)}}
                    />
                )}
            />
            <ActionMenu.Item
                label="بسته شده"
                slug="closed"
                extra={(
                    <ModalConfirmDefault
                        open={true}
                        title="تغییر وضعیت تیکت به بسته شده"
                        description="آیا از بستن تیکت اطمینان دارید؟"
                        onConfirm={({onClose})=>{changeStatus('closed', onClose)}}
                    />
                )}
            />
        </ActionMenu.Container>
    );
}

export default ChangeStatus;