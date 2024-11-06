import React from "react";
import classNames from "@/utils/classNames";
import DataList from "@/modules/ticket/common/data-list";

const TicketService = ({children, className, ...restProps}) => {
    return (
        <DataList
            className={className}
            {...restProps}
            items = {[
                {slug: 'cpu', label : 'پردازنده', value: '2core', icon: 'cpu'},
                {slug: 'ram', label : 'رم', value: '8GB', icon: 'ram'},
                {slug: 'network', label : 'شبکه', value: '1Gbps', icon: 'network'},
                {slug: 'disk', label : 'دیسک', value: '64GB SSD', icon: 'hard-drive'},
            ]}
        />
    );
};

export default TicketService;