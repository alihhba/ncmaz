import React from "react";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import PersianNumber from "@/utils/persianNumber";
import useResourceAction from "@/hooks/useResourceAction";
import DescriptionList from "@/components/DescriptionList";

export const CustomerPersonInformation = ({resource, id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource || 'customers');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const customer = fetchCurrent({id});

    const {
        first_name: firstName = '',
        last_name: lastName = '',
        national_code: nationalCode = '',
        mobile = '',
        email = '',
        postal_code: postalCode = '',
        address = '',
        created_at_persian: createdAtPersian = '',
        updated_at_persian: updatedAtPersian = '',
    } = customer || {};

    return (
                <Placeholder.Card
                    title="مشخصات مشتری حقیقی"
                    icon="user-group"
                >
                    <DescriptionList>

                        <DescriptionList.Item title="نام">
                            {firstName}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="نام خانوادگی">
                            {lastName}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="کد ملی">
                            <PersianNumber>{nationalCode}</PersianNumber>
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
    );
};