import React from "react";
import classNames from "@/utils/classNames";
import DataList from "@/modules/ticket/common/data-list";
import PersianNumber from "@/utils/persianNumber";

const TicketInformation = ({children, className, ...restProps}) => {
    return (
        <DataList
            className={className}
            {...restProps}
            items = {[
                {slug: 'department', label : 'بخش', value: 'فنی', icon: 'square-2x2'},
                {slug: 'priority', label : 'اولویت', value: 'متوسط', icon: 'queue-list'},
                {slug: 'created_on', label : 'تاریخ ایجاد', value: <PersianNumber>1402/01/18 13:46</PersianNumber>, icon: 'calendar'},
                {slug: 'updated_on', label : 'آخرین به روزرسانی', value: <PersianNumber>1402/02/03 20:14</PersianNumber>, icon: 'calendar-due'},
                {slug: 'status', label : 'وضعیت', value: 'بسته شده', icon: 'clipboard'},

            ]}
        />
    );
};

export default TicketInformation;