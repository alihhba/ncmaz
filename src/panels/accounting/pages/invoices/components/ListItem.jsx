import React from "react";
import Link from '@/components/Link';
import List from "@/components/List";
import ActionMenu from "@/components/ActionMenu";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import useResourceAction from "@/hooks/useResourceAction";
import statuses from '@/modules/payment/sub-modules/invoice/metadata/statuses';
import findItemBy from "@/utils/findItemBy";
import types from "@/modules/payment/sub-modules/invoice/metadata/types";

const InvoiceListItem = ({resource, data, className, withoutCustomer, ...restProps}) => {

    const {showUrl} = useResourceAction(resource);

    const {
        id,
        type: typeSlug = '',
        from,
        from_persian: fromPersian,
        to,
        to_persian: toPersian,
        total,
        customer = {},
        status: statusSlug,
    } = data || {};

    const {name: customerName = ''} = customer || {};

    const type = findItemBy({source: types, key: 'slug', value: typeSlug});
    const status = findItemBy({source: statuses, key: 'slug', value: statusSlug});

    return (
        <List.Item.Container
            {...restProps}
        >
            <List.Item.Data.Link className="ps-8" to={showUrl(id)}>
                <PersianNumber>{id}</PersianNumber>
            </List.Item.Data.Link>

            <List.Item.Data.Text>
                {type.label}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <PersianNumber withSeparator>{total}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                {from ? (
                    <time dateTime={from}>
                        <PersianNumber>{fromPersian}</PersianNumber></time>
                ) : '-'}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                {to ? (
                    <time dateTime={to}>
                        <PersianNumber>{toPersian}</PersianNumber></time>
                ) : '-'}
            </List.Item.Data.Text>

            {!withoutCustomer ? (
                <List.Item.Data.Text>
                    {customerName}
                </List.Item.Data.Text>
            ) : null}

            <List.Item.Data.Container className="pe-6">
                <div
                    className={classNames("inline-flex rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", status.background, status.color, status.border)}>
                    {status.label}
                </div>
            </List.Item.Data.Container>

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">
                <ActionMenu.Container id={id}>

                    <ActionMenu.Item.Show
                        component={Link}
                        to={showUrl(id)}
                    />

                </ActionMenu.Container>
            </List.Item.Data.Container>

        </List.Item.Container>
    );
};

export default InvoiceListItem;