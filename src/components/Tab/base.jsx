import React from 'react';
import classNames from "@/utils/classNames";
import Link from "@/components/Link";
import Form from "@/components/Form";

export default function Tabs({tabs = [], className}) {
    return (
        <div className={classNames("", className)}>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    یک بخش را انتخاب کنید.
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <Form.Item.Select
                    id="tabs"
                    name="tabs"
                    // className="block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    value={tabs.find((tab) => tab.current || {}).name}
                    onChange={()=>tabs.find((tab) => tab.current || {})?.onClick()}
                    options={tabs}
                    optionsMapping={{
                        label: 'name',
                        value: 'name',
                    }}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </Form.Item.Select>
            </div>
            <div className="hidden sm:block">
                <nav className="flex items-center justify-between" aria-label="Tabs">
                    {tabs.map((tab) => (
                        tab.onClick ? (
                            <div
                                key={tab.name}
                                onClick={tab.onClick}
                                className={classNames(
                                    tab.current ? 'bg-primary-50 text-primary-600 font-bold' : 'text-gray-500 hover:text-gray-700',
                                    'flex-grow text-center px-3 py-2 font-medium text-sm rounded-md cursor-pointer'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.name}
                            </div>
                        ) : (
                            <Link
                                key={tab.name}
                                to={tab.link}
                                className={classNames(
                                    tab.current ? 'text-primary-50 bg-primary-600 font-bold' : 'text-gray-500 hover:text-gray-700',
                                    'flex-grow text-center px-3 py-3 font-medium text-sm rounded-md'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.name}
                            </Link>
                        )
                    ))}
                </nav>
            </div>
        </div>
    )
}