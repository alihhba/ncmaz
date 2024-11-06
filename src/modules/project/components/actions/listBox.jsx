import React, {Fragment, useState} from "react";
import classNames from "@/utils/classNames";
import {Listbox, Transition} from "@headlessui/react";
import Icon from "@/components/Icon";

export const ActionListBox = ({children, className, ...restProps}) => {

    const [selected, setSelected] = useState({});

    const publishingOptions = [
        {name: 'published', description: 'انتشار'},
        {name: 'draft', description: 'پیش نویس'},
    ];

    return (
        <Listbox as="div" value={selected} onChange={setSelected} className="sm:ms-3">
            {({ open }) => (
                <>
                    <Listbox.Label className="sr-only"> Change published status </Listbox.Label>
                    <div className="relative">
                        <div className="inline-flex divide-x divide-purple-600 rounded-md shadow-sm">
                            <div className="inline-flex divide-x divide-purple-600 rounded-md shadow-sm">
                                <div className="inline-flex items-center rounded-s-md border border-transparent bg-purple-500 py-2 ps-3 pe-4 text-white shadow-sm">
                                    <Icon type="filter" className="h-5 w-5" aria-hidden="true" />
                                    <p className="ms-2.5 text-sm font-medium">{selected.name}</p>
                                </div>
                                <Listbox.Button className="inline-flex items-center rounded-s-none rounded-e-md bg-purple-500 p-2 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                                    <span className="sr-only">Change published status</span>
                                    <Icon type="chevron-down" className="h-5 w-5 text-white" aria-hidden="true" />
                                </Listbox.Button>
                            </div>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute start-0 z-10 mt-2 -me-1 w-72 origin-top-end divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:start-auto sm:end-0">
                                {publishingOptions.map((option) => (
                                    <Listbox.Option
                                        key={option.name}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-purple-500' : 'text-gray-900',
                                                'cursor-default select-none p-4 text-sm'
                                            )
                                        }
                                        value={option}
                                    >
                                        {({ selected, active }) => (
                                            <div className="flex flex-col">
                                                <div className="flex justify-between">
                                                    <p className={selected ? 'font-semibold' : 'font-normal'}>{option.name}</p>
                                                    {selected ? (
                                                        <span className={active ? 'text-white' : 'text-purple-500'}>
                                        <Icon type="filter" className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                                    ) : null}
                                                </div>
                                                <p className={classNames(active ? 'text-purple-200' : 'text-gray-500', 'mt-2')}>
                                                    {option.description}
                                                </p>
                                            </div>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};

export default ActionListBox;