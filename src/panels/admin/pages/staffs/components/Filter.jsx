import React from "react";
import Form from "@/components/Form";
import FilterContainer from "@/components/ResourceButton/components/FilterContainer";
import {useForm} from "@refinedev/react-hook-form";
import statuses from "@/modules/account/user/metadata/statuses";
import departments from "@/modules/ticket/metadata/departments";

const StaffFilter = ({
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

                    <Form.Item.Container label="بخش" htmlFor="department">
                        <Form.Item.Select
                            id="department"
                            slug="department"
                            control={control}
                            options={departments}
                            optionsMapping={{value: 'slug'}}
                            withAll
                        />
                    </Form.Item.Container>

                </Form.Section>
        </FilterContainer>
    );
};

export default StaffFilter;