import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import Icon from "@/components/Icon";
import Tabs from "@/modules/payment/commons/tabs";
import PersianNumber from "@/utils/persianNumber";
import ResourceButton from "@/components/ResourceButton";
import List from "@/modules/server/common/list";
import {InvoiceListItem} from "@/modules/payment/sub-modules/invoice/components/listItem";

export const InvoiceList = () => {

    const item = {
        id: '502361',
        subTotal: '501,012',
        tax: '45,092',
        total: '546,104',
        status: 'closed',
        customer: 'مشتری شماره یک',
        from: '2023-03-20',
        fromPersian: '1402/01/01',
        to: '2023-04-20',
        toPersian: '1402/02/01'
    }

    const items = [
        {
            id: '502361',
            subTotal: '501,012',
            tax: '45,092',
            total: '546,104',
            status: 'pending',
            customer: 'مشتری شماره یک',
            from: '2023-04-20',
            fromPersian: '1402/02/01',
            to: null,
            toPersian: null
        },
        {
            id: '502361',
            subTotal: '501,012',
            tax: '45,092',
            total: '546,104',
            status: 'closed',
            customer: 'مشتری شماره یک',
            from: '2023-03-20',
            fromPersian: '1402/01/01',
            to: '2023-04-19',
            toPersian: '1402/01/30'
        },
        {
            id: '502361',
            subTotal: '501,012',
            tax: '45,092',
            total: '546,104',
            status: 'closed',
            customer: 'مشتری شماره یک',
            from: '2023-03-20',
            fromPersian: '1402/01/01',
            to: '2023-04-19',
            toPersian: '1402/01/30'
        },
        {
            id: '502361',
            subTotal: '501,012',
            tax: '45,092',
            total: '546,104',
            status: 'closed',
            customer: 'مشتری شماره یک',
            from: '2023-03-20',
            fromPersian: '1402/01/01',
            to: '2023-04-19',
            toPersian: '1402/01/30'
        },
        {
            id: '502361',
            subTotal: '501,012',
            tax: '45,092',
            total: '546,104',
            status: 'closed',
            customer: 'مشتری شماره یک',
            from: '2023-03-20',
            fromPersian: '1402/01/01',
            to: '2023-04-19',
            toPersian: '1402/01/30'
        },
        {
            id: '502361',
            subTotal: '501,012',
            tax: '45,092',
            total: '546,104',
            status: 'closed',
            customer: 'مشتری شماره یک',
            from: '2023-03-20',
            fromPersian: '1402/01/01',
            to: '2023-04-19',
            toPersian: '1402/01/30'
        },
    ];

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="پرداخت"
                    icon="credit-card"
                    // bodyProps={{className: 'p-0'}}
                    meta={<Tabs current="invoices"/>}
                >
                    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                        <table className="min-w-full bg-white">
                            <thead>
                            <List.Header.Container>
                                <List.Header.Data.Text className="ps-8">شماره فاکتور</List.Header.Data.Text>
                                <List.Header.Data.Text>تاریخ شروع</List.Header.Data.Text>
                                <List.Header.Data.Text>تاریخ پایان</List.Header.Data.Text>
                                <List.Header.Data.Text>مبلغ (تومان)</List.Header.Data.Text>
                                <List.Header.Data.Text>وضعیت</List.Header.Data.Text>
                                <List.Header.Data.Empty/>
                            </List.Header.Container>
                            </thead>
                            <tbody className="divide-y">
                            {items.map(({id, ...restItemProps}) => (
                                <InvoiceListItem key={id} id={id} {...restItemProps} />
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};
