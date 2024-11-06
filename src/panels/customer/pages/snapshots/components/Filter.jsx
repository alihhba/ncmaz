import React from "react";
import Form from "@/components/Form";
import FilterContainer from "@/components/ResourceButton/components/FilterContainer";
import {useForm} from "@refinedev/react-hook-form";

const SnapshotFilter = ({
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

                </Form.Section>

        </FilterContainer>
    );
};

export default SnapshotFilter;