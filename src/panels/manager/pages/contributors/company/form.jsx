import React, {useEffect} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import Form from "@/components/Form";
import useResourceForm from "@/hooks/useResourceForm";

export const CustomerCompanyForm = ({resource = "customers_company", id: providedId}) => {

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
        setValue("type", "company");
    }, []);

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
            company_name: data.company_name || '',
            registration_number: data.registration_number || '',
            national_code: data.national_code || '',
            economic_code: data.economic_code || '',
            mobile: data.mobile || '',
            email: data.email || '',
            postal_code: data.postal_code || '',
            address: data.address || '',
        });
    }, [data]);

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="مشتری حقوقی"
                    icon="user-group"
                >
                    <Form.Container withDivide withAction onSubmit={onSubmit} loading={loading}>
                        <Form.Section>

                            <Form.Item.Container htmlFor="company_name" label="نام ثبت شده شرکت" errors={errors.company_name}>
                                <Form.Item.Input
                                    id="company_name"
                                    slug="company_name"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="registration_number" label="شماره ثبت" errors={errors.registration_number}>
                                <Form.Item.Input
                                    id="registration_number"
                                    slug="registration_number"
                                    type="number"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="national_code" label="شناسه ملی" errors={errors.national_code}>
                                <Form.Item.NationalCode
                                    id="national_code"
                                    slug="national_code"
                                    forCompany
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="economic_code" label="کد اقتصادی" errors={errors.economic_code}>
                                <Form.Item.Input
                                    id="economic_code"
                                    slug="economic_code"
                                    type="number"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="mobile" label="شماره تماس" errors={errors.mobile}>
                                <Form.Item.Mobile
                                    id="mobile"
                                    slug="mobile"
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

                            <Form.Item.Container htmlFor="postal_code" label="کد پستی" errors={errors.postal_code}>
                                <Form.Item.Input
                                    id="postal_code"
                                    slug="postal_code"
                                    type="number"
                                    validationSchema={{required: true}}
                                    register={register}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="address" label="آدرس" errors={errors.address}>
                                <Form.Item.Input
                                    id="address"
                                    slug="address"
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