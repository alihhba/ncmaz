import React from "react";
import Form from "@/components/Form";
import FilterContainer from "@/components/ResourceButton/components/FilterContainer";
import {useForm} from "@refinedev/react-hook-form";

const ServerFilter = ({
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

                <Form.Item.Container label="نام" htmlFor="name">
                    <Form.Item.Input
                        id="name"
                        slug="name"
                        register={register}
                    />
                </Form.Item.Container>

                <Form.Item.Container label="دیتاسنتر" htmlFor="is_plan">
                    <Form.Item.Select
                        id="datacenter"
                        slug="datacenter"
                        control={control}
                        options={[
                            {value: "آسیاتک", label: "آسیاتک"},
                            {value: "های وب", label: "های وب"},
                            {value: "تبیان", label: "تبیان"},
                        ]}
                        withAll
                    />
                </Form.Item.Container>

            </Form.Section>
        </FilterContainer>
    );
};

export default ServerFilter;