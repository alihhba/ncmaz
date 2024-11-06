import React from "react";
import {useModal, useUpdate} from "@refinedev/core";
import {ModalConfirmDefault} from "@/components/Modal/Confirm/Default";

const CloseTicket = ({ticketId}) => {

    const {visible, show, close} = useModal();

    const {mutate: updateTicket} = useUpdate();

    const closeTicket = () => {
        updateTicket({
            resource: "tickets",
            id: ticketId,
            values: {
                status: "closed",
            }
        }, {
            onSuccess: close,
        })
    }

    return (
        <div>
            <button
                className="border border-slate-300 hover:border-slate-400 text-sm text-slate-600 hover:text-slate-700 rounded-lg px-3 py-2"
                onClick={show}
            >
                بستن تیکت
            </button>

            <ModalConfirmDefault
                open={visible}
                title="بستن تیکت"
                description="آیا از بستن تیکت اطمینان دارید؟"
                onClose={close}
                onConfirm={closeTicket}
            />
        </div>
    );
}

export default CloseTicket;