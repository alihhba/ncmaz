import React, {useEffect, useState} from "react";
import {flushSync} from "react-dom";
import {useParsed} from "@refinedev/core";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import PersianNumber from "@/utils/persianNumber";
import useResourceAction from "@/hooks/useResourceAction";
import TicketReply from "@/modules/ticket/components/Reply";
import Sections from './components/Sections';
import ChangeStatus from "./components/ChangeStatus";

export const TicketShow = ({resource, id: providedId}) => {

    const [showSendReply, setShowSendReply] = useState(false);

    const {fetchCurrent} = useResourceAction(resource || 'tickets');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const ticket = fetchCurrent({id});

    const {
        title = '',
        description = '',
        replies = [],
        status = "",
    } = ticket || {};

    const scrollToReply = () => {
        flushSync(()=>{
            setShowSendReply(true);
        })
        window.scrollTo(0, document.body.scrollHeight);
    }

    useEffect(() => {
        setShowSendReply(status !== "closed");
    }, [status]);

    return (
        <Page>
            <Page.Content>
                <div className="grid grid-cols-1 gap-0 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="sm:col-span-1">
                        <Sections data={ticket} />
                    </div>
                    <div className="sm:col-span-1 md:col-span-2 lg:col-span-3 space-y-4">
                        <Placeholder.Card
                            title={<PersianNumber>{title}</PersianNumber>}
                            icon="headphones"
                            className="col-span-3"
                            meta={(
                                <ChangeStatus ticketId={id} />
                            )}
                        >
                            <TicketReply.List ticketId={id} />
                        </Placeholder.Card>
                        {showSendReply ? (
                            <TicketReply.Send ticketId={id} />
                        ) : null}
                    </div>
                </div>
            </Page.Content>
        </Page>
    );
};