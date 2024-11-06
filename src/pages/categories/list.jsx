import React from "react";
import { useList } from "@refinedev/core";
import Page from "@/components/Page";
import CategoryListItem from "@/pages/categories/components/listItem";
import {ListContainerStacked} from "@/components/List";
import {Pagination} from "@/components/List/Pagination";
import ResourceButton from "@/components/ResourceButton";
import {ModalConfirmDelete} from "@/components/Modal/Confirm/Delete";

export const CategoryList = () => {

    const {data} = useList({resource: 'categories'});
    console.log(data);

    const items = data?.data?.data || [];

    const actions = [
        <ResourceButton.Filter />,
        <ResourceButton.Create />
    ];

    return (
        <Page>
            <Page.Heading
                meta={actions}
            >
                دسته بندی
            </Page.Heading>

            <Page.Content>
                <ListContainerStacked>
                    {items.map(item => (
                        <CategoryListItem {...item} />
                    ))}
                </ListContainerStacked>
                <Pagination current={1} total={2}/>
            </Page.Content>

        </Page>
    );
};