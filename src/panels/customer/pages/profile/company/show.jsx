import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import PersianNumber from "@/utils/persianNumber";
import DescriptionList from "@/components/DescriptionList";

export const CustomerCompanyProfileShow = ({data, onEdit}) => {

    const {
        company_name: companyName = '',
        registration_number: registrationNumber = '',
        national_code: nationalCode = '',
        economic_code: economicCode = '',
        mobile = '',
        email = '',
        postal_code: postalCode = '',
        address = '',
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

                    </DescriptionList>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};