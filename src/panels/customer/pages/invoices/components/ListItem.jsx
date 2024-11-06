import React from "react";
import Link from '@/components/Link';
import List from "@/components/List";
import ActionMenu from "@/components/ActionMenu";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import useResourceAction from "@/hooks/useResourceAction";
import statuses from '@/modules/payment/sub-modules/invoice/metadata/statuses';

const InvoiceListItem = ({resource, data, className, ...restProps}) => {

    const {showUrl} = useResourceAction(resource);

    const {
        id,
        from,
        from_persian: fromPersian,
        to,
        to_persian: toPersian,
        total,
        status: statusSlug,
    } = data || {};

    const status = statuses.find(({slug}) => slug === statusSlug) || {};

    return (
        <List.Item.Container
            {...restProps}
        >
            <List.Item.Data.Link className="ps-8" to={showUrl(id)}>
                <PersianNumber>{id}</PersianNumber>
            </List.Item.Data.Link>

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