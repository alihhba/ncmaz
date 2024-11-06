import React, {useState} from "react";
import classNames from "@/utils/classNames";
import {ModalBase} from "@/components/Modal/Base";
import Icon from "@/components/Icon";
import {Dialog} from "@headlessui/react";

export const ModalConfirmDefault = ({open, children, icon="exclamation-triangle", title, description, confirmText = "تایید", onConfirm = () => {}, cancelText = "لغو", onClose = () =>{}, iconContainerProps={}, iconProps = {}, confirmProps={}, cancelProps={}, className, ...restProps}) => {

    return (
        <ModalBase
            className={classNames("", className)}
            open={open}
            onClose={onClose}
            {...restProps}
        >
            <div className="sm:flex sm:items-start">
                <div className={classNames("mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 sm:mx-0 sm:h-10 sm:w-10", iconContainerProps.className)}>
                    <Icon type={icon} className={classNames("h-6 w-6 text-amber-600", iconProps.className)} aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ms-4 sm:text-start">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        {title}
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500 text-justify leading-6">
                            {description}
                        </p>
                    </div>
                </div>
                {children}
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                    type="button"
                    onClick={() => {onConfirm({onClose})}}
                    {...confirmProps}
                    className={classNames("inline-flex w-full justify-center rounded-md border border-transparent bg-amber-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:ms-3 sm:w-[5.5rem] sm:text-sm", confirmProps && confirmProps.className)}
                >
                    {confirmText}
                </button>
                <button
                    type="button"
                    {...cancelProps}
                    className={classNames("mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:ms-3 sm:w-[5.5rem] sm:text-sm", cancelProps && cancelProps.className)}
                    onClick={onClose}
                    // ref={cancelButtonRef}
                >
                    {cancelText}
                </button>
            </div>
        </ModalBase>
    );
};