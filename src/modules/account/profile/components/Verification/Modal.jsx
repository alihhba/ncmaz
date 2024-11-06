import React from "react";
import {useModal, useUpdate} from "@refinedev/core";
import {ModalConfirmDefault} from "@/components/Modal/Confirm/Default";
import {ModalForm} from "@/components/Modal/Form";
import {ModalBase} from "@/components/Modal/Base";
import Verification from "./Otp";

const VerificationModal = ({open, mobile, onSubmit, onCancel}) => {

    return (
        <ModalBase
            open={open}
        >
            <div className="py-4 px-6">
                <Verification
                    mobile={mobile}
                    onBack={onCancel}
                    onSubmit={onSubmit}
                />
            </div>
        </ModalBase>
    );
}

export default VerificationModal;