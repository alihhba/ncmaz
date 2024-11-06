import React, {useEffect} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import Form from "@/components/Form";
import useResourceForm from "@/hooks/useResourceForm";
import departments from "@/modules/ticket/metadata/departments";
import priorities from "@/modules/ticket/metadata/priorities";
import services from "@/modules/ticket/metadata/services";
import statuses from "@/modules/ticket/metadata/statuses";
import FormItemSelectWithSearch from "@/components/Form/Item/Select/searchable";

export const TicketForm = ({resource = "tickets", id: providedId, className}) => {

    const {id: parsedId, action, ...restProps} = useParsed();
    const id = providedId || parsedId;

    const {
        data,
        onSubmit,
        loading,
        setDefaultValues,
        register,
        control,
        watch,
        formState: {errors},
        refineCore: {}
    } = useResourceForm({resource, id});

    const serviceTypeValue = watch("service_type");

    useEffect(() => {
        if(!data || !data.id){
            return;
        }

        setDefaultValues({
            title: data.title || '',
            department: data.department || '',
            service_type: data.service_type || '',
            service_id: data.service_id || '',
            priority: data.priority || '',
            customer_id: data.customer_id || '',
            staff_id: data.staff_id || '',
            status: data.status || '',
            description: data?.replies[0]?.description || '',
            // attachments: data?.replies[0]?.attachments || '',
        });
    }, [data]);

    const {replies} = data || {};
    const reply = replies && replies.length ? replies[0] : {};
    const {attachments} = reply || {};

    return (
        <Form.Container withDivide withAction onSubmit={onSubmit} loading={loading}>
            <Form.Section>

                <Form.Item.Container htmlFor="title" label="عنوان" errors={errors.title}>
                    <Form.Item.Input
                        id="title"
                        slug="title"
                        validationSchema={{required: true}}
                        register={register}
                    />
                </Form.Item.Container>

                <Form.Item.Container label="بخش" htmlFor="department" errors={errors.department}>
                    <Form.Item.Select
                        id="department"
                        slug="department"
                        control={control}
                        validationSchema={{required: true}}
                        options={departments}
                        optionsMapping={{value: 'slug'}}
                    />
                </Form.Item.Container>

                <Form.Item.Container label="نوع سرویس" htmlFor="service_type" errors={errors.service_type}>
                    <Form.Item.Select
                        id="service_type"
                        slug="service_type"
                        control={control}
                        validationSchema={{required: true}}
                        options={services}
                        optionsMapping={{value: 'slug'}}
                    />
                </Form.Item.Container>

                <Form.Item.Container label="سرویس" htmlFor="service_id">
                    <Form.Item.Service
                        service={serviceTypeValue}
                        id="service_id"
                        slug="service_id"
                        control={control}
                        withSearch
                        nullable
                    />
                </Form.Item.Container>

                <Form.Item.Container label="اولویت" htmlFor="priority" errors={errors.priority}>
                    <Form.Item.Select
                        id="priority"
                        slug="priority"
                        control={control}
                        validationSchema={{required: true}}
                        options={priorities}
                        optionsMapping={{value: 'slug'}}
                    />
                </Form.Item.Container>

                <Form.Item.Container htmlFor="description" label="متن" errors={errors.description}>
                    <Form.Item.Textarea
                        id="description"
                        slug="description"
                        type="number"
                        validationSchema={{required: true}}
                        register={register}
                        className="max-w-lg"
                    />
                </Form.Item.Container>

                <Form.Item.Container htmlFor="attachments" label="پیوست" errors={errors.attachments}>
                    <Form.Item.File
                        id="attachments"
                        slug="attachments"
                        source={attachments}
                        watch={watch}
                        register={register}
                        mimes={['jpg', 'png', 'pdf']}
                        multiple={false}
                        className="max-w-lg"
                    />
                </Form.Item.Container>

            </Form.Section>

        </Form.Container>
    );
};