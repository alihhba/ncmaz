import {useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import FormItemSelect from "@/components/Form/Item/Select";

const mailingLists = [
    {id: 1, title: 'CentOS', location: 'ایران', icon: 'image-centos', versions: [
                        {id: 1, value: '6', label: 6},
                        {id: 2, value: '7', label: 7},
                    ], users: '621 users'},
    {id: 2, title: 'Debian', location: 'فرانسه', icon: 'image-debian', versions: [
                        {id: 1, value: '10', label: 10},
                        {id: 2, value: '11', label: 11},
                    ], users: '1200 users'},
    {id: 3, title: 'Ubuntu', location: 'آلمان', icon: 'image-ubuntu', versions: [
                        {id: 1, value: '22.04', label: 22.04},
                        {id: 2, value: '20.04', label: 20.04},
                        {id: 3, value: '18.4', label: 18.04},
                    ], users: '2740 users'},
    {id: 4, title: 'Windows', location: 'هلند', icon: 'image-windows', versions: [
                        {id: 1, value: '2012R2', label: '2012R2'},
                        {id: 2, value: '2016', label: 2016},
                        {id: 3, value: '2019', label: 2019},
                        {id: 3, value: '2022', label: 2022},
                    ], users: '2740 users'},
]

const ImageSelect = () => {
    const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

    return (
        <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
            <RadioGroup.Label className="text-base font-medium text-gray-900">برای ساخت سرور، یک سیستم عامل را انتخاب نمایید.</RadioGroup.Label>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 max-w-2xl mx-auto">
                {mailingLists.map((mailingList) => (
                    <RadioGroup.Option
                        key={mailingList.id}
                        value={mailingList}
                        className={({checked, active}) =>
                            classNames(
                                checked ? 'border-transparent' : 'border-gray-300',
                                active ? 'border-primary-600 ring-2 ring-primary-600' : '',
                                'relative flex cursor-pointer rounded-lg border bg-white shadow-sm focus:outline-none'
                            )
                        }
                    >
                        {({checked, active}) => (
                            <>
                <span className="flex flex-1">
                    <div
                        className="p-6 aspect-square bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
                        <Icon type={mailingList.icon} className="w-12 h-12"/>
                    </div>
                  <span className="flex flex-col p-5 w-full">
                    <RadioGroup.Label as="span" className="block text-md font-medium text-gray-900 mb-1">
                      {mailingList.title}
                    </RadioGroup.Label>
                    <FormItemSelect slug={`${mailingList.id}-version`} options={mailingList.versions} />
                  </span>
                </span>
                                {/*<div className="p-5">*/}
                                {/*    <Icon*/}
                                {/*        type="check-circle"*/}
                                {/*        className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600')}*/}
                                {/*        aria-hidden="true"*/}
                                {/*    />*/}
                                {/*</div>*/}
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

export default ImageSelect;