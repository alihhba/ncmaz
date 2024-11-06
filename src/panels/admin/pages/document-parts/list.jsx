import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import List from "@/modules/server/common/list";
import DocumentPartListItem from "./components/ListItem";
import ResourceButton from "@/components/ResourceButton";
import {Pagination} from "@/components/List/Pagination";
import useResourceAction from "@/hooks/useResourceAction";
import DocumentFilter from "@/panels/admin/pages/managers/components/Filter";

export const DocumentPartList = ({resource = "documents"}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const {fetchList} = useResourceAction(resource);
    const [filters, setFilters] = useState([]);

    const {items, pagination} = fetchList({
        pagination: {page: currentPage},
        filters,
    });

    const {last_page: totalPages = 1} = pagination;

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [filters, currentPage]);

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="بخش‌های سند"
                    icon="layer-group"
                    meta={(
                        <div className="lg:ms-6 flex items-center space-s-3">
                            <ResourceButton.Filter>
                                <DocumentFilter filters={filters} setFilters={setFilters}/>
                            </ResourceButton.Filter>
                            <ResourceButton.Create withLabel={false} resource={resource}/>
                        </div>
                    )}
                >
                    <List.Container>
                        <List.Header.Container>
                            <List.Header.Data.Text className="ps-8">عنوان</List.Header.Data.Text>
                            <List.Header.Data.Text>تاریخ ایجاد</List.Header.Data.Text>
                            <List.Header.Data.Text>تاریخ به روزرسانی</List.Header.Data.Text>
                            <List.Header.Data.Text>وضعیت</List.Header.Data.Text>
                            <List.Header.Data.Empty/>
                        </List.Header.Container>
                        <List.Body.Container>
                            {items.map(({id, ...restItemProps}) => (
                                <DocumentPartListItem key={id} id={id} resource={resource} data={{id, ...restItemProps}}/>
                            ))}
                        </List.Body.Container>
                    </List.Container>
                    <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage}/>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};