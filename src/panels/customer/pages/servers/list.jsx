import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import ResourceButton from "@/components/ResourceButton";
import ServerListItem from "./components/listItem";
import List from "@/modules/server/common/list";
import Pagination from "@/components/List/Pagination";
import useResourceAction from "@/hooks/useResourceAction";
import ServerFilter from "@/panels/customer/pages/servers/components/Filter";

export const ServerList = ({resource = "servers", filters: providedFilters = [], createProps = {}, withoutActions = false}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const {fetchList} = useResourceAction(resource);
    const [filters, setFilters] = useState([]);

    const {items, pagination} = fetchList({
        pagination: {page: currentPage},
        filters: [
            ...filters,
            ...providedFilters,
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
                    title="سرورها"
                    icon="server"
                    bodyProps={{className: 'p-0'}}
                    meta={!withoutActions ? (
                        <div className="lg:ms-6 flex items-center space-s-3">
                            <ResourceButton.Filter>
                                <ServerFilter filters={filters} setFilters={setFilters} />
                            </ResourceButton.Filter>
                            <ResourceButton.Create withLabel={false} resource={resource} {...createProps}/>
                        </div>
                    ) : null}
                >
                    <List.Container>
                        <List.Header.Container>
                            <List.Header.Data.Text className="ps-8">نام</List.Header.Data.Text>
                            <List.Header.Data.Text>حافظه (GB)</List.Header.Data.Text>
                            <List.Header.Data.Text>پردازنده (Core)</List.Header.Data.Text>
                            <List.Header.Data.Text>دیسک (GB)</List.Header.Data.Text>
                            <List.Header.Data.Text>IP</List.Header.Data.Text>
                            <List.Header.Data.Text>مدت زمان (ساعت)</List.Header.Data.Text>
                            <List.Header.Data.Text>وضعیت</List.Header.Data.Text>
                            <List.Header.Data.Empty/>
                        </List.Header.Container>
                        <List.Body.Container>
                            {items.map(({id, ...restItemProps}) => (
                                <ServerListItem resource={resource} key={id} id={id} withoutActions={withoutActions} {...restItemProps} />
                            ))}
                        </List.Body.Container>
                    </List.Container>
                    <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage}/>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};
