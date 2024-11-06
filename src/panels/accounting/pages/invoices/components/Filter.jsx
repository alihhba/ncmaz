import React from "react";
import {useForm} from "@refinedev/react-hook-form";
import Form from "@/components/Form";
import FilterContainer from "@/components/ResourceButton/components/FilterContainer";
import types from "@/modules/payment/sub-modules/invoice/metadata/types";
import statuses from "@/modules/payment/sub-modules/invoice/metadata/statuses";

const InvoiceFilter = ({
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

                <Form.Item.Container label="شماره فاکتور" htmlFor="id">
                    <Form.Item.Input
                        id="id"
                        slug="id"
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

                <Form.Item.Container label="نوع" htmlFor="type">
                    <Form.Item.Select
                        id="type"
                        slug="type"
                        control={control}
                        options={types}
                        optionsMapping={{value: 'slug'}}
                        withAll
                    />
                </Form.Item.Container>

                <Form.Item.Container label="وضعیت" htmlFor="status">
                    <Form.Item.Select
                        id="status"
                        slug="status"
                        control={control}
                        options={statuses}
                        optionsMapping={{value: 'slug'}}
                        withAll
                    />
                </Form.Item.Container>

            </Form.Section>

        </FilterContainer>
    );
};

export default InvoiceFilter;