import React, {useEffect, useState} from "react";
import {ListContainerStacked} from "@/components/List";
import {PostListItem} from "@/pages/posts/components/listItem";
import {Pagination} from "@/components/List/Pagination";
import toast from 'react-hot-toast';
import Notification from "@/components/Notification";
import Page from "@/components/Page";
import { useList, useNavigation, useResource, useRouterContext } from "@refinedev/core";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import CreateButton from "@/pages/posts/components/actions/create";
import {FilterButton} from "@/pages/posts/components/actions";
import ActionListBox from "@/pages/posts/components/actions/listBox";
import ResourceButton from "@/components/ResourceButton";

export const PostList = () => {

    const {resource} = useResource();

    const {data} = useList({
        resource: "banners",

        queryOptions: {
            retry: 3,
        },

        pagination: {
            current: 2
        }
    })

    console.log(data);
    console.log(data?.data?.data || []);

    useEffect(() => {
        toast.custom(<Notification/>);
    }, []);

    const items = data?.data?.data || [];
    const pagination = data?.data?.meta || {};
    const {last_page: total, current_page: currentPage} = pagination || {};

    const onPageChange = page => {
        // change query
    }

    console.log(pagination);

    const actions = [
        <ResourceButton.Filter/>,
        <ResourceButton.Create/>,
    ];

    return (
        <Page>
            <Page.Heading
                meta={actions}
            >بنر</Page.Heading>
            <Page.Content>
                <ListContainerStacked>
                    {items.map(({id, ...item}) => (
                        <PostListItem id={id} key={id} {...item} />
                    ))}
                </ListContainerStacked>
                <Pagination current={currentPage} total={total} onPageChange={onPageChange}/>
            </Page.Content>
        </Page>
    );
};