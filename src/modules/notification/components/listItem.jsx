import React, {useState} from "react";
import Actions from "@/pages/categories/components/actions";
import useResourceAction from "@/hooks/useResourceAction";
import Link from '@/components/Link';
import List from "@/modules/server/common/list";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import statuses from './statuses';
import {ModalBase} from "@/components/Modal/Base";
import Form from "@/components/Form";

export const NotificationListItem = ({
                                   isSelected,
                                   onToggleSelect,
                                   id,
                                   cover,
                                   title,
                                   time,
                                   timePersian,
                                   amount,
                                   type: statusSlug,
                                   updated_at: updateAt,
                                   updated_at_persian: updatedAtPersian,
                                   actions = [],
                                   className,
                                   ...restProps
                               }) => {

    const {showUrl} = useResourceAction();

    const status = statuses.find(({slug}) => slug === statusSlug) || {};

    const [show, setShow] = useState(false);

    return (
        <>
            <List.Item.Container
                {...restProps}
                onClick={() => {setShow(true)}}
            >
                {/*<List.Item.Data.Link className="ps-8" to={showUrl(id)}>*/}
                {/*    <PersianNumber>{id}</PersianNumber>*/}
                {/*</List.Item.Data.Link>*/}

                <List.Item.Data.Text className="ps-8">
                    {title}
                </List.Item.Data.Text>

                <List.Item.Data.Text>
                    {status.label}
                </List.Item.Data.Text>

                <List.Item.Data.Text>
                    {time ? (
                        <time dateTime={time}>
                            <PersianNumber>{timePersian}</PersianNumber></time>
                    ) : '-'}
                </List.Item.Data.Text>

                <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">
                    <Actions id={id}/>
                </List.Item.Data.Container>
            </List.Item.Container>
            <ModalBase open={show} onClose={() => {setShow(false)}}>
                <div className="px-4 py-5 sm:p-0" style={{direction: 'rtl'}}>
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 bg-slate-50">
                            <dt className="text-start text-sm font-bold text-gray-500">مشخصات سرور</dt>
                            <dd className="text-end mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0" />
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                            <dt className="text-start text-sm font-medium text-gray-500">دیتاسنتر</dt>
                            <dd className="text-end mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">آسیاتک</dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                            <dt className="text-start text-sm font-medium text-gray-500">سیستم عامل</dt>
                            <dd className="text-end mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Ubuntu - 22.04</dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                            <dt className="text-start text-sm font-medium text-gray-500">هزینه ماهانه</dt>
                            <dd className="text-end mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><PersianNumber>200,000 تومان</PersianNumber></dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                            <dt className="text-start text-sm font-medium text-gray-500">شیوه دسترسی</dt>
                            <dd className="text-end mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><PersianNumber>کلید SSH</PersianNumber></dd>
                        </div>
                    </dl>
                </div>
            </ModalBase>
        </>
    );
};