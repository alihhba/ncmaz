import React from 'react'
import {useParsed} from "@refinedev/core";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import PersianNumber from "@/utils/persianNumber";
import useResourceAction from "@/hooks/useResourceAction";
import findItemBy from "@/utils/findItemBy";
import statuses from "@/modules/payment/sub-modules/invoice/metadata/statuses";

export const InvoiceShow = ({resource, id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource || 'invoices');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const invoice = fetchCurrent({id});

    const {
        amount,
        tax,
        total,
        from,
        from_persian: fromPersian = '',
        to,
        to_persian: toPersian = '',
        items = [],
        customer = {},
        status: statusSlug = '',
    } = invoice || {};

    const {
        name: customerName = '',
    } = customer || {};

    const status = findItemBy({source: statuses, key: 'slug', value: statusSlug});

    const RenderItem = ({
                            id: itemId,
                            title,
                            flavor = {},
                            server = {},
                            used_hours: usedHours = '',
                            hourly_price: hourlyPrice = '',
                            price = ''
                        }) => {

        const {name: flavorName, ram, cpu, disk, disk_type: diskType = ''} = flavor || {};
        const {name: itemName} = server || {};

        return (
            <tr key={`invoice-item-${itemId}`} className="border-b border-gray-100">
                <td className="max-w-0 px-0 py-5 align-top">
                    <div className="truncate font-medium text-gray-900">{itemName}</div>
                    <div className="truncate text-gray-500 mt-1 flex items-center gap-1">
                        <div>{flavorName} (</div>
                        <div style={{direction: 'ltr'}}>
                         <span className="block sm:inline">
                        {ram} GB / {cpu} Core </span>{' '}<span className="hidden sm:mx-1 sm:inline" aria-hidden="true"> &middot;</span>{' '}
                            <span className="block sm:inline">{disk} GB {diskType.toUpperCase()}</span>
                        </div>
                        <div>)</div>
                    </div>

                </td>
                <td className="hidden py-5 ps-8 pe-0 text-end align-top text-gray-700 sm:table-cell">
                    <PersianNumber>{usedHours}</PersianNumber>
                </td>
                <td className="hidden py-5 ps-8 pe-0 text-end align-top text-gray-700 sm:table-cell">
                    <PersianNumber withSeparator>{hourlyPrice}</PersianNumber>
                </td>
                <td className="py-5 ps-8 pe-0 text-end align-top text-gray-700">
                    <PersianNumber withSeparator>{price}</PersianNumber>
                </td>
            </tr>
        );
    }

    return (
        <div
            className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-4 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Invoice summary */}
            <div className="lg:col-start-3 lg:row-end-1">
                <h2 className="sr-only">خلاصه</h2>
                <div className="rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
                    <dl className="flex flex-wrap">
                        <div className="flex-auto ps-6 pt-6">
                            <dt className="text-sm font-semibold leading-6 text-gray-900">شماره فاکتور</dt>
                            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                                <PersianNumber>{id}</PersianNumber>
                            </dd>
                        </div>
                        <div className="flex-none self-end px-6 pt-4">
                            <dt className="sr-only">وضعیت</dt>
                            <dd className={classNames("rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", invoice.status === 'closed' ? "bg-green-50 text-green-600 ring-green-600/20" : "bg-amber-50 text-amber-600 ring-amber-600/20")}>
                                {status.label}
                            </dd>
                        </div>
                        <div className="w-full border-t mt-6 pt-3 pb-5">
                            <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-3 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 flex items-center gap-3">
                                    <Icon type="user" className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                    <div>نام</div>
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 text-end">{customerName}</dd>
                            </div>
                            <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-3 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 flex items-center gap-3">
                                    <Icon type="calendar" className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                    <div>تاریخ شروع</div>
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 text-end">
                                    {from ? (
                                        <time dateTime={from}>
                                            <PersianNumber>{fromPersian}</PersianNumber></time>
                                    ) : null}
                                </dd>
                            </div>
                            <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-3 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 flex items-center gap-3">
                                    <Icon type="calendar-due" className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                    <div>تاریخ پایان</div>
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 text-end">
                                    {to ? (
                                        <time dateTime={to}><PersianNumber>{toPersian}</PersianNumber>
                                        </time>
                                    ) : "-"}
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>

            {/* Invoice */}
            <Placeholder.Card
                className="-mx-4 sm:mx-0 lg:col-span-2 lg:row-span-2 lg:row-end-2"
                bodyProps={{className: "px-4 sm:px-10 sm:pt-6 sm:pb-10"}}
                icon="invoice"
                title="شرح فاکتور"
            >
                <table className="w-full whitespace-nowrap text-start text-sm leading-6">
                    <colgroup>
                        <col className="w-full"/>
                        <col/>
                        <col/>
                        <col/>
                    </colgroup>
                    <thead className="border-b border-gray-200 text-gray-900">
                    <tr>
                        <th scope="col" className="px-0 py-3 font-semibold">
                            سرور
                        </th>
                        <th scope="col" className="hidden py-3 ps-8 pe-0 text-end font-semibold sm:table-cell">
                            میزان مصرف (ساعت)
                        </th>
                        <th scope="col" className="hidden py-3 ps-8 pe-0 text-end font-semibold sm:table-cell">
                            مبلغ واحد (تومان)
                        </th>
                        <th scope="col" className="py-3 ps-8 pe-0 text-end font-semibold">
                            مبلغ کل (تومان)
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => <RenderItem {...item} />)}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th scope="row" className="px-0 pb-0 pt-6 font-normal text-gray-700 sm:hidden">
                            مبلغ کل
                        </th>
                        <th
                            scope="row"
                            colSpan={3}
                            className="hidden px-0 pb-0 pt-6 text-end font-normal text-gray-700 sm:table-cell"
                        >
                            مبلغ کل
                        </th>
                        <td className="pb-0 ps-8 pe-0 pt-6 text-end text-gray-900">
                            <PersianNumber withSeparator>{amount}</PersianNumber>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="pt-4 font-normal text-gray-700 sm:hidden">
                            مالیات بر ارزش افزوده
                        </th>
                        <th
                            scope="row"
                            colSpan={3}
                            className="hidden pt-4 text-end font-normal text-gray-700 sm:table-cell"
                        >
                            مالیات بر ارزش افزوده
                        </th>
                        <td className="pb-0 ps-8 pe-0 pt-4 text-end text-gray-900">
                            <PersianNumber withSeparator>{tax}</PersianNumber>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="pt-4 font-semibold text-gray-900 sm:hidden">
                            جمع کل
                        </th>
                        <th
                            scope="row"
                            colSpan={3}
                            className="hidden pt-4 text-end font-semibold text-gray-900 sm:table-cell"
                        >
                            جمع کل
                        </th>
                        <td className="pb-0 ps-8 pe-0 pt-4 text-end font-semibold text-gray-900">
                            <PersianNumber withSeparator>{total}</PersianNumber>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </Placeholder.Card>
        </div>
    );
}
