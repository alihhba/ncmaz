const tabs = [
    { name: 'اطلاعات', href: '#', current: true },
    { name: 'مشتری', href: '#', current: false },
    { name: 'سرویس', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs2({className, ...restProps}) {
    return (
        <div className={className} {...restProps}>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-primary-600 focus:ring-primary-600"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="isolate flex divide-s divide-gray-200 rounded-lg shadow" aria-label="Tabs">
                    {tabs.map((tab, tabIdx) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                tabIdx === 0 ? 'rounded-s-lg' : '',
                                tabIdx === tabs.length - 1 ? 'rounded-e-lg' : '',
                                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            <span>{tab.name}</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    tab.current ? 'bg-primary-600' : 'bg-transparent',
                                    'absolute inset-x-0 bottom-0 h-0.5'
                                )}
                            />
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}