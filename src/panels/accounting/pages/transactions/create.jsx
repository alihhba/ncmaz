import React, {useEffect} from "react";
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
import useResourceForm from "@/hooks/useResourceForm";
import Form from "@/components/Form";

export const TransactionCreat = ({resource = "transactions", id: providedId}) => {

    const {id: parsedId} = useParsed();
    const id = providedId || parsedId;

    const {
        data,
        onSubmit,
        loading,
        setDefaultValues,
        register,
        formState: {errors},
        control,
        refineCore: {}
    } = useResourceForm({resource, id});

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="جزئیات تراکنش"
                    icon="credit-card"
                >
                    <Form.Container withDivide withAction onSubmit={onSubmit} loading={loading}>
                        <Form.Section>

                            <Form.Item.Container htmlFor="customer_id" label="مشتری" errors={errors.customer_id}>
                                <Form.Item.Select
                                    id="customer_id"
                                    slug="customer_id"
                                    control={control}
                                    options={[]}
                                />
                            </Form.Item.Container>


                            <Form.Item.Container htmlFor="amount" label="مبلغ" errors={errors.amount}>
                                <Form.Item.Input
                                    id="amount"
                                    slug="amount"
                                    type="number"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="description" label="توضیحات" errors={errors.description}>
                                <Form.Item.Input
                                    id="description"
                                    slug="description"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>
                        </Form.Section>

                    </Form.Container>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};