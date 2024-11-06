import React from "react";
import {useForm} from "@refinedev/react-hook-form";
import Form from "@/components/Form";
import FilterContainer from "@/components/ResourceButton/components/FilterContainer";
import types from "@/modules/notification/metadata/types";

const NotificationFilter = ({
                                filters: providedFilters = [],
                                setFilters = () => {
                                },
                                ...restProps
                            }) => {

    const form = useForm();
    const {register, control, watch} = form || {};

    const receiverTypeValue = watch("receiver_type");

    return (
        <FilterContainer
            {...restProps}
            filters={providedFilters}
            setFilters={setFilters}
            form={form}
        >

            <Form.Section>

                <Form.Item.Container label="عنوان" htmlFor="title">
                    <Form.Item.Input
                        id="title"
                        slug="title"
                        register={register}
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

                <Form.Item.Container label="گیرنده" htmlFor="receiver_type">
                    <Form.Item.Select
                        id="receiver_type"
                        slug="receiver_type"
                        control={control}
                        withAll
                        options={[
                            {label: 'مشتری', value: 'customer'},
                            {label: 'پشتیبانی', value: 'staff'},
                        ]}
                    />
                </Form.Item.Container>


                {receiverTypeValue === "customer" ? (
                    <Form.Item.Container label="مشتری" htmlFor="receiver_id">
                        <Form.Item.Customer
                            key="customer"
                            id="receiver_id"
                            slug="receiver_id"
                            control={control}
                            withAll
                            withSearch
                            nullable
                        />
                    </Form.Item.Container>
                ) : null}
                {receiverTypeValue === "staff" ? (
                    <Form.Item.Container label="پشتیبان" htmlFor="receiver_id">
                        <Form.Item.Staff
                            key="staff"
                            id="receiver_id"
                            slug="receiver_id"
                            control={control}
                            withAll
                            withSearch
                            nullable
                        />
                    </Form.Item.Container>
                ) : null}
        </Form.Section>

</FilterContainer>
)
    ;
};

export default NotificationFilter;