import React, {useEffect, useState} from 'react';
import Link from "@/components/Link";
import FormItemSelect from "@/components/Form/Item/Select";
import Actions from "@/modules/account/authentication/pages/register/components/Actions";
import {useForm} from "@refinedev/react-hook-form";
import Form from '@/components/Form';

export default ({slug, data, onBack, onSubmit}) => {

    const {register, handleSubmit, formState: {errors = {}}} = useForm({
        defaultValues: data[slug] || {}
    });

    return (
        <Form.Container onSubmit={handleSubmit(onSubmit)}>

            <Form.Item.Container stacked htmlFor="company_name" label="نام ثبت شده شرکت" errors={errors.company_name}>
                <Form.Item.Input
                    slug="company_name"
                    id="company_name"
                    register={register}
                    validationSchema={{required: true}}
                />
            </Form.Item.Container>

            <Form.Item.Container stacked htmlFor="national_code" label="شناسه ملی" errors={errors.national_code}>
                <Form.Item.NationalCode
                    forCompany
                    slug="national_code"
                    id="national_code"
                    inputType="numeric"
                    type="number"
                    register={register}
                    validationSchema={{required: true}}
                />
            </Form.Item.Container>

            <Actions.Container>
                <Actions.PrevStep
                    onClick={onBack}
                >بازگشت
                </Actions.PrevStep>
                <Actions.NextStep>
                    مرحله بعد
                </Actions.NextStep>
            </Actions.Container>
        </Form.Container>
    );
};