import {Fragment, useEffect, useState} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import FormItemSelectController from "@/components/Form/Item/Select/controller";
import FormItemSelectWithSearch from "@/components/Form/Item/Select/searchable";

export default function FormItemSelect({slug, control, ...props}) {

    if (control) {
        return (
            <FormItemSelectController
                slug={slug}
                control={control}
                {...props}
            />
        )
    }

    const {withSearch} = props;

    if (withSearch) {
        return (
            <FormItemSelectWithSearch
                slug={slug}
                {...props}
            />
        );
    }

    const {
        defaultValue,
        value,
        options: providedOptions = [],
        onChange: providedOnChange,
        fullSubmit = false,
        className,
        optionsMapping = {},
        isBoolean = false,
        inputRef,
        withAll = false,
        ...restProps
    } = props;
    const {label: labelSlug = "label", value: valueSlug = "value"} = optionsMapping || {};

    const options = withAll ? ([{
        label: 'همه',
        value: undefined,
    }, ...providedOptions]) : providedOptions;

    const [selectedItem, setSelected] = useState({});

    const onChange = item => {
        console.log(item);
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
        setSelected(options.find(({[valueSlug]: itemValue}) => preparedValue === itemValue) || {});
    }, [value, providedOptions]);

    return (
        <Listbox key={slug} value={selectedItem} name={slug} onChange={onChange} defaultValue={defaultValue}>
            {({open}) => (
                <>
                    {/*<Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label>*/}
                    <div className={classNames("relative", className)}>
                        <Listbox.Button
                            id={slug}
                            ref={inputRef}
                            className="relative w-full max-w-lg cursor-default rounded-md border border-gray-300 bg-white py-2 ps-3 pe-10 text-start shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm">
                            <span className="block truncate h-5"> {selectedItem[labelSlug]}</span>
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
                                className="absolute z-10 mt-1 max-h-60 w-full max-w-lg overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {options.map((item) => (
                                    <Listbox.Option
                                        key={item[valueSlug]}
                                        className={({active}) =>
                                            classNames(
                                                active ? 'text-primary-600 bg-primary-50' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 ps-3 pe-9',
                                                item.level === 2 ? 'ms-6 border-r' : (item.level === 3 ? 'ms-9 border-r' : (item.level >= 4 ? 'ms-12 border-r' : ''))
                                            )
                                        }
                                        value={item}
                                    >
                                        {({selected, active}) => (
                                            <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {item[labelSlug]}
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
