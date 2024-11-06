import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Tab from "@/components/Tab";
import {useParsed} from "@refinedev/core";
import {CustomerPersonInformation} from "@/panels/admin/pages/customers/person/components/Information";
import {NotificationList} from "@/panels/customer/pages/notifications";
import {CustomerCompanyInformation} from "@/panels/admin/pages/customers/company/components/Information";

export const CustomerSections = ({type, id}) => {

    const baseUrl = `/customers/${type}/${id}`;

    const {pathname, ...restProps} = useParsed();

    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === baseUrl) {
            navigate(`${baseUrl}/information`, { replace: true });
        }
    }, []);

    const filters = [
        {field: 'customer_id', operator: 'eq', value: id}
    ];

    const sections = [
        {slug: 'information', name: 'اطلاعات', link: `${baseUrl}/information`, current: pathname === `${baseUrl}/information`, component: type==='person' ? CustomerPersonInformation : CustomerCompanyInformation },
        {slug: 'notifications', name: 'اطلاعیه‌ها', link: `${baseUrl}/notifications`, current: pathname === `${baseUrl}/notifications`, component: NotificationList, componentProps: {filters: [
                    {field: 'receiver_id', operator: 'eq', value: id},
                    {field: 'receiver_type', operator: 'eq', value: 'customer'},
                ], withoutActions: true}},
    ];
    return (
        <div>
            <Tab
                tabs={sections}
            />
        </div>
    );
};