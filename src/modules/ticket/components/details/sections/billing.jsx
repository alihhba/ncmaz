import React from "react";
import classNames from "@/utils/classNames";
import DataList from "@/modules/ticket/common/data-list";

const TicketBilling = ({children, className, ...restProps}) => {
    return (
        <DataList
            className={className}
            {...restProps}
            items = {[
                {slug: 'name', label : 'نام', value: 'شبکه سازان معاصر', icon: 'cpu'},
                {slug: 'type', label : 'نوع', value: 'حقوقی', icon: 'ram'},
                {slug: 'national_code', label : 'شناسه ملی', value: '1400346598', icon: 'network'},
            ]}
        />
    );
};

export default TicketBilling;