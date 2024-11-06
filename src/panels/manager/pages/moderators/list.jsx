import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import List from "@/modules/server/common/list";
import StaffListItem from "./components/ListItem";
import ResourceButton from "@/components/ResourceButton";
import {Pagination} from "@/components/List/Pagination";
import useResourceAction from "@/hooks/useResourceAction";
import StaffFilter from "./components/Filter";
import {SupportBase} from "@/panels/admin/pages/support/Base";

export const StaffList = ({resource = "staffs"}) => {

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
                <SupportBase />
                <Placeholder.Card
                    title="پشتیبان‌ها"
                    icon="headphones"
                    meta={(
                        <div className="lg:ms-6 flex items-center space-s-3">
                            <ResourceButton.Filter >
                                <StaffFilter filters={filters} setFilters={setFilters} />
                            </ResourceButton.Filter>
                            <ResourceButton.Create withLabel={false}/>
                        </div>
                    )}
                >
                    <List.Container>
                        <List.Header.Container>
                            <List.Header.Data.Text className="ps-8">نام و نام خانوادگی</List.Header.Data.Text>
                            <List.Header.Data.Text>کد ملی</List.Header.Data.Text>
                            <List.Header.Data.Text>شماره تماس</List.Header.Data.Text>
                            <List.Header.Data.Text>بخش</List.Header.Data.Text>
                            <List.Header.Data.Text>وضعیت</List.Header.Data.Text>
                            <List.Header.Data.Empty/>
                        </List.Header.Container>
                        <List.Body.Container>
                            {items.map(({id, ...restItemProps}) => (
                                <StaffListItem resource={resource} key={id} id={id} data={{id, ...restItemProps}} />
                            ))}
                        </List.Body.Container>
                    </List.Container>
                    <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage}/>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};