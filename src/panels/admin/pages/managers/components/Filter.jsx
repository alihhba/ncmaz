import React from "react";
import Form from "@/components/Form";
import FilterContainer from "@/components/ResourceButton/components/FilterContainer";
import {useForm} from "@refinedev/react-hook-form";

const ManagerFilter = ({
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

                    <Form.Item.Container label="نام و نام خانوادگی" htmlFor="name">
                        <Form.Item.Input
                            id="name"
                            slug="name"
                            register={register}
                        />
                    </Form.Item.Container>

                    <Form.Item.Container label="شماره تماس" htmlFor="mobile">
                        <Form.Item.Input
                            id="mobile"
                            slug="mobile"
                            register={register}
                        />
                    </Form.Item.Container>

                    <Form.Item.Container label="ایمیل" htmlFor="email">
                        <Form.Item.Input
                            id="email"
                            slug="email"
                            register={register}
                        />
                    </Form.Item.Container>

                </Form.Section>
        </FilterContainer>
    );
};

export default ManagerFilter;