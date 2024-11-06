import React from "react";
import classNames from "@/utils/classNames";
import {ModalConfirm} from "@/components/Modal/Confirm";
import {ModalBase} from "@/components/Modal/Base";
import {ModalForm} from "@/components/Modal/Form";

export const Modal = ({children, className, ...restProps}) => {
    return ({
        Base: ModalBase,
        Confirm: ModalConfirm,
        Form: ModalForm,
    });
};

export default Modal;