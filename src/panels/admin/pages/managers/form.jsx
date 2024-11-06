import React, {useEffect} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useBack, useParsed} from "@refinedev/core";
import Form from "@/components/Form";
import useResourceForm from "@/hooks/useResourceForm";

export const ManagerForm = ({resource = "managers", id: providedId}) => {

    const {id: parsedId, action} = useParsed();
    const id = providedId || parsedId;

    const {
        data,
        onSubmit,
        loading,
        setDefaultValues,
        register,
        formState: {errors},
        setValue,
        watch,
        refineCore: {}
    } = useResourceForm({resource, id});

    useEffect(() => {
        setDefaultValues({
            status: 'active',
        });
    }, []);

    useEffect(() => {
        if(!data || !data.id){
            return;
        }

        setDefaultValues({
            first_name: data.first_name || '',
            last_name: data.last_name || '',
            mobile: data.mobile || '',
            email: data.email || '',
            status: data.status || 'active',
        });
    }, [data]);

    const statusValue = watch("status");

    const goBack = useBack();

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="مدیر"
                    icon="award"
                >
                    <Form.Container withDivide withAction onSubmit={onSubmit} loading={loading}>
                        <Form.Section>

                            <Form.Item.Container htmlFor="first_name" label="نام" errors={errors.first_name}>
                                <Form.Item.Input
                                    id="first_name"
                                    slug="first_name"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="last_name" label="نام خانوادگی" errors={errors.last_name}>
                                <Form.Item.Input
                                    id="last_name"
                                    slug="last_name"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="mobile" label="شماره تماس" errors={errors.mobile}>
                                <Form.Item.Mobile
                                    id="mobile"
                                    slug="mobile"
                                    type="number"
                                    validationSchema={{required: true}}
                                    register={register}
                                    disabled={action === 'edit'}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="email" label="ایمیل" errors={errors.email}>
                                <Form.Item.Email
                                    id="email"
                                    slug="email"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                        </Form.Section>
                    </Form.Container>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};