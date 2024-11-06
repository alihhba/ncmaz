import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import List from "@/modules/server/common/list";
import SnapshotListItem from "./components/ListItem";
import ResourceButton from "@/components/ResourceButton";
// import {fetchList} from "@/modules/service-config/sub-modules/flavor/services";
import {Pagination} from "@/components/List/Pagination";
import useResourceAction from "@/hooks/useResourceAction";
import SnapshotFilter from "./components/Filter";
import {useModal} from "@refinedev/core";
import {ModalBase} from "@/components/Modal/Base";
import {SnapshotForm} from "@/panels/customer/pages/snapshots/form";

export const SnapshotList = ({resource = "snapshots", serverId, filters: providedFilters = []}) => {

    const {visible, show, close} = useModal(false);
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

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //
    // }, [filters, currentPage]);

    const [preparedFilters, setPreparedFilters] = useState({});

    useEffect(() => {
        const f = {};
        filters.forEach(({field, value})=>{
            f[field] = value;
        })
        setPreparedFilters(f);
    }, filters);

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="اسنپ‌شات"
                    icon="camera"
                    meta={(
                        <div className="lg:ms-6 flex items-center space-s-3">
                            <ResourceButton.Filter>
                                <SnapshotFilter filters={filters} setFilters={setFilters} />
                            </ResourceButton.Filter>
                            <ResourceButton.Create resource={resource} withLabel={false} onClick={show}/>
                        </div>
                    )}
                >
                    <ModalBase
                        open={visible}
                        onClose={close}
                    >
                        <SnapshotForm onClose={close} serverId={serverId} />
                    </ModalBase>
                    <List.Container>
                        <List.Header.Container>
                            <List.Header.Data.Text className="ps-8">عنوان</List.Header.Data.Text>
                            <List.Header.Data.Text>توضیحات</List.Header.Data.Text>
                            <List.Header.Data.Empty/>
                        </List.Header.Container>
                        <List.Body.Container>
                            {items.map(({id, ...restItemProps}) => (
                                <SnapshotListItem resource={resource} key={`${resource}-item-${id}`} id={id} data={{id, ...restItemProps}} />
                            ))}
                        </List.Body.Container>
                    </List.Container>
                    <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage}/>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};