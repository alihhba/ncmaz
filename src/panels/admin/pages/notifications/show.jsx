import React from "react";
import {useParsed} from "@refinedev/core";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import DescriptionList from "@/components/DescriptionList";
import PersianNumber from "@/utils/persianNumber";
import useResourceAction from "@/hooks/useResourceAction";
import findItemBy from "@/utils/findItemBy";
import types from "@/modules/notification/metadata/types";

export const NotificationShow = ({resource, id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource || 'notifications');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const notification = fetchCurrent({id});

    const {
        title = '',
        type : typeSlug = '',
        datacenter = '',
        description = '',
        created_at: createdAt,
        created_at_persian: createdAtPersian = '',
        receiver = {},
    } = notification || {};

    const {name: receiverName = ''} = receiver || {};

    const type = findItemBy({source: types, key: 'slug', value: typeSlug})

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="جزئیات اطلاعیه"
                    icon="bell"
                >
                    <DescriptionList>

                        <DescriptionList.Item title="عنوان">
                            {title}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="نوع">
                            {type.label}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="دیتاسنتر">
                            {datacenter || '-'}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="تاریخ">
                            {createdAt ? (
                                <time dateTime={createdAt}>
                                    <PersianNumber>{createdAtPersian}</PersianNumber></time>
                            ) : '-'}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="گیرنده">
                            {receiverName}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="متن" className="!text-justify">
                            {description}
                        </DescriptionList.Item>

                    </DescriptionList>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};