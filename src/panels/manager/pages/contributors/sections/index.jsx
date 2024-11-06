import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Tab from "@/components/Tab";
import { useParsed} from "@refinedev/core";
import {CustomerPersonInformation} from "@/panels/admin/pages/customers/person/components/Information";
// import {CustomerCompanyInformation} from "@/panels/admin/pages/customers/company/components/Information";
import {NotificationList} from "@/panels/customer/pages/notifications";
import {InvoiceList} from "@/panels/accounting/pages/invoices";
import {TransactionList} from "@/panels/accounting/pages/transactions";
import {ProjectList} from "@/panels/customer/pages/projects";
import {ServerList} from "@/panels/customer/pages/servers";
import {TicketList} from "@/panels/customer/pages/tickets";
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
        {slug: 'projects', name: 'پروژه‌ها', link: `${baseUrl}/projects`, current: pathname === `${baseUrl}/projects`, component: ProjectList, componentProps: {filters, withoutActions: true}},
        {slug: 'servers', name: 'سرور‌ها', link: `${baseUrl}/servers`, current: pathname === `${baseUrl}/servers`, component: ServerList, componentProps: {filters, withoutActions: true}},
        {slug: 'tickets', name: 'تیکت‌ها', link: `${baseUrl}/tickets`, current: pathname === `${baseUrl}/tickets`, component: TicketList, componentProps: {filters, withoutActions: true}},
        {slug: 'invoices', name: 'فاکتور‌ها', link: `${baseUrl}/invoices`, current: pathname === `${baseUrl}/invoices`, component: InvoiceList, componentProps: {filters, withoutActions: true, withoutCustomer: true}},
        {slug: 'transactions', name: 'تراکنش‌ها', link: `${baseUrl}/transactions`, current: pathname === `${baseUrl}/transactions`, component: TransactionList, componentProps: {filters, withoutActions: true, withoutCustomer: true}},
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