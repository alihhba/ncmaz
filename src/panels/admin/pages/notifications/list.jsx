import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import List from "@/components/List";
import Pagination from "@/components/Pagination";
import ResourceButton from "@/components/ResourceButton";
import useResourceAction from "@/hooks/useResourceAction";
import NotificationFilter from "./components/Filter";
import NotificationListItem from "./components/ListItem";

export const NotificationList = ({resource = "notifications"}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const {fetchList} = useResourceAction(resource);
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
                <Placeholder.Card
                    title="اطلاعیه‌ها"
                    icon="bell"
                    meta={(
                        <div className="lg:ms-6 flex items-center space-s-3">
                            <ResourceButton.Filter>
                                <NotificationFilter filters={filters} setFilters={setFilters} />
                            </ResourceButton.Filter>
                        </div>
                    )}

                >
                    <List.Container>
                            <List.Header.Container>
                                <List.Header.Data.Text className="ps-8">عنوان</List.Header.Data.Text>
                                <List.Header.Data.Text>نوع</List.Header.Data.Text>
                                <List.Header.Data.Text>تاریخ</List.Header.Data.Text>
                                <List.Header.Data.Text>گیرنده</List.Header.Data.Text>
                                <List.Header.Data.Empty />
                            </List.Header.Container>
                            <List.Body.Container>
                            {items.map(({id, ...restItemProps}) => (
                                <NotificationListItem resource={resource} key={`${resource}-item-${id}`} id={id} data={{id, ...restItemProps}} />
                            ))}
                            </List.Body.Container>
                    </List.Container>
                    <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage}/>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};
