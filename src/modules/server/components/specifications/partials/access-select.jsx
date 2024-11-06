import {useEffect, useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";

const items = [
    {
        id: 1,
        title: 'کلید SSH',
        icon: 'terminal',
    },
    {
        id: 2,
        title: 'کلمه عبور ثابت',
        icon: 'lock',
    },
]

const AccessSelect = ({value, onChange}) => {
    const [selectedMailingLists, setSelectedMailingLists] = useState();

    useEffect(() => {
        setSelectedMailingLists(value || items[0])
    }, [items, value]);

    useEffect(() => {
        if (typeof onChange === "function") {
            onChange(selectedMailingLists);
        }
    }, [selectedMailingLists]);

    return (
        <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists} className="max-w-2xl mx-auto">
            <RadioGroup.Label className="text-base font-medium text-gray-900">برای ساخت سرور، ابتدا یک دیتاسنتر را
                انتخاب نمایید.</RadioGroup.Label>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                {items.map((mailingList) => (
                    <RadioGroup.Option
                        key={mailingList.id}
                        value={mailingList}
                        className={({checked, active}) =>
                            classNames(
                                checked ? 'border-transparent' : 'border-gray-300',
                                active ? 'border-primary-600 ring-2 ring-primary-600' : '',
                                'relative flex cursor-pointer rounded-lg border bg-white p-5 shadow-sm focus:outline-none'
                            )
                        }
                    >
                        {({checked, active}) => (
                            <>
                <span className="flex flex-1 flex-col">
                    <div className="flex items-center">
                        <div
                            className="flex-shrink-0 p-3 rounded-full bg-primary-50 me-4 flex items-center justify-center overflow-hidden text-primary-600">
                            <Icon type={mailingList.icon} className="w-8 h-8"/>
                        </div>
                        <RadioGroup.Label as="span" className="block text-md font-medium text-gray-900">
                        {mailingList.title}
                        </RadioGroup.Label>
                    </div>
                  <span className="flex flex-col ms-18">

                    {/*<RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-600">*/}
                    {/*  <div>{mailingList.location}</div>*/}
                    {/*</RadioGroup.Description>*/}
                  </span>
                </span>
                                {/*<Icon*/}
                                {/*    type="check-circle"*/}
                                {/*    className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600')}*/}
                                {/*    aria-hidden="true"*/}
                                {/*/>*/}
                                <span
                                    className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-primary-600' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-lg'
                                    )}
                                    aria-hidden="true"
                                />
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

export default AccessSelect;