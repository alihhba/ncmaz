import React from "react";
import {useForm} from "@refinedev/react-hook-form";
import Form from "@/components/Form";
import FilterContainer from "@/components/ResourceButton/components/FilterContainer";
import methods from "@/modules/payment/sub-modules/transaction/metadata/methods";
import types from "@/modules/payment/sub-modules/transaction/metadata/types";

const TransactionFilter = ({
                                filters: providedFilters = [],
                                setFilters = () => {
                                },
                                ...restProps
                            }) => {

    const {register, control, ...form} = useForm();

    return (
        <FilterContainer
            {...restProps}
            filters={providedFilters}
            setFilters={setFilters}
            form={form}
        >

            <Form.Section>

                <Form.Item.Container label="شماره تراکنش" htmlFor="transaction_id">
                    <Form.Item.Input
                        id="transaction_id"
                        slug="transaction_id"
                        register={register}
                    />
                </Form.Item.Container>

                <Form.Item.Container label="مشتری" htmlFor="customer_id">
                    <Form.Item.Customer
                        id="customer_id"
                        slug="customer_id"
                        control={control}
                        withSearch
                        withAll
                        nullable
                    />
                </Form.Item.Container>

                <Form.Item.Container label="نوع تراکنش" htmlFor="type">
                    <Form.Item.Select
                        id="type"
                        slug="type"
                        control={control}
                        options={types}
                        optionsMapping={{value: 'slug'}}
                        withAll
                    />
                </Form.Item.Container>

                <Form.Item.Container label="شیوه پرداخت" htmlFor="method">
                    <Form.Item.Select
                        id="method"
                        slug="method"
                        control={control}
                        options={methods}
                        optionsMapping={{value: 'slug'}}
                        withAll
                    />
                </Form.Item.Container>

            </Form.Section>

        </FilterContainer>
    );
};

export default TransactionFilter;