import React, {useState} from "react";
import Page from "@/components/Page";
import Information from "@/modules/project/components/details/sections/information";
import {ServerList} from "@/panels/customer/pages/servers";
import {useParsed} from "@refinedev/core";
import useResourceAction from "@/hooks/useResourceAction";

export const ProjectShow = ({resource, id: providedId}) => {

    const {params} = useParsed();
    const {id: parsedId} = params || {};

    const id = providedId || parsedId;

    const {fetchCurrent} = useResourceAction(resource || 'projects');

    const data = fetchCurrent({id});

    const serverFilters = [
        {field: 'project_id', operator: 'eq', value: id}
    ];

    return (
        <Page>
            <Page.Content>
                <Information className="mb-4" data={data}/>

                <ServerList resource="servers" filters={serverFilters} createProps={{filters: serverFilters}}/>
            </Page.Content>
        </Page>
    );
};