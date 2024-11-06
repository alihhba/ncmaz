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
import {useList, useOne, useParsed} from "@refinedev/core";
import Icon from "@/components/Icon";
import requestHeaders from "@/utils/requestHeaders";

export const ServerShow = ({children}) => {

    const {id} = useParsed();
    const {data} = useOne({
        resource: 'server',
        id,
        dataProviderName: 'serverD',
        meta: {
            headers: requestHeaders,
        },
        pagination: {
            mode: 'off',
        },
    });

    console.log(data?.data);

    const [activeTab, setActiveTab] = useState('information');
    const tabs = [
        {slug: 'usage', name: 'نمودار استفاده', link: `/servers/${id}/usage`, current: true},
        {slug: 'console', name: 'کنسول', link: `/servers/${id}/console`},
        {slug: 'rebuild', name: 'بازسازی', link: `/servers/${id}/rebuild`},
        {slug: 'snapshot', name: 'اسنپ‌شات', link: `/servers/${id}/snapshots`},
    ];

    return (
        <Page>
            <Page.Content>
                <Information data={data?.data} />

                <Placeholder.Card bodyProps={{className: 'sm:p-3'}} className="mt-4">
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