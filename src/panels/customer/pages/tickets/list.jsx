import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import List from "@/components/List";
import ResourceButton from "@/components/ResourceButton";
import Pagination from "@/components/Pagination";
import useResourceAction from "@/hooks/useResourceAction";
import TicketFilter from "./components/Filter";
import TicketListItem from "./components/ListItem";

export const TicketList = ({resource = "tickets", filters: providedFilters = [], withoutActions = false}) => {

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
                    title="پشتیبانی"
                    icon="headphones"
                    meta={!withoutActions ? (
                        (
                            <div className="lg:ms-6 flex items-center space-s-3">
                                <ResourceButton.Filter>
                                    <TicketFilter filters={filters} setFilters={setFilters}/>
                                </ResourceButton.Filter>
                                <ResourceButton.Create withLabel={false} resource={resource}/>
                            </div>
                        )
                    ) : null}
                >
                    <List.Container>
                        <List.Header.Container>
                            <List.Header.Data.Text className="ps-8">عنوان</List.Header.Data.Text>
                            <List.Header.Data.Text>بخش</List.Header.Data.Text>
                            <List.Header.Data.Text>اولویت</List.Header.Data.Text>
                            <List.Header.Data.Text>تاریخ ایجاد</List.Header.Data.Text>
                            <List.Header.Data.Text>تاریخ آخرین به‌روزرسانی</List.Header.Data.Text>
                            <List.Header.Data.Text>وضعیت</List.Header.Data.Text>
                            <List.Header.Data.Empty/>
                        </List.Header.Container>
                        <List.Body.Container>
                            {items.map(({id, ...restItemProps}) => (
                                <TicketListItem resource={resource} key={`${resource}-item-${id}`} id={id} withoutActions={withoutActions} data={{id, ...restItemProps}} />
                            ))}
                        </List.Body.Container>
                    </List.Container>
                    <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage}/>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};
