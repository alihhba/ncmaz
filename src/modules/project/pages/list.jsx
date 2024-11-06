import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import Icon from "@/components/Icon";
import ResourceButton from "@/components/ResourceButton";
import {ProjectListItem} from "@/modules/project/components/listItem";
import useSelectedItems from "@/hooks/useSelectedItems";
import List from "@/modules/server/common/list";
import {useList} from "@refinedev/core";
import requestHeaders from "@/utils/requestHeaders";

export const ProjectList = () => {

    const {data} = useList({
        resource: 'projects',
        dataProviderName: 'project',
        meta: {
            headers: requestHeaders,
        }
    });

    const fakeData = {
        id: 1,
        title: 'project-1',
        ram: '4 GB',
        cpu: '2 Core',
        disk: '64 GB',
        serverCount: 5,
        price: '150,000'
    };

    // const initialItems = [
    //     {...fakeData, id: 1, title: 'project-1'},
    //     {...fakeData, id: 2, title: 'project-2'},
    //     {...fakeData, id: 3, title: 'project-3'},
    //     {...fakeData, id: 4, title: 'project-4'},
    //     {...fakeData, id: 5, title: 'project-5'},
    //     {...fakeData, id: 6, title: 'project-6'},
    // ];

    const initialItems = data?.data?.projects.map(({name: title, ...restItemProps})=>({
        ...fakeData,
        ...restItemProps,
        title,
    }));

    const {items, selectedItems, toggleSingleItem, toggleAllItems} = useSelectedItems({
        initialItems: initialItems,
        itemIdentifierKey: 'id',
    })

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="پروژه‌ها"
                    icon="layer-group"
                    bodyProps={{className: 'p-0'}}
                    meta={(
                        <div className="lg:ms-6 flex items-center space-s-3">
                            <ResourceButton.Filter/>
                            <ResourceButton.Create withLabel={false}/>
                        </div>
                    )}
                >
                    {/*<div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch w-full px-4 py-5 sm:p-6">*/}
                    {/*    <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">*/}
                    {/*        <div className="flex items-center">*/}
                    {/*            <a className="text-gray-600 dark:text-gray-400 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="#">*/}
                    {/*                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">*/}
                    {/*                    <path stroke="none" d="M0 0h24v24H0z" />*/}
                    {/*                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />*/}
                    {/*                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />*/}
                    {/*                    <line x1={16} y1={5} x2={19} y2={8} />*/}
                    {/*                </svg>*/}
                    {/*            </a>*/}
                    {/*            <a className="text-gray-600 dark:text-gray-400 mx-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="#">*/}
                    {/*                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">*/}
                    {/*                    <path stroke="none" d="M0 0h24v24H0z" />*/}
                    {/*                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />*/}
                    {/*                    <circle cx={12} cy={12} r={3} />*/}
                    {/*                </svg>*/}
                    {/*            </a>*/}
                    {/*            <a className="text-gray-600 dark:text-gray-400 me-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="#">*/}
                    {/*                <Icon type="pause" className="h-4 w-4" />*/}
                    {/*            </a>*/}
                    {/*            <a className="text-gray-600 dark:text-gray-400 me-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="#">*/}
                    {/*                <Icon type="play" className="h-4 w-4" />*/}
                    {/*            </a>*/}

                    {/*            <a className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="#">*/}
                    {/*                <Icon type="trash" className="h-4 w-4" />*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*        {selectedItems.length ? (<div className="ms-4 bg-slate-50 rounded-md text-slate-400 p-2"><PersianNumber>{selectedItems.length}</PersianNumber> مورد انتخاب شده است.</div>) : null}*/}
                    {/*    </div>*/}

                    {/*    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">*/}
                    {/*        <div className="lg:ms-6 flex items-center space-s-3">*/}
                    {/*            <ResourceButton.Filter />*/}
                    {/*            <ResourceButton.Create withLabel={false} />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                        <table className="min-w-full bg-white">
                            <thead>
                            <List.Header.Container>
                                {/*<List.Header.Data.Checkbox*/}
                                {/*    onToggle={toggleAllItems}*/}
                                {/*/>*/}
                                <List.Header.Data.Text className="ps-8">نام</List.Header.Data.Text>
                                <List.Header.Data.Text>حافظه</List.Header.Data.Text>
                                <List.Header.Data.Text>پردازنده</List.Header.Data.Text>
                                <List.Header.Data.Text>دیسک</List.Header.Data.Text>
                                <List.Header.Data.Text>تعداد سرور</List.Header.Data.Text>
                                <List.Header.Data.Text>شارژ ماهیانه (تومان)</List.Header.Data.Text>
                                <List.Header.Data.Empty/>
                            </List.Header.Container>
                            </thead>
                            <tbody className="divide-y">
                            {items.map(({id, ...restItemProps}) => (
                                <ProjectListItem key={id} id={id} {...restItemProps} onToggleSelect={() => {
                                    toggleSingleItem({id})
                                }}/>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};
