import React, {useEffect} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import Form from "@/components/Form";
import useResourceForm from "@/hooks/useResourceForm";
import useResourceAction from "@/hooks/useResourceAction";

export const ProjectForm = ({resource = "projects", id: providedId}) => {

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
    } = useResourceForm({resource, id});

    // useEffect(() => {
    //     setDefaultValues({
    //         quota_id: 'active',
    //     });
    // }, []);

    useEffect(() => {
        if(!data || !data.id){
            return;
        }

        setDefaultValues({
            name: data.name || '',
            quota_id: data.quota_id || '',
        });
    }, [data]);

    const {fetchList: fetchQuotas} = useResourceAction("quotas");


    const {items} = fetchQuotas();
    const quotaItems = items.map(({id: quotaId, price: quotaPrice, name: quotaName}) => ({
        label: `${quotaName} - ${quotaPrice} تومان`,
        value: quotaId,
    }));

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="پروژه"
                    icon="layer-group"
                >
                    <Form.Container withDivide withAction onSubmit={onSubmit} loading={loading}>
                        <Form.Section>

                            <Form.Item.Container htmlFor="name" label="نام" errors={errors.name}>
                                <Form.Item.Input
                                    id="name"
                                    slug="name"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="quota_id" label="Quota" errors={errors.quota_id}>
                                <Form.Item.Quota
                                    id="quota_id"
                                    slug="quota_id"
                                    control={control}
                                    validationSchema={{required: true}}
                                    withPrice
                                />
                            </Form.Item.Container>

                        </Form.Section>
                    </Form.Container>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};