import React, {useEffect, useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import {useList} from "@refinedev/core";
import requestHeaders from "@/utils/requestHeaders";
import useResourceAction from "@/hooks/useResourceAction";
import Form from "@/components/Form";
import {data} from "autoprefixer";
import Icon from "@/components/Icon";
import item from "@/modules/ticket/common/data-list/item";
import {flushSync} from "react-dom";

const items = [
    {name: 'برنز', ram: '4GB', cpu: '2 Core', disk: '40 GB HDD', price: '400,000'},
    {name: 'نقره', ram: '8GB', cpu: '4 Core', disk: '80 GB CEPH', price: '600,000'},
    {name: 'طلا', ram: '16GB', cpu: '8 Core', disk: '160 GB SSD', price: '800,000'},
    {name: 'الماس', ram: '32GB', cpu: '16 Core', disk: '320 GB SAS', price: '1,200,000'},
];

const FlavorSelectCustom = ({value, onChange: mainOnchange}) => {
    const [selectedItem, setSelected] = useState({});

    console.log(value);

    const {fetchList} = useResourceAction("flavors");

    const {items} = fetchList({
        filters: [
            {field: 'status', operator: 'eq', value: 'active'},
            {field: 'per_page', operator: 'eq', value: -1},
            {field: 'sort_by', operator: 'eq', value: 'price'},
        ],
    });

    // const {data: flavorsMD} = useList({
    //     resource: 'flavors',
    //     dataProviderName: 'compute',
    //     meta: {
    //         headers: requestHeaders,
    //     },
    // });
    //
    // const flavors = flavorsMD?.data;
    //
    // const items = (flavors || []).map(({id, name, ram, vcpus, disk, monthly_price: price}) => ({
    //     id, name, ram: `${ram/1024}GB`, cpus: `${vcpus} Core`, disk: `${disk} GB SSD`, price,
    // }));

    const [base, setBase] = useState({
        rams: [],
        cpus: [],
        disks: [],
        diskTypes: [],
    });

    useEffect(() => {
        // if (!value?.id || selectedItem?.id) {
        //     return;
        // }

        if (value?.id === selectedItem?.id && !!value?.id) {
            return;
        }

        const currentValue = value?.id ? value : items[0];

        // flushSync(() => {
        //     setSelected(currentValue)
        // });

        setSelected(currentValue)

        // prepareBase({flavors: items, current: currentValue});

        console.log(value);
    }, [items, value]);

    const getUnique = ({options, slug}) => {
        return [...(new Set(options.map(({[slug]: slugValue}) => slugValue)))].sort((a, b) => a-b);
    }

    const prepareBase = ({flavors, current}) => {
        console.log("prepareBase");


        const {cpu, ram, disk} = current || {};

        const cpus = getUnique({options: flavors, slug: 'cpu'});
        const rams = getUnique({options: flavors.filter(({cpu: itemCpu}) => itemCpu === cpu), slug: 'ram'});
        const disks = getUnique({
            options: flavors.filter(({
                                         cpu: itemCpu,
                                         ram: itemRam
                                     }) => itemCpu === cpu && itemRam === ram), slug: 'disk'
        });
        const diskTypes = getUnique({
            options: flavors.filter(({
                                         cpu: itemCpu,
                                         ram: itemRam,
                                         disk: itemDisk
                                     }) => itemCpu === cpu && itemRam === ram && itemDisk === disk),
            slug: 'disk_type'
        });

        setBase({...base, rams, cpus, disks, diskTypes});
    };

    const handleChange = ({part, newValue}) => {

        if (selectedItem?.[part] === newValue) {
            return;
        }

        console.log(part);
        console.log(newValue);

        const current = filterByPriority({
            options: items,
            current: {...selectedItem, [part]: newValue},
            priorities: ['cpu', 'ram', 'disk', 'disk_type']
        })[0];

        // flushSync(() => {
        //     setSelected(current);
        // })

        setSelected(current);

        // prepareBase({flavors: items, current});
    }

    useEffect(() => {
        prepareBase({flavors: items, current: selectedItem})
    }, [selectedItem]);

    const filterByPriority = ({options = [], priorities = [], current = {}}) => {
        console.log(priorities);
        console.log(current);
        let result = [...options];
        priorities.forEach((priority) => {
            const temp = result.filter(({[priority]: priorityValue}) => current[priority] === priorityValue);

            if (temp.length) {
                result = [...temp];
            }
        });

        return result;
    }

    useEffect(() => {
        if (typeof mainOnchange === "function") {
            mainOnchange(selectedItem)
        }
    }, [selectedItem]);

    const {rams = [], cpus = [], disks = [], diskTypes = []} = base || {};

    console.log(base);

    return (
        <div>

            <div className="border border-gray-300 rounded-lg divide-y divide-gray-300">
                <Item {...{
                    slug: 'cpu',
                    icon: 'cpu',
                    name: 'پردازنده',
                    unit: 'Core',
                    value: (selectedItem || {}).cpu,
                    onChange: changedValue => changedValue && selectedItem?.cpu && selectedItem.cpu !== changedValue ? handleChange({part: 'cpu', newValue: changedValue}) : null,
                    options: cpus.map(item => ({label: item, value: item})) || [],
                    className: "rounded-t-lg"
                }} />

                <Item {...{
                    slug: 'ram',
                    icon: 'ram',
                    name: 'حافظه',
                    unit: 'GB',
                    value: (selectedItem || {}).ram,
                    onChange: changedValue => changedValue && selectedItem?.ram && selectedItem.ram !== changedValue ? handleChange({part: 'ram', newValue: changedValue}) : null,
                    options: rams.map(item => ({label: item, value: item})) || [],
                }} />

                <Item {...{
                    slug: 'disk',
                    icon: 'hard-drive',
                    name: 'دیسک',
                    unit: 'GB',
                    value: (selectedItem || {}).disk,
                    onChange: changedValue => changedValue && selectedItem?.disk && selectedItem.disk !== changedValue ? handleChange({part: 'disk', newValue: changedValue}) : null,
                    options: disks.map(item => ({label: item, value: item})) || [],
                    className: "rounded-b-lg",
                }}
                // meta={(
                //     <Form.Item.Select
                //         id="disk_type"
                //         slug="disk_type"
                //         value={(selectedItem || {}).disk_type || ''}
                //         onChange={changedValue => selectedItem?.disk_type && selectedItem.disk_type !== changedValue ? handleChange({part: 'disk_type', newValue: changedValue}) : null}
                //         options={diskTypes.length ? diskTypes.map(item => ({label: `${item}`.toUpperCase(), value: item})) : []}
                //         className="w-24"
                //     />
                // )}
                />
            </div>

            <div className="mt-5 grid grid-cols-2 bg-slate-100 bg-opacity-80 divide-s divide-slate-300 rounded-lg py-5 px-2">
                <div className="text-center">
                    <span className="text-primary-600 text-lg font-bold"><PersianNumber withSeparator>{selectedItem?.price}</PersianNumber></span> <span className="text-xs text-slate-500 font-bold">تومان / ساعتی</span>
                </div>
                <div className="text-center">
                    <span className="text-primary-600 text-lg font-bold"><PersianNumber withSeparator>{selectedItem?.price_monthly}</PersianNumber></span> <span className="text-xs text-slate-500 font-bold">تومان / ماهانه</span>
                </div>
            </div>
        </div>
    )
}

const Item = ({slug, icon, name, value, unit, onChange, options, meta, className}) => {

    return (
        <div
            key={slug}
            className={classNames("relative bg-white px-4 py-5 sm:px-6 sm:pt-6", className)}
        >
            <dt className="flex items-start">
                <div className="rounded-md p-4 bg-primary-50 text-primary-600">
                    <Icon type={icon} className="h-6 w-6" aria-hidden="true"/>
                </div>
                <div className="ms-4 flex-1">
                    <p className="truncate text-sm font-medium text-slate-700">{name}</p>
                    <p className="text-xl font-semibold text-primary-600 pt-2">{`${value || ''}${unit}`}</p>
                </div>
                <div>{meta}</div>
            </dt>
            <dd className=" items-baseline">
                <Form.Item.Range
                    value={value}
                    onChange={onChange}
                    options={options || []}
                />
                <div className="flex justify-between mt-1 text-slate-500 text-xs font-bold" style={{direction: 'ltr'}}>
                    <div>{options.length ? Math.min(...options.map(({value: itemValue}) => itemValue)) : ''}{unit}</div>
                    <div>{options.length ? Math.max(...options.map(({value: itemValue}) => itemValue)) : ''}{unit}</div>
                </div>
            </dd>
        </div>
    );
}

export default FlavorSelectCustom;
