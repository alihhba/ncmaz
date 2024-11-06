import React, {useEffect, useState} from "react";
// import {ListContainerStacked} from "@/components/List";
import {RegionListItem} from "../components/listItem";
import {Pagination} from "@/components/List/Pagination";
import toast from 'react-hot-toast';
import Notification from "@/components/Notification";
import Page from "@/components/Page";
import { useList, useResource } from "@refinedev/core";
import ResourceButton from "@/components/ResourceButton";
import Placeholder from "@/components/Placeholder";
import useSelectedItems from "@/hooks/useSelectedItems";
import classNames from "@/utils/classNames";
import useModal from "@/hooks/useModal";
import {ModalBase} from "@/components/Modal/Base";

export const RegionList = () => {

    const initialItems = [
        {id: 1, title: 'Hi1', date: '1402/02/01'},
        {id: 2, title: 'Hi2', date: '1402/02/02'},
        {id: 3, title: 'Hi3', date: '1402/02/03'},
    ];

    const {
        items = [],
        selectedItems,
        toggleAllItems,
        toggleSingleItem,
    } = useSelectedItems({
        itemIdentifierKey: "id",
        initialItems
    });

    const [open, onClose] = useState(false);

    return (
        <Page>
            <Page.Heading
                // meta={actions}
            >بنر</Page.Heading>
            <Page.Content>
                {/*<Placeholder.Section>Test</Placeholder.Section>*/}
                <div>{selectedItems.map(({title}) => title).join(', ')}</div>
                <Placeholder.List>
                    {items.map(({id, ...restItemsProps}) => (
                        <RegionListItem id={id} {...restItemsProps} onToggleSelect={() => {toggleSingleItem({id})}} />
                    ))}
                </Placeholder.List>

                <ModalBase
                    open={open}
                    onClose={onClose}
                >
                    <div>{selectedItems.map(({title}) => title).join(', ')}</div>
                    <Placeholder.List>
                        {items.map(({id, ...restItemsProps}) => (
                            <RegionListItem id={id} {...restItemsProps} onToggleSelect={() => {toggleSingleItem({id})}} />
                        ))}
                    </Placeholder.List>
                </ModalBase>
            </Page.Content>
        </Page>
    );
};