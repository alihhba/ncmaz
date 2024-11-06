import React, {useState, Fragment} from "react";
import { Transition } from '@headlessui/react';
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";

export const Notification = ({toast, dismiss, id, title, type: typeSlug, description, children, className, ...restProps}) => {

    const [show, setShow] = useState(true);
    const icons = {
        success: 'check-circle',
        warning: 'exclamation-triangle',
        error: 'exclamation-triangle',
    };

    const types = {
        success: {
            icon: 'check-circle',
            color: 'text-green-400'
        },
        warning: {
            icon: 'exclamation-triangle',
            color: 'text-amber-400'
        },
        error: {
            icon: 'exclamation-triangle',
            color: 'text-red-400'
        },
        default: {
            icon: 'exclamation-circle',
            color: 'text-blue-400'
        }
    }

    const type = types[typeSlug] || types.default;

    return (
        <Transition
            show={toast.visible}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div key={`notifications-${id}`} className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <Icon type={type.icon} className={classNames("h-6 w-6", type.color)} aria-hidden="true" />
                        </div>
                        <div className="ms-3 w-0 flex-1 pt-0.5">
                            <p className="text-sm font-medium text-gray-900">{title}</p>
                            {description ? (
                                <p className="mt-1 text-sm text-gray-500">{description}</p>
                            ): null}
                        </div>
                        <div className="ms-4 flex flex-shrink-0">
                            <button
                                type="button"
                                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                onClick={dismiss}
                            >
                                <span className="sr-only">بستن</span>
                                <Icon type="x-mark" className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default Notification;