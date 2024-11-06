import {Popover, Transition} from '@headlessui/react'
import React, {Fragment} from 'react'
import Icon from "@/components/Icon";

export default function PopoverExample({children, filters, setFilters}) {
    const label = "فیلتر"

    const resetFilters = () => {
        setFilters([...[]]);
    }

    return (
        <Popover className="relative">
            {({open}) => (
                <>

                    <Popover.Button
                        className={`
                ${open ? '' : 'text-opacity-90'}
                                    
                        w-[5.5rem] inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50`}
                    >
                        <Icon type="filter" className="me-2 h-4 w-4"/>
                        <span>{label}</span>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute end-0 z-10 mt-3 w-screen max-w-md px-4 sm:px-0 lg:max-w-xl">
                            {({close}) => (
                                <div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white">
                                    {React.cloneElement(children, {onClose: close})}
                                </div>
                            )}
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
