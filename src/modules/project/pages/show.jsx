import React, {useState} from "react";
import Page from "@/components/Page";
import Information from "@/modules/server/components/details/sections/information";
import Sections from "@/modules/server/components/details/sections";
import Placeholder from "@/components/Placeholder";
import Tabs2 from "@/modules/ticket/components/details/tabs2";
import Tabs from "@/modules/server/components/details/sections/tabs";
import TicketInformation from "@/modules/ticket/components/details/sections/informations";
import TicketCustomer from "@/modules/ticket/components/details/sections/customer";
import TicketService from "@/modules/ticket/components/details/sections/service";

export const ProjectShow = ({children}) => {

    const [activeTab, setActiveTab] = useState('information');
    const tabs = [
        {slug: 'information', name: 'اطلاعات', panel: <TicketInformation/>},
        {slug: 'customer', name: 'مشتری', panel: <TicketCustomer/>},
        {slug: 'service', name: 'سرویس', panel: <TicketService/>},
        {slug: 'service', name: 'سرویس', panel: <TicketService/>},
    ];

    return (
        <Page>
            <Page.Content>
                <Information />
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
                {children}
            </Page.Content>
        </Page>
    );
};