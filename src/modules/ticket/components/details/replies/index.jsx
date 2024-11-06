import React from "react";
import classNames from "@/utils/classNames";
import TicketReplyCustomer from "@/modules/ticket/components/details/replies/customer";
import TicketReplySupport from "@/modules/ticket/components/details/replies/support";

const TicketReplies = ({items = [], className, ...restProps}) => {

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

export default TicketReplies;