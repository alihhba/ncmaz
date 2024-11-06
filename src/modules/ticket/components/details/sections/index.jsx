import React, {useState} from 'react';
import Placeholder from "@/components/Placeholder";
import Tabs from "@/modules/ticket/common/tabs";
import TicketInformation from "@/modules/ticket/components/details/sections/informations";
import TicketCustomer from "@/modules/ticket/components/details/sections/customer";
import TicketService from "@/modules/ticket/components/details/sections/service";

export default function Sections({data}) {
    const [activeTab, setActiveTab] = useState('information');
    const tabs = [
        {slug: 'information', name: 'اطلاعات', panel: <TicketInformation data={data}/>},
        // {slug: 'customer', name: 'مشتری', panel: <TicketCustomer/>},
        {slug: 'service', name: 'سرویس', panel: <TicketService data={data} />},
    ];

    return (
        <div className="space-y space-y-4 sticky top-8">
            <Placeholder.Card bodyProps={{className: 'sm:p-3'}}>
                <Tabs
                    tabs={tabs.map(({slug, ...restTabProps}) => ({
                        slug,
                        ...restTabProps,
                        current: slug === activeTab,
                        onClick: () => setActiveTab(slug),
                    }))}
                />
            </Placeholder.Card>
            {tabs.map(({slug, panel}) => (
                slug === activeTab ? panel : null
            ))}
        </div>
    );
}