import React from "react";
import {ModalBase} from "@/components/Modal/Base";
import {useForm, useInvalidate} from "@refinedev/core";
import useResourceForm from "@/hooks/useResourceForm";
import Form from "@/components/Form";
import Placeholder from "@/components/Placeholder";

const AddWalletAmountModal = ({resource = 'transactions', onClose, }) => {

    const invalidate = useInvalidate();

    const {
        data,
        onSubmit,
        loading,
        setDefaultValues,
        register,
        formState: {errors},
        control,
        refineCore: {}
    } = useResourceForm({
        resource,
        refineCoreProps: {
            onMutationSuccess: () => {
                invalidate({
                    resource: 'wallet',
                    invalidates: ['resourceAll'],
                });

                onClose();
            },
        },
    });

    return (
        <ModalBase
            onClose={onClose}
        >
            <Placeholder.Card
                title="افزایش اعتبار"
                icon="credit-card"
            >
                <Form.Container onSubmit={onSubmit} loading={loading}>
                        <Form.Item.Container stacked htmlFor="amount" label="مبلغ (تومان)" errors={errors.amount}>
                            <Form.Item.Input
                                id="amount"
                                slug="amount"
                                type="number"
                                step={1000}
                                validationSchema={{required: true}}
                                register={register}
                            />
                        </Form.Item.Container>

                        <Form.Item.Container stacked htmlFor="payment_gateway" label="درگاه پرداخت" errors={errors.payment_gateway}>
                            <Form.Item.Select
                                id="payment_gateway"
                                slug="payment_gateway"
                                validationSchema={{required: true}}
                                control={control}
                                options={[
                                    {label: 'پارسیان', value: 'پارسیان'},
                                    {label: 'ملت', value: 'ملت'},
                                    {label: 'پاسارگاد', value: 'پاسارگاد'},
                                ]}
                            />
                        </Form.Item.Container>
                    <Form.Action loading={loading} onCancel={onClose} />

                </Form.Container>
            </Placeholder.Card>
        </ModalBase>
    );
};

export default AddWalletAmountModal;