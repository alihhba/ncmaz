import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import PersianNumber from "@/utils/persianNumber";
// import {fetchCurrent} from "@/modules/service-config/sub-modules/manager/services";
import classNames from "@/utils/classNames";
// import statuses from "@/modules/service-config/sub-modules/manager/definitions/statuses";
import useResourceAction from "@/hooks/useResourceAction";
import DescriptionList from "@/components/DescriptionList";

export const ManagerShow = ({resource, id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource || 'managers');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const manager = fetchCurrent({id});

    const {
        first_name: firstName = '',
        last_name: lastName = '',
        mobile = '',
        email = '',
        created_at_persian: createdAtPersian = '',
        updated_at_persian: updatedAtPersian = '',
    } = manager || {};

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="مشخصات مدیر"
                    icon="award"
                >
                    <DescriptionList>

                        <DescriptionList.Item title="نام">
                            {firstName}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="نام خانوادگی">
                            {lastName}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="شماره تماس">
                            {mobile}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="ایمیل">
                            {email}
                        </DescriptionList.Item>

                        {/*<DescriptionList.Item title="تاریخ ایجاد" style={{direction: 'ltr'}}>*/}
                        {/*    <PersianNumber>{createdAtPersian}</PersianNumber>*/}
                        {/*</DescriptionList.Item>*/}

                        {/*<DescriptionList.Item title="آخرین به روز رسانی" style={{direction: 'ltr'}}>*/}
                        {/*    <PersianNumber>{updatedAtPersian}</PersianNumber>*/}
                        {/*</DescriptionList.Item>*/}

                    </DescriptionList>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};