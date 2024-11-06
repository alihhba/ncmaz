import React from "react";
import Page from "@/components/Page";
import Tab from "@/components/Tab";
import {useParsed} from "@refinedev/core";
// import {fetchCurrent} from "@/modules/server/services";
import Information from "@/modules/server/components/details/sections/information";
import ServerUsage from "@/modules/server/components/details/sections/usage";
import ServerConsole from "@/modules/server/components/details/sections/console";
import ServerRebuild from "@/modules/server/components/details/sections/rebuild";
import ServerSnapshots from "@/modules/server/components/details/sections/snapshots";
import useResourceAction from "@/hooks/useResourceAction";

export const ServerShow = ({resource, id: providedId}) => {

    const {params} = useParsed();
    const {id: parsedId, section: activeTab = 'usage'} = params || {};
    // const navigate = useNavigate();

    const id = providedId || parsedId;
    const baseUrl = `/servers/${id}`;

    const {fetchCurrent} = useResourceAction(resource || 'servers');

    const data = fetchCurrent({id});

    const tabs = [
        {slug: 'usage', name: 'نمودار استفاده', link: `${baseUrl}/usage`, current: true, component: ServerUsage, componentProps: {data, serverId: id}},
        {slug: 'console', name: 'کنسول', link: `${baseUrl}/console`, component: ServerConsole, componentProps: {data}},
        {
            slug: 'snapshots', name: 'اسنپ‌شات', link: `${baseUrl}/snapshots`, component: ServerSnapshots,
            componentProps: {
                filters: [{field: 'server_id', operator: 'eq', value: id}],
                createProps:{filters: [{field: 'server_id', operator: 'eq', value: id}]},
                serverId: id,
            }
        },
        {slug: 'rebuild', name: 'بازسازی', link: `${baseUrl}/rebuild`, component: ServerRebuild, componentProps: {data}},
    ];

    // const {component: PanelComponent} = tabs.find(({slug}) => slug === activeTab);

    return (
        <Page>
            <Page.Content>
                <Information data={data} baseUrl={baseUrl}/>

                <Tab
                    tabs={tabs}
                    activeTab={activeTab}
                />

                {/*<Placeholder.Card bodyProps={{className: 'sm:p-3'}} className="my-4">*/}
                {/*    <Tabs*/}
                {/*        tabs={tabs.map(({slug, link, ...restTabProps}) => ({*/}
                {/*            slug,*/}
                {/*            ...restTabProps,*/}
                {/*            current: slug === activeTab,*/}
                {/*            onClick: () => {navigate(link)},*/}
                {/*        }))}*/}
                {/*    />*/}
                {/*</Placeholder.Card>*/}

                {/*<PanelComponent />*/}
            </Page.Content>
        </Page>
    );
};