import React, {useEffect} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import Form from "@/components/Form";
import useResourceForm from "@/hooks/useResourceForm";

export const SnapshotForm = ({resource = "snapshots", serverId, id: providedId, onClose}) => {

    const {id: parsedId} = useParsed();
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
    } = useResourceForm({resource, id,
        refineCoreProps: {
            onMutationSuccess: () => {
                onClose();
            },
            redirect:false
        },});

    const serverIdField = register('server_id');
    console.log(serverId);

    useEffect(() => {
        setValue("server_id", serverId);
    }, [serverId]);

    useEffect(() => {
        if(!data || !data.id){
            return;
        }

        setDefaultValues({
            title: data.title || '',
            cpu: data.cpu || '',
            ram: data.ram || '',
            disk: data.disk || '',
            price: data.price || '',
            is_plan: data.is_plan || false,
            status: data.status || 'active',
        });
    }, [data]);

    const statusValue = watch("status");

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="اسنپ‌شات"
                    icon="camera"
                >
                    <Form.Container onSubmit={onSubmit} loading={loading}>
                            <Form.Item.Container stacked htmlFor="title" label="نام" errors={errors.title}>
                                <Form.Item.Input
                                    id="title"
                                    slug="title"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container stacked htmlFor="description" label="توضیحات" errors={errors.description}>
                                <Form.Item.Textarea
                                    id="description"
                                    slug="description"
                                    // validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                        <Form.Action loading={loading} onCancel={onClose} />
                    </Form.Container>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};