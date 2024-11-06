import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import List from "@/modules/server/common/list";
import CustomerPersonListItem from "./components/ListItem";
import ResourceButton from "@/components/ResourceButton";
import {Pagination} from "@/components/List/Pagination";
import useResourceAction from "@/hooks/useResourceAction";
import CustomerPersonFilter from "@/panels/admin/pages/customers/person/components/Filter";
import {CustomerBase} from "@/panels/admin/pages/customers/Base";

export const CustomerPersonList = ({resource = "customers_person"}) => {

    const [currentPage, setCurrentPage] = useState(1);

    // const items = fetchList();
    const {fetchList} = useResourceAction(resource);
    const [filters, setFilters] = useState([]);

    const {items, pagination} = fetchList({
        pagination: {page: currentPage},
        filters: [
            ...filters,
            {field: 'type', operator: 'eq', value: 'person'},
        ],
    });

    const {last_page: totalPages = 3} = pagination;

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [filters, currentPage]);

    return (
        <Page>
            <Page.Content>
                <CustomerBase />
                <Placeholder.Card
                    title="مشتریان حقیقی"
                    icon="user-group"
                    meta={(
                        <div className="lg:ms-6 flex items-center space-s-3">
                            <ResourceButton.Filter>
                                <CustomerPersonFilter filters={filters} setFilters={setFilters} />
                            </ResourceButton.Filter>
                            <ResourceButton.Create withLabel={false} resource={resource}/>
                        </div>
                    )}
                >
                    <List.Container>
                        <List.Header.Container>
                            <List.Header.Data.Text className="ps-8">نام و نام خانوادگی</List.Header.Data.Text>
                            <List.Header.Data.Text>کد ملی</List.Header.Data.Text>
                            <List.Header.Data.Text>شماره تماس</List.Header.Data.Text>
                            <List.Header.Data.Empty/>
                        </List.Header.Container>
                        <List.Body.Container>
                            {items.map(({id, ...restItemProps}) => (
                                <CustomerPersonListItem resource={resource} key={id} id={id} data={{id, ...restItemProps}} />
                            ))}
                        </List.Body.Container>
                    </List.Container>
                    <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage}/>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};