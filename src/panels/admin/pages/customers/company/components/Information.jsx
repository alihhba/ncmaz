import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import useResourceAction from "@/hooks/useResourceAction";
import DescriptionList from "@/components/DescriptionList";

export const CustomerCompanyInformation = ({resource, id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource || 'customers');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const customer = fetchCurrent({id});

    const {
        company_name: companyName = '',
        registration_number: registrationNumber = '',
        national_code: nationalCode = '',
        economic_code: economicCode = '',
        mobile = '',
        email = '',
        postal_code: postalCode = '',
        address = '',
        created_at_persian: createdAtPersian = '',
        updated_at_persian: updatedAtPersian = '',
    } = customer || {};

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="مشخصات مشتری حقوقی"
                    icon="user-group"
                >
                    <DescriptionList>

                        <DescriptionList.Item title="نام">
                            {companyName}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="شماره ثبت">
                            <PersianNumber>{registrationNumber}</PersianNumber>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="شناسه ملی">
                            <PersianNumber>{nationalCode}</PersianNumber>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="کد اقتصادی">
                            <PersianNumber>{economicCode}</PersianNumber>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="شماره تماس">
                            <PersianNumber>{mobile}</PersianNumber>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="ایمیل">
                            {email}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="کد پستی">
                            <PersianNumber>{postalCode}</PersianNumber>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="آدرس">
                            <PersianNumber>{address}</PersianNumber>
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