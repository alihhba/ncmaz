import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Link from "@/components/Link";

const ServerSections = ({id, children, className, ...restProps}) => {

    const tabs = [
        { name: 'نمودار مصرف', link: '/servers/1', icon: 'chart', current: true },
        { name: 'اسنپ شات', link: '/servers/1/snapshots', icon: 'image', current: false },
        // { name: 'Team Members', href: '#', icon: 'image', current: true },
        // { name: 'Billing', href: '#', icon: 'credit-card', current: false },
    ]

    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-s-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.name}
                                to={tab.link}
                                className={classNames(
                                    tab.current
                                        ? 'border-primary-500 text-primary-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                    'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                <Icon
                                    type={tab.icon}
                                    className={classNames(
                                        tab.current ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500',
                                        '-ms-0.5 me-2 h-5 w-5'
                                    )}
                                    aria-hidden="true"
                                />
                                <span>{tab.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ServerSections;