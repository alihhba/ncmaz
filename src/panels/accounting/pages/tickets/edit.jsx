import React, {useEffect} from "react";
import {useParsed} from "@refinedev/core";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import Form from "@/components/Form";
import useResourceForm from "@/hooks/useResourceForm";
import departments from "@/modules/ticket/metadata/departments";
import priorities from "@/modules/ticket/metadata/priorities";
import services from "@/modules/ticket/metadata/services";
import statuses from "@/modules/ticket/metadata/statuses";

export const TicketEdit = ({resource = "tickets", id: providedId}) => {

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
        refineCore: {},
        getValues,
    } = useResourceForm({resource, id});

    useEffect(() => {
        if(!data || !data.id){
            return;
        }

        setDefaultValues({
            title: data.title || '',
            service_type: data.service_type || '',
            service_id: data.service_id,
            priority: data.priority || '',
            customer_id: data.customer_id || '',
            status: data.status || '',
            description: data?.replies[0]?.description || '',
            // attachments: data?.replies[0]?.attachments || '',
        });
    }, [data]);

    const {replies} = data || {};
    const reply = replies && replies.length ? replies[0] : {};
    const {attachments} = reply || {};

    const serviceTypeValue = watch("service_type");

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card title="تیکت" icon="headphones" className="col-span-3">
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

                            <Form.Item.Container label="وضعیت" htmlFor="status" errors={errors.status}>
                                <Form.Item.Select
                                    id="status"
                                    slug="status"
                                    control={control}
                                    validationSchema={{required: true}}
                                    options={statuses}
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

                            <Form.Item.Container label="سرویس" htmlFor="service_id" errors={errors.service_id}>
                                <Form.Item.Service
                                    service={serviceTypeValue}
                                    id="service_id"
                                    slug="service_id"
                                    control={control}
                                    withSearch
                                    nullable
                                    filters={[
                                        {field: 'customer_id', operator: 'eq', value: data.customer_id}
                                    ]}
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
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};