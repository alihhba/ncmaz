import React, {useEffect} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import Form from "@/components/Form";
import useResourceForm from "@/hooks/useResourceForm";
import {TicketForm} from "@/panels/customer/pages/tickets/form";

export const TicketCreate = ({resource = "tickets", id: providedId}) => {

    const {id: parsedId} = useParsed();
    const id = providedId || parsedId;

    return (
        <Page>
            <Page.Content>
                <div className="grid sm:grid-cols-4 sm:gap-4">
                    <Placeholder.Card className="col-span-1" title="راهنمای ارسال تیکت" icon="headphones">
                        توضیحات و نکات ارسال تیکت و رفتار پشتیبانی
                    </Placeholder.Card>

                    <Placeholder.Card title="ارسال درخواست پشتیبانی" icon="pencil" className="col-span-3">
                        <TicketForm resource={resource} id={id}/>
                    </Placeholder.Card>
                </div>
            </Page.Content>
        </Page>
    );
};