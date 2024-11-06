import React from "react";
import classNames from "@/utils/classNames";
import TicketReplyCustomer from "./Customer";
import TicketReplySupport from "./Support";
import useResourceAction from "@/hooks/useResourceAction";

const TicketReplyList = ({ticketId, className, ...restProps}) => {

    const {fetchList} = useResourceAction("ticket_replies");

    const {items = []} = fetchList({
        filters: [
            {field: 'ticket_id', operator: 'eq', value: ticketId},
        ]
    });

    return (
        <div
            className={classNames("flex flex-col", className)}
            {...restProps}
        >
            {items.map(({id, sender_type: type, ...restItemsProps}) => (
                type === 'customer' ? (
                    <TicketReplyCustomer key={id} id={id} {...restItemsProps} />
                ) : (
                    <TicketReplySupport key={id} id={id} {...restItemsProps} />
                )
            ))}
        </div>
    );
};

export default TicketReplyList;