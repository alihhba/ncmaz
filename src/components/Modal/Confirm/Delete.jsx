import React, {useState} from "react";
import classNames from "@/utils/classNames";
import {ModalBase} from "@/components/Modal/Base";
import Icon from "@/components/Icon";
import {Dialog} from "@headlessui/react";
import {ModalConfirmDefault} from "@/components/Modal/Confirm/Default";

export const ModalConfirmDelete = ({
                                       open,
                                       onClose,
                                       action,
                                       actionProps = {},
                                       children,
                                       icon = "exclamation-triangle",
                                       title = "حذف",
                                       description = "آیا از حذف این مورد اطمینان دارید؟",
                                       confirmText = "حذف",
                                       onConfirm: onDelete,
                                       cancelText,
                                       onCancel,
                                       confirmProps,
                                       cancelProps,
                                       className,
                                       ...restProps
                                   }) => {

    const onConfirm = () => {

        if (onDelete) {
            onDelete();
            onClose();
        } else {
            action(
                {...actionProps},
                {
                    onSuccess: () => {
                        onClose();
                    },
                    onError: () => {
                        onClose();
                    },
                })
            ;
        }
    };

    return (
        <ModalConfirmDefault
            className={classNames("", className)}
            open={open}
            onClose={onClose}
            icon={icon}
            iconContainerProps={{
                className: "!bg-red-100"
            }}
            iconProps={{
                className: "!text-red-600"
            }}
            title={title}
            description={description}
            confirmText={confirmText}
            confirmProps={{
                className: "!bg-red-600 hover:!bg-red-700 focus:!ring-red-500",
                onClick: onConfirm
            }}
            {...restProps}
        />
    );
};