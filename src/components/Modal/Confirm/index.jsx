import React, {useState} from "react";
import classNames from "@/utils/classNames";
import {ModalBase} from "@/components/Modal/Base";
import Icon from "@/components/Icon";
import {Dialog} from "@headlessui/react";

export const ModalConfirm = ({children, className, ...restProps}) => {

    const [open, setOpen] = useState(true);

    return (
        <ModalBase
            className={classNames("", className)}
            open={open}
            setOpen={setOpen}
            {...restProps}
        >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        {/*<ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />*/}
                        <Icon type="exclamation-triangle" className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ms-4 sm:text-start">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Deactivate account
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Are you sure you want to deactivate your account? All of your data will be permanently
                                removed. This action cannot be undone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ms-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                >
                    Deactivate
                </button>
                <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:ms-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    // ref={cancelButtonRef}
                >
                    Cancel
                </button>
            </div>
        </ModalBase>
    );
};