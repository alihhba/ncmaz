import React from "react";
import {useForm} from "@refinedev/react-hook-form";
import Form from "@/components/Form";
import FilterContainer from "@/components/ResourceButton/components/FilterContainer";

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

                <Form.Item.Container label="جستجو" htmlFor="id">
                    <Form.Item.Input
                        id="id"
                        slug="id"
                        register={register}
                    />
                </Form.Item.Container>

            </Form.Section>

        </FilterContainer>
    );
};

export default InvoiceFilter;