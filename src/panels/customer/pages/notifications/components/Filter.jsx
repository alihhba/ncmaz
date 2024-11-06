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

    const {register, control, ...form} = useForm();

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

            </Form.Section>

        </FilterContainer>
    );
};

export default NotificationFilter;