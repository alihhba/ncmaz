import {Fragment, useEffect, useState} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";

const defaultItems = [
    {id: 1, name: 'ساعت گذشته'},
    {id: 2, name: 'روز گذشته'},
    {id: 3, name: 'هفته گذشته'},
    {id: 4, name: 'ماه گذشته'},
]

export default function FormItemSelect({slug, options: definedItems = [], className, ...restProps}) {
    const [selected, setSelected] = useState(defaultItems[0])
    const [items, setItems] = useState(defaultItems);

    console.log(definedItems);
    console.log(selected);

    useEffect(() => {
        if (definedItems.length) {
            setItems([...definedItems.map(({value, label, ...restOptionProps}) => ({
                id: value,
                name: label,
                value, ...restOptionProps
            }))]);
        }

    }, [definedItems]);

    useEffect(() => {
        setSelected({...items[0]});
    }, [items]);

    return (
        <Listbox name={slug} value={selected} onChange={setSelected} {...restProps}>
            {({open}) => (
                <>
                    {/*<Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label>*/}
                    <div className={classNames("relative", className)}>
                        <Listbox.Button
                            className="relative w-full max-w-lg cursor-default rounded-md border border-gray-300 bg-white py-2 ps-3 pe-10 text-start shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-2">
                <Icon type="chevron-down" className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                className="absolute max-w-lg z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {items.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        className={({active}) =>
                                            classNames(
                                                active ? 'text-white bg-primary-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 ps-3 pe-9'
                                            )
                                        }
                                        value={person}
                                    >
                                        {({selected, active}) => (
                                            <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-primary-600',
                                                            'absolute inset-y-0 end-0 flex items-center pe-3'
                                                        )}
                                                    >
                            <Icon type="check" className="h-5 w-5" aria-hidden="true"/>
                          </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
