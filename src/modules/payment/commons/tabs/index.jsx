import React, {useEffect, useState} from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Link from "@/components/Link";

const Tabs = ({current = '', ...restProps}) => {

    const [tabs, setTabs] = useState([
            {id: 'invoices', name: 'فاکتورها', link: '/payments/invoices', icon: 'credit-card'},
            {id: 'transactions', name: 'تراکنش‌ها', link: '/payments/transactions', icon: 'image'},
            // { name: 'Team Members', href: '#', icon: 'image', current: true },
            // { name: 'Billing', href: '#', icon: 'credit-card', current: false },
        ]
    );

    return (
        <div className="-m-5 me-2">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    انتخاب
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    defaultValue={tabs.map(({id, ...restTabProps}) => ({id, current: id === current, ...restTabProps})).find((tab) => tab.current).name}
                >
                    {tabs
                        .map(({id, ...restTabProps}) => ({id, current: id === current, ...restTabProps}))
                        .map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-gray-200">
                    <nav className="-mb-px flex space-s-8" aria-label="Tabs">
                        {tabs
                            .map(({id, ...restTabProps}) => ({id, current: id === current, ...restTabProps}))
                            .map((tab) => (
                                <Link
                                    key={tab.name}
                                    to={tab.link}
                                    className={classNames(
                                        tab.current
                                            ? 'border-primary-500 text-primary-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                        'group inline-flex items-center py-6 px-6 border-b-2 font-medium text-sm'
                                    )}
                                    aria-current={tab.current ? 'page' : undefined}
                                >
                                    {/*<Icon*/}
                                    {/*    type={tab.icon}*/}
                                    {/*    className={classNames(*/}
                                    {/*        tab.current ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500',*/}
                                    {/*        '-ms-0.5 me-2 h-5 w-5'*/}
                                    {/*    )}*/}
                                    {/*    aria-hidden="true"*/}
                                    {/*/>*/}
                                    <span>{tab.name}</span>
                                </Link>
                            ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Tabs;