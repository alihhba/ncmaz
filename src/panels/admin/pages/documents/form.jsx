import React, {useEffect} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useBack, useParsed} from "@refinedev/core";
import Form from "@/components/Form";
import useResourceForm from "@/hooks/useResourceForm";

export const DocumentForm = ({resource = "documents", id: providedId}) => {

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
            title: data.title || '',
            status: data.status || 'active',
        });
    }, [data]);

    const statusValue = watch("status");

    const goBack = useBack();

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="سند"
                    icon="clipboard"
                >
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

                        </Form.Section>
                    </Form.Container>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};