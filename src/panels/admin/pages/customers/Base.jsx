import React from 'react';
import Tab from "@/components/Tab";
import { useParsed} from "@refinedev/core";
import Tabs from "@/components/Tab/base";

export const CustomerBase = () => {

    const baseUrl = '/customers';

    const {pathname, ...restProps} = useParsed();

    const sections = [
        {slug: 'company', name: 'مشتریان حقوقی', link: `${baseUrl}/company`, current: pathname === `${baseUrl}/company`},
        {slug: 'person', name: 'مشتریان حقیقی', link: `${baseUrl}/person`, current: pathname === `${baseUrl}/person`},
    ];
    return (
        <div>
            <Tab
                tabs={sections}
            />
        </div>
    );
};