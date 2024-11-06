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
import findItemBy from "@/utils/findItemBy";
import departments from "@/modules/ticket/metadata/departments";
import statuses from "@/modules/account/user/metadata/statuses";

export const StaffShow = ({resource, id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource || 'staffs');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const staff = fetchCurrent({id});

    const {
        first_name: firstName = '',
        last_name: lastName = '',
        national_code: nationalCode = '',
        mobile = '',
        email = '',
        postal_code: postalCode = '',
        address = '',
        department: departmentSlug = '',
        status: statusSlug = '',
        created_at_persian: createdAtPersian = '',
        updated_at_persian: updatedAtPersian = '',
    } = staff || {};

    const department = findItemBy({source: departments, key: 'slug', value: departmentSlug});
    const status = findItemBy({source: statuses, key: 'slug', value: statusSlug});

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="مشخصات پشتیبان"
                    icon="headphones"
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

                        <DescriptionList.Item title="بخش">
                            {department.label}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="وضعیت">
                            <div
                                className={classNames("inline-flex rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", status.background, status.color, status.border)}>
                                {status.label}
                            </div>
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