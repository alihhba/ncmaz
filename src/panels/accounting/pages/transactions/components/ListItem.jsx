import React from "react";
import List from "@/components/List";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import ActionMenu from "@/components/ActionMenu";
import {ModalBase} from "@/components/Modal/Base";
import types from '@/modules/payment/sub-modules/transaction/metadata/types';
import {TransactionShow} from "../show";
import findItemBy from "@/utils/findItemBy";

const TransactionListItem = ({resource, data, className, withoutCustomer, ...restProps}) => {

    const {
        id,
        transaction_id: transactionId = '',
        description,
        type: typeSlug,
        amount,
        updated_at: updatedAt,
        updated_at_persian: updatedAtPersian,
        customer = {},
    } = data || {};

    const {name: customerName} = customer || {};

    const type = findItemBy({source: types, key: 'slug', value: typeSlug});

    return (
        <List.Item.Container {...restProps} >

            <List.Item.Data.Text className="ps-8">
                <PersianNumber>{transactionId}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Text className="ps-8">
                {description}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <div className={classNames("text-start", type.color)} style={{direction: 'ltr'}}>
                    {`${type.slug === 'increase' ? '+' : '-'}${PersianNumber({children: amount, withSeparator: true})}`}
                </div>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                {updatedAt ? (
                    <time dateTime={updatedAt}>
                        <PersianNumber>{updatedAtPersian}</PersianNumber></time>
                ) : '-'}
            </List.Item.Data.Text>

            {!withoutCustomer ? (
                <List.Item.Data.Text>
                    {customerName}
                </List.Item.Data.Text>
            ) : null}

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">
                <ActionMenu.Container id={id}>

                    <ActionMenu.Item.Show
                        extra={(
                            <ModalBase>
                                <TransactionShow id={id}/>
                            </ModalBase>
                        )}
                    />

                </ActionMenu.Container>
            </List.Item.Data.Container>
        </List.Item.Container>
    );
};

export default TransactionListItem;