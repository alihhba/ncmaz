import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import Tabs from "@/modules/payment/commons/tabs";
import List from "@/modules/server/common/list";
import {TransactionListItem} from "../components/listItem";

export const TransactionList = () => {

    const items = [
        {id: 1, amount: '546,104', status: 'decrease', description: 'کاهش اعتبار - پرداخت فاکتور', time: '2023-04-20 20:10', timePersian: '1402/01/30 - 20:10'},
        {id: 2, amount: '100,000', status: 'increase', description: 'افزایش اعتبار - پرداخت آنلاین', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
        {id: 3, amount: '100,000', status: 'increase', description: 'افزایش اعتبار - پرداخت آنلاین', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
        {id: 4, amount: '100,000', status: 'increase', description: 'افزایش اعتبار - پرداخت آنلاین', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
        {id: 5, amount: '20,000', status: 'decrease', description: 'کاهش اعتبار - پرداخت فاکتور', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
        {id: 6, amount: '100,000', status: 'increase', description: 'افزایش اعتبار - پرداخت آنلاین', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
    ];

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="پرداخت"
                    icon="credit-card"
                    // bodyProps={{className: 'p-0'}}
                    meta={<Tabs current="transactions"/>}
                >
                    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                        <table className="min-w-full bg-white">
                            <thead>
                            <List.Header.Container>
                                <List.Header.Data.Text className="ps-8">شرح</List.Header.Data.Text>
                                <List.Header.Data.Text>مبلغ (تومان)</List.Header.Data.Text>
                                <List.Header.Data.Text>زمان</List.Header.Data.Text>
                                <List.Header.Data.Empty />
                            </List.Header.Container>
                            </thead>
                            <tbody className="divide-y">
                            {items.map(({id, ...restItemProps}) => (
                                <TransactionListItem key={id} id={id} {...restItemProps} />
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};
