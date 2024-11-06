import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import List from "@/components/List";
import Pagination from "@/components/Pagination";
import ResourceButton from "@/components/ResourceButton";
import useResourceAction from "@/hooks/useResourceAction";
import {PaymentBase} from "../payments/Base";
import TransactionFilter from "./components/Filter";
import TransactionListItem from "./components/ListItem";

export const TransactionList = ({resource = "transactions"}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const {fetchList} = useResourceAction();
    const [filters, setFilters] = useState([]);

    const {items, pagination} = fetchList({
        pagination: {page: currentPage},
        filters,
    });

    const { last_page: totalPages = 3} = pagination;

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [filters, currentPage]);

    return (
        <Page>
            <Page.Content>
                <PaymentBase />
                <Placeholder.Card
                    title="تراکنش‌ها"
                    icon="credit-card"
                    meta={(
                        <ResourceButton.Filter>
                            <TransactionFilter filters={filters} setFilters={setFilters} />
                        </ResourceButton.Filter>
                    )}
                    // meta={<Tabs current="transactions"/>}
                >
                    <List.Container>
                            <List.Header.Container>
                                <List.Header.Data.Text className="ps-8">شرح</List.Header.Data.Text>
                                <List.Header.Data.Text>مبلغ (تومان)</List.Header.Data.Text>
                                <List.Header.Data.Text>زمان</List.Header.Data.Text>
                                <List.Header.Data.Empty />
                            </List.Header.Container>
                            <List.Body.Container>
                            {items.map(({id, ...restItemProps}) => (
                                <TransactionListItem resource={resource} key={`${resource}-item-${id}`} id={id} data={{id, ...restItemProps}} />
                            ))}
                            </List.Body.Container>
                    </List.Container>
                    <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage}/>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};