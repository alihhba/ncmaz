import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import List from "@/components/List";
import InvoiceListItem from "./components/ListItem";
import Pagination from "@/components/Pagination";
import useResourceAction from "@/hooks/useResourceAction";
import ResourceButton from "@/components/ResourceButton";
import InvoiceFilter from "./components/Filter";

export const InvoiceList = ({resource = "invoices", filters: providedFilters = [], withoutActions = false, withoutCustomer = false}) => {

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

    const {last_page: totalPages = 3} = pagination;

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [filters, currentPage]);

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="فاکتورها"
                    icon="credit-card"
                    meta={!withoutActions ? (
                        (
                            <ResourceButton.Filter>
                                <InvoiceFilter filters={filters} setFilters={setFilters}/>
                            </ResourceButton.Filter>
                        )
                    ) : null}
                    // meta={<Tabs current="invoices"/>}
                >
                    <List.Container>
                        <List.Header.Container>
                            <List.Header.Data.Text className="ps-8">شماره فاکتور</List.Header.Data.Text>
                            <List.Header.Data.Text>نوع</List.Header.Data.Text>
                            <List.Header.Data.Text>مبلغ (تومان)</List.Header.Data.Text>
                            <List.Header.Data.Text>تاریخ شروع</List.Header.Data.Text>
                            <List.Header.Data.Text>تاریخ پایان</List.Header.Data.Text>
                            {!withoutCustomer ? (
                                <List.Header.Data.Text>مشتری</List.Header.Data.Text>
                            ) : null}
                            <List.Header.Data.Text>وضعیت</List.Header.Data.Text>
                            <List.Header.Data.Empty/>
                        </List.Header.Container>
                        <List.Body.Container>
                            {items.map(({id, ...restItemProps}) => (
                                <InvoiceListItem resource={resource} key={`${resource}-item-${id}`} withoutCustomer={withoutCustomer} id={id} data={{id, ...restItemProps}} />
                            ))}
                        </List.Body.Container>
                    </List.Container>
                    <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage}/>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};
