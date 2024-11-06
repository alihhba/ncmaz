import React from 'react';
import Tab from "@/components/Tab";
import { useParsed} from "@refinedev/core";
import Tabs from "@/components/Tab/base";

export const PaymentBase = () => {

    const baseUrl = '/payments';

    const {pathname, ...restProps} = useParsed();

    const sections = [
        {slug: 'invoices', name: 'فاکتورها', link: `${baseUrl}/invoices`, current: pathname === `${baseUrl}/invoices`},
        {slug: 'transactions', name: 'تراکنش‌ها', link: `${baseUrl}/transactions`, current: pathname === `${baseUrl}/transactions`},
    ];
    return (
        <div>
            <Tab
                tabs={sections}
            />
        </div>
    );
};