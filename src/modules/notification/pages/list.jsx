import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import Tabs from "@/modules/payment/commons/tabs";
import List from "@/modules/server/common/list";
import {NotificationListItem} from "../components/listItem";

export const NotificationList = () => {

    const items = [
        {id: 1, type: 'payment', title: 'موجودی کیف پول شما رو به اتمام است.', time: '2023-04-20 20:10', timePersian: '1402/01/30 - 20:10'},
        {id: 2, type: 'server', title: 'از دسترس خارج شدن سرورهای دیتاسنتر آسیاتک', time: '2023-03-20 13:24', timePersian: '1401/12/29 - 13:24'},
    ];

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card title="اطلاعیه‌ها" icon="bell">
                    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                        <table className="min-w-full bg-white">
                            <thead>
                            <List.Header.Container>
                                <List.Header.Data.Text className="ps-8">عنوان</List.Header.Data.Text>
                                <List.Header.Data.Text>نوع</List.Header.Data.Text>
                                <List.Header.Data.Text>زمان</List.Header.Data.Text>
                                <List.Header.Data.Empty />
                            </List.Header.Container>
                            </thead>
                            <tbody className="divide-y">
                            {items.map(({id, ...restItemProps}) => (
                                <NotificationListItem key={id} id={id} {...restItemProps} />
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};
