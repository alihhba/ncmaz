import React, {useEffect, useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import {useList} from "@refinedev/core";
import requestHeaders from "@/utils/requestHeaders";
import useResourceAction from "@/hooks/useResourceAction";
import FlavorSelectPlan from "@/modules/server/components/specifications/partials/components/flavor-plan";
import FlavorSelectCustom from "@/modules/server/components/specifications/partials/components/flavor-custom";
import Tabs from "@/modules/ticket/common/tabs";
import TicketInformation from "@/panels/accounting/pages/tickets/components/Sections/informations";
import TicketService from "@/panels/accounting/pages/tickets/components/Sections/service";
import Link from "@/components/Link";

const items = [
    {name: 'برنز', ram: '4GB', cpu: '2 Core', disk: '40 GB HDD', price: '400,000'},
    {name: 'نقره', ram: '8GB', cpu: '4 Core', disk: '80 GB CEPH', price: '600,000'},
    {name: 'طلا', ram: '16GB', cpu: '8 Core', disk: '160 GB SSD', price: '800,000'},
    {name: 'الماس', ram: '32GB', cpu: '16 Core', disk: '320 GB SAS', price: '1,200,000'},
];

const FlavorSelect = ({value, onChange}) => {

    const [activeTab, setActiveTab] = useState('plan');

    const tabs = [
        {slug: 'plan', name: 'پلن', panel: <FlavorSelectPlan key="panel-plan" value={value} onChange={onChange}/>},
        {slug: 'custom', name: 'انتخابی', panel: <FlavorSelectCustom key="panel-custom" value={value} onChange={onChange}/>},
    ];

    useEffect(() => {
        const {id, is_plan: isPlan} = value || {};
        const type = !id || isPlan ? 'plan' : 'custom';

        if (type !== activeTab) {
            setActiveTab(type);
        }

    }, [value]);

    return (
        <div className="max-w-2xl mx-auto">
            <nav className="flex items-center justify-between mb-6 border-2 border-primary-600 rounded-lg" aria-label="Tabs">
                {tabs
                    .map((tab) => ({
                        ...tab,
                        current: tab.slug === activeTab,
                        onClick: () => {
                            setActiveTab(tab.slug)
                        }
                    }))
                    .map(tab => (
                        <div
                            key={tab.name}
                            onClick={tab.onClick}
                            className={classNames(
                                tab.current ? 'bg-primary-50 text-primary-600 font-bold' : 'text-gray-500 hover:text-gray-700',
                                'flex-grow text-center px-3 py-3 font-medium text-sm rounded-md cursor-pointer'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            {tab.name}
                        </div>
                    ))}
            </nav>

            {tabs.map(({slug, panel}) => (
                slug === activeTab ? panel : null
            ))}
        </div>
    )
}

export default FlavorSelect;
