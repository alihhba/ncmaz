import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import PersianNumber from "@/utils/persianNumber";
import DescriptionList from "@/components/DescriptionList";

export const CustomerPersonProfileShow = ({data, onEdit}) => {

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
    } = data || {};

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="اطلاعات کاربری"
                    icon="user"
                    meta={(
                        <button
                            className="border border-slate-300 hover:border-slate-400 text-sm text-slate-600 hover:text-slate-700 rounded-lg px-3 py-2"
                            onClick={onEdit}
                        >
                            ویرایش
                        </button>
                    )}
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
            </Page.Content>
        </Page>
    );
};