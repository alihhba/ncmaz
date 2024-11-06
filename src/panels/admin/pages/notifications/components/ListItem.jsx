import React from "react";
import List from "@/modules/server/common/list";
import {ModalBase} from "@/components/Modal/Base";
import ActionMenu from "@/components/ActionMenu";
import PersianNumber from "@/utils/persianNumber";
import findItemBy from "@/utils/findItemBy";
import types from '@/modules/notification/metadata/types';
import {NotificationShow} from "../show";

const NotificationListItem = ({resource, data = {}, className, ...restProps}) => {

    const {
        id,
        title,
        type: typeSlug,
        created_at: createdAt,
        created_at_persian: createdAtPersian,
        receiver = {},
    } = data || {};

    const {name: receiverName = ''} = receiver || {}

    const type = findItemBy({source: types, key: 'slug', value: typeSlug});

    return (
        <>
            <List.Item.Container {...restProps} >

                <List.Item.Data.Text className="ps-8">
                    {title}
                </List.Item.Data.Text>

                <List.Item.Data.Text>
                    {type.label || ''}
                </List.Item.Data.Text>

                <List.Item.Data.Text>
                    {createdAt ? (
                        <time dateTime={createdAt}>
                            <PersianNumber>{createdAtPersian}</PersianNumber></time>
                    ) : '-'}
                </List.Item.Data.Text>

                <List.Item.Data.Text>
                    {receiverName}
                </List.Item.Data.Text>

                <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">
                    <ActionMenu.Container id={id}>

                        <ActionMenu.Item.Show
                            extra={(
                                <ModalBase>
                                    <NotificationShow id={id}/>
                                </ModalBase>
                            )}
                        />

                    </ActionMenu.Container>
                </List.Item.Data.Container>

            </List.Item.Container>
        </>
    );
};

export default NotificationListItem;