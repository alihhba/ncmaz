import React from "react";
import {useParsed} from "@refinedev/core";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import DescriptionList from "@/components/DescriptionList";
import PersianNumber from "@/utils/persianNumber";
import findItemBy from "@/utils/findItemBy";
import useResourceAction from "@/hooks/useResourceAction";
import methods from '@/modules/payment/sub-modules/transaction/metadata/methods';
import types from "@/modules/payment/sub-modules/transaction/metadata/types";
import customerTypes from "@/modules/account/customer/metadata/types";

export const TransactionShow = ({resource, id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource || 'transactions');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const transaction = fetchCurrent({id});

    const {
        transaction_id: transactionId = '',
        description = '',
        type: typeSlug = '',
        amount = '',
        updated_at: updatedAt,
        updated_at_persian: updatedAtPersian = '',
        reference_id: referenceId = '',
        customer = {},
        method: methodSlug = '',
        payment_gateway: paymentGateway = '',
    } = transaction || {};

    const {type: customerTypeSlug, name: customerName} = customer || {};

    const customerType = findItemBy({source: customerTypes, key: 'slug', value: customerTypeSlug});
    const type = findItemBy({source: types, key: 'slug', value: typeSlug});
    const method = findItemBy({source: methods, key: 'slug', value: methodSlug});

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="جزئیات تراکنش"
                    icon="credit-card"
                >
                    <DescriptionList>

                        <DescriptionList.Item title="شماره تراکنش">
                            <PersianNumber>{transactionId}</PersianNumber>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="شرح">
                            {description}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="نوع">
                            {type.label}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="مبلغ">
                            <PersianNumber withSeparator>{amount}</PersianNumber> تومان
                        </DescriptionList.Item>

                        <DescriptionList.Item title="تاریخ">
                            {updatedAt ? (
                                <time dateTime={updatedAt}>
                                    <PersianNumber>{updatedAtPersian}</PersianNumber></time>
                            ) : '-'}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="کد پیگیری">
                            <PersianNumber>{referenceId || '-'}</PersianNumber>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="نوع مشتری">
                            {customerType.label}
                        </DescriptionList.Item>

                        <DescriptionList.Item title={customerType.slug === "company" ? "نام ثبت شده شرکت" : "نام و نام خانوادگی"}>
                            <PersianNumber>{customerName}</PersianNumber>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="شیوه پرداخت">
                            {method.label}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="درگاه پرداخت">
                            {paymentGateway || '-'}
                        </DescriptionList.Item>

                    </DescriptionList>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};