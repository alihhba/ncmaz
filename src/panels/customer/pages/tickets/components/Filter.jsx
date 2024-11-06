import React from "react";
import Form from "@/components/Form";
import FilterContainer from "@/components/ResourceButton/components/FilterContainer";
import {useForm} from "@refinedev/react-hook-form";
import statuses from '@/modules/ticket/components/statuses';
import departments from "@/modules/ticket/metadata/departments";
import priorities from "@/modules/ticket/metadata/priorities";

const TicketFilter = ({
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

                <Form.Item.Container label="اولویت" htmlFor="priority">
                    <Form.Item.Select
                        id="priority"
                        slug="priority"
                        control={control}
                        options={priorities}
                        optionsMapping={{value: 'slug'}}
                        withAll
                    />
                </Form.Item.Container>

            </Form.Section>

        </FilterContainer>
    );
};

export default TicketFilter;