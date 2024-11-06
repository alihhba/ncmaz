import {useEffect, useState} from 'react'
import { RadioGroup } from '@headlessui/react'
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import {useList} from "@refinedev/core";
import requestHeaders from "@/utils/requestHeaders";
import useResourceAction from "@/hooks/useResourceAction";

const items = [
    { name: 'برنز', ram: '4GB', cpu: '2 Core', disk: '40 GB HDD', price: '400,000' },
    { name: 'نقره', ram: '8GB', cpu: '4 Core', disk: '80 GB CEPH', price: '600,000' },
    { name: 'طلا', ram: '16GB', cpu: '8 Core', disk: '160 GB SSD', price: '800,000' },
    { name: 'الماس', ram: '32GB', cpu: '16 Core', disk: '320 GB SAS', price: '1,200,000' },
];

const FlavorSelectPlan = ({value, onChange: mainOnchange}) => {
    const [selectedItem, setSelected] = useState({});

    const {fetchList} = useResourceAction("flavors");

    const {items} = fetchList({
        filters: [
            {field: 'status', operator: 'eq', value: 'active'},
            {field: 'is_plan', operator: 'eq', value: "1"},
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

    useEffect(()=>{
        setSelected(value || items[0]);
    }, [items, value]);

    useEffect(() => {
        if (typeof mainOnchange === "function") {
            mainOnchange(selectedItem)
        }
    }, [selectedItem]);

    return (
        <RadioGroup value={selectedItem} onChange={setSelected} className="max-w-2xl mx-auto">
            <RadioGroup.Label className="sr-only"> Server size </RadioGroup.Label>
            <div className="space-y-4">
                {(items || []).map((plan) => (
                    <RadioGroup.Option
                        key={plan.name}
                        value={plan}
                        className={({ checked, active }) =>
                            classNames(
                                checked ? 'border-transparent' : 'border-gray-300',
                                active ? 'border-primary-600 ring-2 ring-primary-600' : '',
                                'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between'
                            )
                        }
                    >
                        {({ active, checked }) => (
                            <>
                <span className="flex items-center">
                  <span className="flex flex-col text-sm">
                    <RadioGroup.Label as="span" className="font-bold text-gray-900 text-md">
                      {plan.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="text-gray-500 mt-2" style={{direction: 'ltr'}}>
                      <span className="block sm:inline" >
                        {plan.ram} GB / {plan.cpu} Core
                      </span>{' '}
                        <span className="hidden sm:mx-1 sm:inline" aria-hidden="true">
                        &middot;
                      </span>{' '}
                        <span className="block sm:inline">{plan.disk} GB {plan.disk_type.toUpperCase()}</span>
                    </RadioGroup.Description>
                  </span>
                </span>
                                <RadioGroup.Description
                                    as="span"
                                    className="mt-2 flex text-sm sm:mt-0 sm:ms-4 sm:flex-col sm:text-end"
                                >
                                    <span className="font-medium text-gray-900"><PersianNumber withSeparator>{plan.price_monthly}</PersianNumber> <span className="text-xs">تومان</span></span>
                                    <span className="ms-1 text-gray-500 sm:ms-0 mt-2">ماهانه</span>
                                </RadioGroup.Description>
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

export default FlavorSelectPlan;
