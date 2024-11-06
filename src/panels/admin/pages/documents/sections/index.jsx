import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Tab from "@/components/Tab";
import {useParsed} from "@refinedev/core";
import {CustomerPersonInformation} from "@/panels/admin/pages/customers/person/components/Information";
import {NotificationList} from "@/panels/customer/pages/notifications";
import {CustomerCompanyInformation} from "@/panels/admin/pages/customers/company/components/Information";
import {DocumentShow} from "@/panels/admin/pages/documents/index.jsx";
import {DocumentPartList} from "@/panels/admin/pages/document-parts/index.jsx";
import DocumentInformation from "@/panels/admin/pages/documents/components/Information.jsx";
import Placeholder from "@/components/Placeholder/index.jsx";
import Tabs from "@/components/Tab/base.jsx";
import classNames from "@/utils/classNames.jsx";
import Icon from "@/components/Icon/index.jsx";
import Link from "@/components/Link/index.jsx";
import useResourceAction from "@/hooks/useResourceAction.jsx";
import PersianNumber from "@/utils/persianNumber.jsx";

export const DocumentSections = ({resource = "documents", id}) => {

    const baseUrl = `/documents/${id}`;

    const {pathname, ...restProps} = useParsed();

    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === baseUrl) {
            navigate(`${baseUrl}/information`, {replace: true});
        }
    }, []);

    const {fetchCurrent} = useResourceAction(resource);
    const document = fetchCurrent({id});
    const {
        title = '',
        updated_at_persian: updatedAtPersian = '',
        status: statusSlug = '',
    } = document || {};

    const filters = [
        {field: 'document_id', operator: 'eq', value: id}
    ];

    const sections = [
        {
            slug: 'information',
            name: 'اطلاعات',
            icon: 'clipboard',
            link: `${baseUrl}/information`,
            current: pathname === `${baseUrl}/information`,
            component: DocumentInformation,
        },
        {
            slug: 'parts',
            name: 'بخش‌ها',
            icon: 'layer-group',
            count: 1,
            link: `${baseUrl}/parts`,
            current: pathname === `${baseUrl}/parts`,
            component: DocumentPartList,
            componentProps: {
                filters: [
                    {field: 'document_id', operator: 'eq', value: id},
                ],
            }
        },
        {
            slug: 'logs',
            name: 'لاگ‌ها کاربری',
            icon: 'award',
            link: `${baseUrl}/logs`,
            current: pathname === `${baseUrl}/logs`,
            component: DocumentPartList,
            componentProps: {
                filters: [
                    {field: 'document_id', operator: 'eq', value: id},
                ],
            }
        },
        // {slug: 'notifications', name: 'اطلاعیه‌ها', link: `${baseUrl}/notifications`, current: pathname === `${baseUrl}/notifications`, component: NotificationList, componentProps: {filters: [
        //             {field: 'receiver_id', operator: 'eq', value: id},
        //             {field: 'receiver_type', operator: 'eq', value: 'customer'},
        //         ], withoutActions: true}},
    ];

    const {component: PanelComponent, componentProps = {}} = sections.find(({slug, current}) => current) || {};
    return (
        <div className="grid sm:grid-cols-4 gap-4">
            <div className="col-span-1">
                <Placeholder.Card
                    title={title}
                    icon="clipboard"
                >
                    <VerticalTab
                        tabs={sections}
                    />

                    <div className="bg-slate-50 rounded-lg p-4 mt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-xs text-slate-400">آخرین به روزرسانی در:</div>
                                <div className="text-sm mt-1 text-gray-700">
                                    <PersianNumber>{updatedAtPersian}</PersianNumber>
                                </div>
                            </div>
                            <div className="bg-primary-50 p-2 rounded-lg text-sm text-primary-600">
                                فعال
                            </div>
                        </div>
                    </div>
                </Placeholder.Card>
            </div>

            <div className="sm:col-span-3">
                {PanelComponent ? (
                    <PanelComponent
                        {...componentProps}
                    />
                ) : null}
            </div>
        </div>
    );
};


const VerticalTab = ({tabs = [], activeTab}) => {

    const navigate = useNavigate();


    return (
        <>
            <nav className="flex flex-1 flex-col" aria-label="Sidebar">
                <ul role="list" className="-mx-2 space-y-1">
                    {tabs.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.link}
                                className={classNames(
                                    item.current ? 'bg-gray-50 text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex items-center gap-x-3 rounded-md px-2 py-3 text-sm leading-6'
                                )}
                            >
                                <div className="bg-primary-50 rounded-md p-2">
                                    <Icon
                                        type={item.icon}
                                        className={classNames(
                                            item.current ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600',
                                            'h-5 w-5 shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />
                                </div>
                                {item.name}
                                {item.count ? (
                                    <span
                                        className="ms-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                                        aria-hidden="true"
                                    >
                  {item.count}
                </span>
                                ) : null}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};