import React from "react";
import {useParsed} from "@refinedev/core";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import PersianNumber from "@/utils/persianNumber";
import useResourceAction from "@/hooks/useResourceAction";
import DescriptionList from "@/components/DescriptionList";
import methods from '@/modules/payment/sub-modules/transaction/metadata/methods';
import findItemBy from "@/utils/findItemBy";

export const TransactionShow = ({resource, id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource || 'transactions');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const transaction = fetchCurrent({id});

    const {
        description = '',
        amount = '',
        updated_at: updatedAt,
        updated_at_persian: updatedAtPersian = '',
        reference_id: referenceId = '',
        method: methodSlug = '',
        payment_gateway : paymentGateway ='',
    } = transaction || {};

    const method = findItemBy({source: methods, key: 'slug', value: methodSlug});

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="جزئیات تراکنش"
                    icon="credit-card"
                >
                    <DescriptionList>

                        <DescriptionList.Item title="شرح">
                            {description}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="مبلغ">
                            <PersianNumber withSeparator>{amount}</PersianNumber> تومان
                        </DescriptionList.Item>

                        <DescriptionList.Item title="زمان">
                            {updatedAt ? (
                                <time dateTime={updatedAt}>
                                    <PersianNumber>{updatedAtPersian}</PersianNumber></time>
                            ) : '-'}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="کد پیگیری">
                            <PersianNumber>{referenceId || '-'}</PersianNumber>
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