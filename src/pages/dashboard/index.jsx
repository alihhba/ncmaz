import React from "react";
import Placeholder from "@/components/Placeholder";
import Page from "@/components/Page";


export const Dashboard = () => {
    return (
        <Page>
            <Page.Content>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Placeholder.Card>Dashboard</Placeholder.Card>
                    <Placeholder.Card>Dashboard</Placeholder.Card>
                    <Placeholder.Card>Dashboard</Placeholder.Card>
                    <Placeholder.Card>Dashboard</Placeholder.Card>
                </div>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <Placeholder.Card
                        className="col-span-1 lg:col-span-2"
                        title="تیکت ها"
                        icon="bars-3"
                    >Dashboard</Placeholder.Card>
                    <Placeholder.Card>Dashboard</Placeholder.Card>
                </div>
            </Page.Content>
        </Page>
    );
};

export default Dashboard;