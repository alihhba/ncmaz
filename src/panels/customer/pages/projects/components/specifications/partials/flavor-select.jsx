import {useEffect, useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import {useList} from "@refinedev/core";
import requestHeaders from "@/utils/requestHeaders";

const plans = [
    // { name: 'برنز', ram: '4GB', cpus: '2 Core', disk: '40 GB SSD', price: '400,000' },
    // { name: 'نقره', ram: '8GB', cpus: '4 Core', disk: '80 GB SSD', price: '600,000' },
    // { name: 'طلا', ram: '16GB', cpus: '8 Core', disk: '160 GB SSD', price: '800,000' },
    // { name: 'الماس', ram: '32GB', cpus: '16 Core', disk: '320 GB SSD', price: '1,200,000' },
    {name: 'CalOne', ram: '1GB', cpus: '1 Core', disk: '20 GB SSD', price: '400,000'},
    {name: 'Tochal', ram: '4GB', cpus: '2 Core', disk: '40 GB SSD', price: '400,000'}
];

const FlavorSelect = ({items: itemsF}) => {

    const {data: flavorsMD} = useList({
        resource: 'flavors',
        dataProviderName: 'compute',
        meta: {
            headers: requestHeaders,
        },
    });

    const flavors = flavorsMD?.data;

    // const items = flavors.map(({id, name, ram, vcpus, disk, price})=>([
    //     {name: 'CalOne', ram: '1GB', cpus: '1 Core', disk: '20 GB SSD', price: '400,000' },
    //     {name: 'Tochal', ram: '4GB', cpus: '2 Core', disk: '40 GB SSD', price: '400,000' }
    // ]);

    console.log(flavors);

    const [selected, setSelected] = useState({})

    const items = plans;

    useEffect(() => {
        setSelected(items[0]);
    }, [items]);

    return (
        <RadioGroup value={selected} onChange={setSelected} className="max-w-2xl mx-auto">
            <RadioGroup.Label className="sr-only"> Server size </RadioGroup.Label>
            <div className="space-y-4">
                {items.map((plan) => (
                    <RadioGroup.Option
                        key={plan.name}
                        value={plan}
                        className={({checked, active}) =>
                            classNames(
                                checked ? 'border-transparent' : 'border-gray-300',
                                active ? 'border-primary-600 ring-2 ring-primary-600' : '',
                                'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between'
                            )
                        }
                    >
                        {({active, checked}) => (
                            <>
                <span className="flex items-center">
                  <span className="flex flex-col text-sm">
                    <RadioGroup.Label as="span" className="font-bold text-gray-900 text-md">
                      {plan.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="text-gray-500 mt-2">
                      <span className="block sm:inline">
                        {plan.ram} / {plan.cpus}
                      </span>{' '}
                        <span className="hidden sm:mx-1 sm:inline" aria-hidden="true">
                        &middot;
                      </span>{' '}
                        <span className="block sm:inline">{plan.disk}</span>
                    </RadioGroup.Description>
                  </span>
                </span>
                                <RadioGroup.Description
                                    as="span"
                                    className="mt-2 flex text-sm sm:mt-0 sm:ms-4 sm:flex-col sm:text-end"
                                >
                                    <span
                                        className="font-medium text-gray-900"><PersianNumber>{plan.price}</PersianNumber> <span
                                        className="text-xs">تومان</span></span>
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

export default FlavorSelect;
