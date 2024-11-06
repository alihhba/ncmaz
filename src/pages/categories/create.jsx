import React from "react";
import { useList, useOne, useResource } from "@refinedev/core";
import Page from "@/components/Page";
import CategoryListItem from "@/pages/categories/components/listItem";
import {ListContainerStacked} from "@/components/List";
import {Pagination} from "@/components/List/Pagination";
import ResourceButton from "@/components/ResourceButton";
import {ModalConfirmDelete} from "@/components/Modal/Confirm/Delete";
import Placeholder from "@/components/Placeholder";

export const CategoryCreate = () => {

    const {id} = useResource();
    const {data} = useOne({resource: 'categories', id});

    const realData = data?.data?.data || {};
    console.log(realData);

    const {title, status} = realData || {};

    // actions

    return (
        <Page>
            <Page.Heading>
                دسته بندی
            </Page.Heading>

            <Page.Content>
                <Placeholder>{id} - {title} - {status}</Placeholder>
            </Page.Content>

        </Page>
    );
};