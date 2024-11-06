import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import PersianNumber from "@/utils/persianNumber";
import useResourceAction from "@/hooks/useResourceAction";
import DescriptionList from "@/components/DescriptionList";
import Icon from "@/components/Icon/index.jsx";

export const DocumentShow = ({resource, id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource || 'documents');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const customer = fetchCurrent({id});

    const {
        title = '',
        created_at_persian: createdAtPersian = '',
        updated_at_persian: updatedAtPersian = '',
    } = customer || {};

    const RenderParts = ()=>{
        return (
            <Placeholder.Card>
                <ol className="relative border-s border-gray-200 dark:border-gray-700 space-y-10">
                    <li className="ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February
                            2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind
                            CSS</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+
                            pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &
                            Marketing pages.</p>
                        <a href="#"
                           className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            مشاهده
                            {/*<Icon type="arrow-long-end" shouldFlipBasedOnDirection />*/}
                        </a>
                    </li>
                    <li className="ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March
                            2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in
                            Figma</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and
                            components are first designed in Figma and we keep a parity between the two versions even as we
                            update the project.</p>
                    </li>
                    <li className="ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April
                            2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind
                            CSS</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web
                            components and interactive elements built on top of Tailwind CSS.</p>
                    </li>
                </ol>
            </Placeholder.Card>
        );
    };

    return (
        <Page>
            <Page.Content>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <Placeholder.Card
                            title="مشخصات سند"
                            icon="clipboard"
                        >
                            <DescriptionList>

                                <DescriptionList.Item title="عنوان">
                                    {title}
                                </DescriptionList.Item>

                                <DescriptionList.Item title="تاریخ ایجاد" style={{direction: 'ltr'}}>
                                    <PersianNumber>{createdAtPersian}</PersianNumber>
                                </DescriptionList.Item>

                                <DescriptionList.Item title="آخرین به روز رسانی" style={{direction: 'ltr'}}>
                                    <PersianNumber>{updatedAtPersian}</PersianNumber>
                                </DescriptionList.Item>

                            </DescriptionList>
                        </Placeholder.Card>
                    </div>
                    <div className="col-span-3 space-y-4">
                        <Placeholder.Card>
                            Test
                        </Placeholder.Card>
                        <RenderParts />
                    </div>
                </div>
            </Page.Content>
        </Page>
    );
};