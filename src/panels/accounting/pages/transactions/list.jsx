import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import List from "@/components/List";
import Pagination from "@/components/Pagination";
import ResourceButton from "@/components/ResourceButton";
import useResourceAction from "@/hooks/useResourceAction";
import TransactionFilter from "./components/Filter";
import TransactionListItem from "./components/ListItem";

export const TransactionList = ({resource = "transactions", filters: providedFilters = [], withoutActions = false, withoutCustomer = false}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const {fetchList} = useResourceAction(resource);
    const [filters, setFilters] = useState([]);

    const {items, pagination} = fetchList({
        pagination: {page: currentPage},
        filters: [
            ...filters,
            ...providedFilters
        ],
    });

    const { last_page: totalPages = 3} = pagination;

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [filters, currentPage]);

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="تراکنش‌ها"
                    icon="credit-card"
                    meta={!withoutActions ? (
                        (
                            <ResourceButton.Filter>
                                <TransactionFilter filters={filters} setFilters={setFilters} />
                            </ResourceButton.Filter>
                        )
                    ) : null}
                    // meta={<Tabs current="transactions"/>}
                >
                    <List.Container>
                            <List.Header.Container>
                                <List.Header.Data.Text className="ps-8">شماره تراکنش</List.Header.Data.Text>
                                <List.Header.Data.Text className="ps-8">شرح</List.Header.Data.Text>
                                <List.Header.Data.Text>مبلغ (تومان)</List.Header.Data.Text>
                                <List.Header.Data.Text>تاریخ</List.Header.Data.Text>
                                {!withoutCustomer ? (
                                    <List.Header.Data.Text>مشتری</List.Header.Data.Text>
                                ) : null}
                                <List.Header.Data.Empty />
                            </List.Header.Container>
                            <List.Body.Container>
                            {items.map(({id, ...restItemProps}) => (
                                <TransactionListItem resource={resource} key={`${resource}-item-${id}`} id={id} data={{id, ...restItemProps}} withoutCustomer={withoutCustomer} />
                            ))}
                            </List.Body.Container>
                    </List.Container>
                    <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage}/>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};
