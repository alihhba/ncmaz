import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Combobox} from '@headlessui/react'
import Icon from "@/components/Icon";
import classNames from "@/utils/classNames";
import {FormItemInput} from "@/components/Form/Item/Input";

export default function FormItemSelectWithSearch({
                                                     slug,
                                                     value,
                                                     options: providedOptions = [],
                                                     onChange: providedOnChange,
                                                     fullSubmit = false,
                                                     className,
                                                     optionsMapping = {},
                                                     isBoolean = false,
                                                     nullable = false,
                                                     withAll = false,
                                                     inputRef,
                                                     autoSelectFirstOption = false,
                                                 }) {

    const {label: labelSlug = "label", value: valueSlug = "value"} = optionsMapping || {};

    const options = useMemo(() => ([
        ...(withAll ? [{
            label: 'همه',
            value: undefined,
        }] : []),
        ...(nullable ? [{
            label: 'هیچکدام',
            value: null,
        }] : []),
        ...providedOptions,
    ]), [providedOptions, withAll, nullable]);

    const [query, setQuery] = useState('')
    const [selectedItem, setSelected] = useState({})

    const filteredOptions =
        query === ''
            ? options
            : options.filter((option) => {
                return option[labelSlug].toLowerCase().includes(query.toLowerCase())
            });

    const onChange = item => {
        setSelected(item);

        if (!providedOnChange || typeof providedOnChange !== "function") {
            return;
        }

        if (fullSubmit) {
            providedOnChange(item);
        } else {
            providedOnChange(item[valueSlug]);
        }
    };

    useEffect(() => {
        const preparedValue = isBoolean && typeof value === "boolean" ? (value ? "1" : "0") : value;

        if (autoSelectFirstOption && !value && options.length) {
            setSelected(options[0]);
        }

        const foundOption = options.find(({[valueSlug]: itemValue}) => preparedValue === itemValue);
        //without selected item but can find. has selected item but with different value. values are same but not found either.
        if ((!selectedItem.label && !!foundOption) || (selectedItem && selectedItem[valueSlug] !== value) || (selectedItem && selectedItem[valueSlug] === value && !foundOption)) {
            setSelected(foundOption || {});
        }
    }, [value, providedOptions, autoSelectFirstOption]);

    return (
        <Combobox as="div" id={slug} name={slug} value={selectedItem} onChange={onChange} className="max-w-lg"
                  nullable={nullable}>
            {/*<Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Combobox.Label>*/}
            <div className="relative">
                <Combobox.Input
                    ref={inputRef}
                    className="relative w-full rounded-md max-w-lg cursor-default border border-gray-300 bg-white py-2 ps-3 pe-10 text-start shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(option) => option && option[labelSlug]}
                />
                <Combobox.Button
                    className={classNames("absolute inset-y-0 end-0 flex items-center rounded-md px-2 focus:outline-none")}>
                    <Icon type="chevron-down" className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                </Combobox.Button>

                {filteredOptions.length > 0 && (
                    <Combobox.Options
                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredOptions.map((option) => (
                            <Combobox.Option
                                key={option[valueSlug]}
                                value={option}
                                className={({active}) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 ps-3 pe-9',
                                        active ? 'bg-primary-600 text-white' : 'text-gray-900'
                                    )
                                }
                            >
                                {({active, selected}) => (
                                    <>
                                        <div className="flex">
                                            <span
                                                className={classNames('truncate', selected && 'font-semibold')}>{option[labelSlug]}</span>
                                            <span
                                                className={classNames(
                                                    'ms-2 truncate text-gray-500',
                                                    active ? 'text-primary-200' : 'text-gray-500'
                                                )}
                                            >
                        {option.username}
                      </span>
                                        </div>

                                        {selected && (
                                            <span
                                                className={classNames(
                                                    'absolute inset-y-0 end-0 flex items-center pe-4',
                                                    active ? 'text-white' : 'text-primary-600'
                                                )}
                                            >
                        <Icon type="check" className="h-5 w-5" aria-hidden="true"/>
                      </span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div>
        </Combobox>
    )
}