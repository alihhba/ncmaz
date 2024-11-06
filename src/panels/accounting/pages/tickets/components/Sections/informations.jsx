import React from "react";
import classNames from "@/utils/classNames";
import DataList from "@/modules/ticket/common/data-list";
import PersianNumber from "@/utils/persianNumber";
import findItemBy from "@/utils/findItemBy";
import departments from "@/modules/ticket/metadata/departments";
import priorities from "@/modules/ticket/metadata/priorities";
import statuses from '@/modules/ticket/components/statuses';

const TicketInformation = ({data = {}, children, className, ...restProps}) => {

    const {
        department: departmentSlug = '',
        priority: prioritySlug = '',
        created_at: createdAt,
        created_at_persian: createdAtPersian = '',
        updated_at: updatedAt,
        updated_at_persian: updatedAtPersian = '',
        status: statusSlug = '',
        customer = {},
        staff = {},
    } = data || {};

    const {name: customerName} = customer || {};
    const {name: staffName} = staff || {};

    const department = findItemBy({source: departments, key: 'slug', value: departmentSlug});
    const priority = findItemBy({source: priorities, key: 'slug', value: prioritySlug});
    const status = findItemBy({source: statuses, key: 'slug', value: statusSlug});

    const statusRender = (
        <div
            className={classNames("inline-flex rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", status.background, status.color, status.border)}>
            {status.label}
        </div>
    );

    const items = [
        {slug: 'customer', label: 'کاربر', value: customerName, icon: 'user'},
        {slug: 'priority', label: 'اولویت', value: priority.label, icon: 'queue-list'},
        {slug: 'status', label: 'وضعیت', value: statusRender, icon: 'clipboard'},
        {
            slug: 'created_at',
            label: 'تاریخ ایجاد',
            value: <PersianNumber>{createdAtPersian}</PersianNumber>,
            icon: 'calendar'
        },
        {
            slug: 'updated_at',
            label: 'آخرین به روزرسانی',
            value: <PersianNumber>{updatedAtPersian}</PersianNumber>,
            icon: 'calendar-due'
        },
    ];

    return (
        <DataList
            className={className}
            {...restProps}
            items={items}
        />
    );
};

export default TicketInformation;