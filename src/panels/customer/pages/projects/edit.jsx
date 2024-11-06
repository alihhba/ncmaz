import React, {useEffect} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import Form from "@/components/Form";
import useResourceForm from "@/hooks/useResourceForm";
import useResourceAction from "@/hooks/useResourceAction";

export const ProjectEdit = ({resource = "projects", id: providedId, onClose = () => {}}) => {

    const {id: parsedId} = useParsed();
    const id = providedId || parsedId;

    const {
        data,
        onSubmit,
        loading,
        setDefaultValues,
        register,
        control,
        formState: {errors},
        setValue,
        watch,
        refineCore: {}
    } = useResourceForm({resource, id,
        action: 'edit',
        refineCoreProps: {
            onMutationSuccess: () => {
                onClose();
            },
        }
    });

    useEffect(() => {
        if(!data || !data.id){
            return;
        }

        setDefaultValues({
            name: data.name || '',
        });
    }, [data]);

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="پروژه"
                    icon="layer-group"
                >
                    <Form.Container onSubmit={onSubmit} loading={loading}>
                        <Form.Item.Container stacked htmlFor="name" label="نام" errors={errors.name}>
                            <Form.Item.Input
                                id="name"
                                slug="name"
                                validationSchema={{required: true}}
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