import React from "react";
import {fetchList} from "@/modules/ticket/services";
import Placeholder from "@/components/Placeholder";
import TicketListGenerator from "@/panels/customer/pages/test/module/List";

export const TestPage = () => {

    const filters = {};
    const items = fetchList();

    return (
        <div>
            <div>{JSON.stringify(items)}</div>
            <Placeholder.Card>Filter, Action, Title</Placeholder.Card>
            <Placeholder.Card>List, Items</Placeholder.Card>
            <Placeholder.Card>Pagination</Placeholder.Card>
            {/*<TicketList>*/}

            {/*    <TicketList.Filter>*/}
            {/*        <TicketList.Filter.Title />*/}
            {/*        <TicketList.Filter.Department />*/}
            {/*    </TicketList.Filter>*/}

            {/*    <TicketList.Actions>*/}

            {/*    </TicketList.Actions>*/}

            <Placeholder.Card>
                <TicketListGenerator>
                    {/*        <TicketList.Items.Template.Title />*/}
                    {/*        <TicketList.Items.Template.Type />*/}
                    {/*        <TicketList.Items.Template.Customer />*/}
                    {/*        <TicketList.Items.Template.Department />*/}
                    {/*    </TicketList.Items.Template>*/}
                </TicketListGenerator>
            </Placeholder.Card>
        </div>
    );

};