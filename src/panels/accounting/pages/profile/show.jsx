import React from "react";
import classNames from "@/utils/classNames";
import Page from "@/components/Page";
import StatusListBox from "@/pages/posts/components/actions/status";
import Icon from "@/components/Icon";
import Form from "@/components/Form";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import useResourceAction from "@/hooks/useResourceAction";
import {CustomerCompanyProfileShow} from "@/panels/customer/pages/profile/company/show";
import {useNavigate} from "react-router-dom";
import {CustomerPersonProfileShow} from "@/panels/customer/pages/profile/person/show";
import DescriptionList from "@/components/DescriptionList";
import PersianNumber from "@/utils/persianNumber";
import findItemBy from "@/utils/findItemBy";
import departments from "@/modules/ticket/metadata/departments";
import statuses from "@/modules/account/user/metadata/statuses";

export const ProfileShow = ({children, className, ...restProps}) => {

    const {createUrl, fetchList} = useResourceAction("profile");
    const navigate = useNavigate();
    const fetchedData = fetchList();
    const {data = {}} = fetchedData?.data?.data || {};

    const onEdit = () => {
        navigate(createUrl);
    }
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
    } = data || {};

    const department = findItemBy({source: departments, key: 'slug', value: departmentSlug});
    const status = findItemBy({source: statuses, key: 'slug', value: statusSlug});

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